// ============================================================
// GEMINI API — Config
// ============================================================
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const STORAGE_KEY = 'dayson_gemini_key';
const SYSTEM_PROMPT = 'Você é a "dayson sofia", uma consultora de moda, beleza e estética especialista, amigável e direta. Responda perguntas sobre skincare, maquiagem, cabelo, moda, cores, perfumes, estilo pessoal e tendências. Seja concisa, prática e escreva em português brasileiro. Não use markdown. Limite a 2-3 parágrafos.';

// ============================================================
// DOM REFS
// ============================================================
const $ = (id) => document.getElementById(id);
const tabs = document.querySelectorAll('.tab');
const panels = {
  consultar: $('panel-consultar'),
  julgar: $('panel-julgar'),
  sobre: $('panel-sobre'),
};
const chat = $('chat');
const chatInput = $('chatInput');
const chatSend = $('chatSend');
const uploadZone = $('uploadZone');
const fileInput = $('fileInput');
const loadingOverlay = $('loadingOverlay');
const loadingText = $('loadingText');
const loadingBar = $('loadingBar');
const loadingStep = $('loadingStep');
const result = $('result');
const resultImg = $('resultImg');
const resultScore = $('resultScore');
const resultCircle = $('resultCircle');
const resultVerdict = $('resultVerdict');
const categories = $('categories');
const resultComment = $('resultComment');
const resultTips = $('resultTips');
const btnReset = $('btnReset');
const apiKeyInput = $('apiKeyInput');
const apiKeySave = $('apiKeySave');
const apiKeyStatus = $('apiKeyStatus');
const modelStatusJulgar = $('modelStatusJulgar');

// ============================================================
// API KEY MANAGEMENT
// ============================================================
function loadApiKey() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    apiKeyInput.value = saved;
    apiKeyStatus.textContent = 'Chave salva ✓';
    apiKeyStatus.className = 'api-key-status ok';
    return saved;
  }
  apiKeyStatus.textContent = 'Nenhuma chave configurada';
  apiKeyStatus.className = 'api-key-status';
  return '';
}

function saveApiKey() {
  const key = apiKeyInput.value.trim();
  if (!key) {
    apiKeyStatus.textContent = 'Digite uma chave válida';
    apiKeyStatus.className = 'api-key-status erro';
    return;
  }
  localStorage.setItem(STORAGE_KEY, key);
  apiKeyStatus.textContent = 'Chave salva com sucesso ✓';
  apiKeyStatus.className = 'api-key-status ok';
}

function getApiKey() {
  const key = apiKeyInput.value.trim() || localStorage.getItem(STORAGE_KEY);
  return key || '';
}

apiKeySave.addEventListener('click', saveApiKey);
apiKeyInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') saveApiKey();
});

// ============================================================
// TABS
// ============================================================
tabs.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    btn.classList.add('active');
    Object.values(panels).forEach((p) => p.classList.remove('active'));
    panels[btn.dataset.tab].classList.add('active');
  });
});

