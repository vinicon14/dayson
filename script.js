// ============================================================
// API — OpenRouter (OpenAI-compatible)
// ============================================================
const API_BASE_URL = 'https://openrouter.ai/api/v1';
const API_KEY = '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';
const MODEL = 'google/gemma-4-26b-a4b-it:free';
const SYSTEM_PROMPT = 'Você é a "dayson sofia", uma consultora de moda, beleza e estética especialista, amigável e direta. Responda perguntas sobre skincare, maquiagem, cabelo, moda, cores, perfumes, estilo pessoal e tendências. Seja concisa, prática e escreva em português brasileiro. Não use markdown. Limite a 2-3 parágrafos.';
function apiHeaders() {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
    'HTTP-Referer': 'https://dayson-black.vercel.app',
    'X-Title': 'dayson sofia'
  };
}
async function fetchWithTimeout(url, options, timeoutMs) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: ctrl.signal });
    return res;
  } finally {
    clearTimeout(id);
  }
}

// ============================================================
// USAGE TRACKER
// ============================================================
const USAGE_KEY = 'dayson_usage';

function getUsage() {
  const today = new Date().toDateString();
  const saved = JSON.parse(localStorage.getItem(USAGE_KEY) || '{}');
  if (saved.date !== today) {
    saved.date = today;
    saved.chats = 0;
    saved.analyses = 0;
  }
  return saved;
}

function saveUsage(usage) {
  localStorage.setItem(USAGE_KEY, JSON.stringify(usage));
}

function incrementUsage(type) {
  const usage = getUsage();
  usage[type] = (usage[type] || 0) + 1;
  saveUsage(usage);
  updateUsageDisplay();
}

function updateUsageDisplay() {
  const el = $('usageDisplay');
  if (!el) return;
  const usage = getUsage();
  el.innerHTML = `<span>💬 ${usage.chats || 0} consultas</span><span>📸 ${usage.analyses || 0} análises</span><span>📅 ${usage.date}</span>`;
}

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
const chatPhotoInput = $('chatPhotoInput');
const chatPhotoPreview = $('chatPhotoPreview');
const chatPhotoImg = $('chatPhotoImg');
const chatPhotoRemove = $('chatPhotoRemove');
let chatPhotoDataUrl = null;

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
// CHAT — Consultoria via OpenRouter
// ============================================================
chatPhotoInput.addEventListener('change', () => {
  const file = chatPhotoInput.files[0];
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = () => {
    chatPhotoDataUrl = reader.result;
    chatPhotoImg.src = reader.result;
    chatPhotoPreview.hidden = false;
  };
  reader.readAsDataURL(file);
});

chatPhotoRemove.addEventListener('click', () => {
  chatPhotoDataUrl = null;
  chatPhotoPreview.hidden = true;
  chatPhotoImg.src = '';
  chatPhotoInput.value = '';
});

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

async function handleChat() {
  const text = chatInput.value.trim();
  if (!text && !chatPhotoDataUrl) return;

  const msg = text || '[com foto]';
  addMsg(msg, true);
  chatInput.value = '';
  chatSend.disabled = true;

  let userContent;
  if (chatPhotoDataUrl) {
    userContent = [{ type: 'text', text: text || 'Analise esta foto' }];
    if (chatPhotoDataUrl) {
      userContent.push({ type: 'image_url', image_url: { url: chatPhotoDataUrl } });
    }
  } else {
    userContent = text;
  }

  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: apiHeaders(),
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userContent }
        ],
        temperature: 0.7,
        max_tokens: 1024
      })
    }, 30000);

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Erro ${response.status}: ${err}`);
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      if (data?.choices?.[0]?.message?.reasoning) {
        throw new Error('Modelo de raciocínio não suportado');
      }
      throw new Error('Resposta vazia');
    }

    chatPhotoDataUrl = null;
    chatPhotoPreview.hidden = true;
    chatPhotoImg.src = '';
    chatPhotoInput.value = '';

    incrementUsage('chats');
    addMsg(reply);
  } catch (err) {
    console.error('Chat error:', err);
    const msg = err.name === 'AbortError'
      ? 'A consulta está demorando muito. Tente novamente.'
      : 'Desculpe, ocorreu um erro ao consultar a IA. Tente novamente.';
    addMsg(msg);
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
    img.onload = () => analyzePhoto(img, file);
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

// ============================================================
// ANÁLISE DE FOTOS — OpenRouter Vision
// ============================================================

function getVerdict(score) {
  if (score >= 9) return 'Deslumbrante! ✨';
  if (score >= 8) return 'Excelente! Sua moda está afiada';
  if (score >= 7) return 'Muito bom! Quase lá';
  if (score >= 6) return 'Bom, com espaço para melhorar';
  if (score >= 5) return 'Mediano — dá para ousar mais';
  return 'Precisa de atenção — vamos trabalhar nisso';
}

async function analyzePhoto(img, file) {
  uploadZone.style.display = 'none';
  result.hidden = true;
  loadingOverlay.hidden = false;
  loadingBar.style.width = '10%';
  loadingStep.textContent = 'Preparando imagem...';

  await new Promise(r => setTimeout(r, 400));

  try {
    loadingBar.style.width = '30%';
    loadingStep.textContent = 'Convertendo imagem...';

    const dataUrl = await fileToDataUrl(file);

    loadingBar.style.width = '50%';
    loadingStep.textContent = 'Enviando para IA...';
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

    const response = await fetchWithTimeout(`${API_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: apiHeaders(),
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              { type: 'image_url', image_url: { url: dataUrl } }
            ]
          }
        ],
        temperature: 0.7,
        max_tokens: 2048
      })
    }, 90000);

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`API error (${response.status}): ${err}`);
    }

    loadingBar.style.width = '80%';
    loadingStep.textContent = 'Processando resposta...';

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content;

    if (!text) {
      if (data?.choices?.[0]?.message?.reasoning) {
        throw new Error('Modelo de raciocínio não suportado');
      }
      throw new Error('Resposta vazia');
    }

    const cleaned = text.replace(/```json\s*/gi, '').replace(/```\s*$/g, '').trim();
    const json = JSON.parse(cleaned);

    loadingBar.style.width = '95%';
    loadingStep.textContent = 'Montando resultado...';
    await new Promise(r => setTimeout(r, 300));

    incrementUsage('analyses');
    loadingOverlay.hidden = true;
    showResult(img, json);

  } catch (err) {
    console.error('Analysis error:', err);
    loadingOverlay.hidden = true;
    const msg = err.name === 'AbortError'
      ? 'A análise está demorando muito. Tente novamente com uma foto menor.'
      : err.message;
    alert('Erro ao analisar a foto: ' + msg);
    uploadZone.style.display = 'block';
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
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
updateUsageDisplay();

console.log('✨ dayson sofia — inteligência de moda');