// ============================================================
// CHAT — Consultoria via Gemini API
// ============================================================
function addMsg(text, isUser = false) {
  const div = document.createElement('div');
  div.className = `msg ${isUser ? 'msg-user' : 'msg-ia'}`;
  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = isUser ? 'V' : 's';
  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  const p = document.createElement('p');
  p.textContent = text;
  bubble.appendChild(p);
  div.appendChild(avatar);
  div.appendChild(bubble);
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function addMsgWithEl(text, isUser) {
  addMsg(text, isUser);
}

async function handleChat() {
  const text = chatInput.value.trim();
  if (!text) return;

  const apiKey = getApiKey();
  if (!apiKey) {
    addMsg('Primeiro configure sua chave da API Gemini na aba "Julgar" para eu poder responder.');
    return;
  }

  addMsg(text, true);
  chatInput.value = '';
  chatSend.disabled = true;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
          { role: 'user', parts: [{ text }] }
        ],
        generationConfig: { temperature: 0.7, maxOutputTokens: 512 }
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Erro ${response.status}: ${err}`);
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) throw new Error('Resposta vazia');

    addMsg(reply);
  } catch (err) {
    console.error('Chat error:', err);
    addMsg('Desculpe, ocorreu um erro ao consultar a IA. Verifique sua chave da API e tente novamente.');
  }

  chatSend.disabled = false;
  chatInput.focus();
}

chatSend.addEventListener('click', handleChat);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleChat(); }
});

// ============================================================
// UPLOAD — Julgamento de Look
// ============================================================
uploadZone.addEventListener('click', () => fileInput.click());

uploadZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadZone.classList.add('dragover');
});
uploadZone.addEventListener('dragleave', () => {
  uploadZone.classList.remove('dragover');
});
uploadZone.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadZone.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file) processFile(file);
});

fileInput.addEventListener('change', () => {
  if (fileInput.files[0]) processFile(fileInput.files[0]);
});

function processFile(file) {
  if (!file.type.startsWith('image/')) {
    alert('Por favor, selecione um arquivo de imagem válido (JPG ou PNG).');
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    alert('A imagem é muito grande. O tamanho máximo é 10MB.');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => analyzeWithGemini(img, file);
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

// ============================================================
// GEMINI API — Análise de Fotos
// ============================================================
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

function getVerdict(score) {
  if (score >= 9) return 'Deslumbrante! ✨';
  if (score >= 8) return 'Excelente! Sua moda está afiada';
  if (score >= 7) return 'Muito bom! Quase lá';
  if (score >= 6) return 'Bom, com espaço para melhorar';
  if (score >= 5) return 'Mediano — dá para ousar mais';
  return 'Precisa de atenção — vamos trabalhar nisso';
}

async function analyzeWithGemini(img, file) {
  const apiKey = getApiKey();
  if (!apiKey) {
    alert('Primeiro configure sua chave da API Gemini na seção acima.');
    return;
  }

  uploadZone.style.display = 'none';
  result.hidden = true;
  loadingOverlay.hidden = false;
  loadingBar.style.width = '10%';
  loadingStep.textContent = 'Preparando imagem...';

  await new Promise(r => setTimeout(r, 400));

  try {
    loadingBar.style.width = '30%';
    loadingStep.textContent = 'Convertendo imagem...';

    const base64 = await fileToBase64(file);
    const mimeType = file.type;

    loadingBar.style.width = '50%';
    loadingStep.textContent = 'Enviando para Gemini AI...';
    loadingText.textContent = 'dayson sofia está analisando seu look...';

    const prompt = `Você é a "dayson sofia", uma especialista em moda, estilo e estética. Analise esta foto de uma pessoa e forneça uma crítica de moda detalhada e realista.

Retorne APENAS um objeto JSON válido (sem markdown, sem texto extra) com esta estrutura exata:
{
  "overall": <nota geral 0-10>,
  "categories": [
    {"name": "Estilo", "score": <0-10>},
    {"name": "Cores", "score": <0-10>},
    {"name": "Tendência", "score": <0-10>},
    {"name": "Harmonia", "score": <0-10>}
  ],
  "comment": "<análise detalhada em português, 2-3 frases>",
  "tips": ["<dica 1>", "<dica 2>", "<dica 3>", "<dica 4>", "<dica 5>"]
}

Seja honesta e realista nos scores. Escreva tudo em português brasileiro.`;

    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: prompt },
            { inline_data: { mime_type: mimeType, data: base64 } }
          ]
        }]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Gemini API error (${response.status}): ${err}`);
    }

    loadingBar.style.width = '80%';
    loadingStep.textContent = 'Processando resposta da IA...';

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error('Resposta vazia da API Gemini');
    }

    const json = JSON.parse(text.replace(/```json\s*/gi, '').replace(/```\s*$/g, '').trim());

    loadingBar.style.width = '95%';
    loadingStep.textContent = 'Montando resultado...';
    await new Promise(r => setTimeout(r, 300));

    loadingOverlay.hidden = true;
    showResult(img, json);

  } catch (err) {
    console.error('Gemini analysis error:', err);
    loadingOverlay.hidden = true;
    alert('Erro ao analisar a foto: ' + err.message);
    uploadZone.style.display = 'block';
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ============================================================
// SHOW RESULT
// ============================================================
function showResult(img, analysis) {
  result.hidden = false;
  resultImg.src = img.src;

  const { overall, categories: cats, comment, tips } = analysis;

  resultScore.textContent = overall;

  let scoreColor = '#f87171';
  if (overall >= 8) scoreColor = '#2dd4bf';
  else if (overall >= 6) scoreColor = '#fbbf24';
  else if (overall >= 4) scoreColor = '#fb923c';

  resultCircle.style.color = scoreColor;
  resultVerdict.textContent = getVerdict(overall);

  categories.innerHTML = '';
  cats.forEach((cat) => {
    const div = document.createElement('div');
    div.className = 'category';

    const name = document.createElement('div');
    name.className = 'category-name';
    name.textContent = cat.name;

    const barWrap = document.createElement('div');
    barWrap.className = 'category-bar-wrap';

    const bar = document.createElement('div');
    bar.className = 'category-bar';
    bar.style.width = '0%';
    bar.style.background = cat.color || '#ec4899';

    const scoreLabel = document.createElement('div');
    scoreLabel.className = `category-score ${cat.score >= 7 ? 'high' : cat.score >= 5 ? 'mid' : 'low'}`;
    scoreLabel.textContent = `${cat.score}/10`;

    barWrap.appendChild(bar);
    div.appendChild(name);
    div.appendChild(barWrap);
    div.appendChild(scoreLabel);
    categories.appendChild(div);

    setTimeout(() => { bar.style.width = (cat.score * 10) + '%'; }, 100);
  });

  resultComment.textContent = comment || 'Análise concluída.';

  const tipsList = resultTips;
  tipsList.innerHTML = '';
  (tips || ['Invista em peças que reflitam sua personalidade.']).slice(0, 5).forEach((tip) => {
    const li = document.createElement('li');
    li.textContent = tip;
    tipsList.appendChild(li);
  });

  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// RESET
// ============================================================
btnReset.addEventListener('click', () => {
  result.hidden = true;
  uploadZone.style.display = 'block';
  fileInput.value = '';
});

// ============================================================
// INIT
// ============================================================
loadApiKey();
modelStatusJulgar.textContent = 'Use sua chave da API Gemini para analisar fotos';

console.log('✨ dayson sofia — inteligência de moda');
console.log('📸 Análise via Gemini 2.0 Flash API');
console.log('💬 Consultoria local (knowledge base)');
