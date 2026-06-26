// ============================================================
// KNOWLEDGE BASE — Consultoria de Beleza (100% local)
// ============================================================
const tipsDB = [
  {
    id: 'skincare',
    keywords: ['pele', 'acne', 'espinha', 'cravo', 'oleosa', 'seca', 'mista', 'hidratar', 'hidratação', 'hidratante', 'rugas', 'olheira', 'protetor solar', 'fps', 'limpeza', 'sabonete', 'tonico', 'tônico', 'serum', 'sérum', 'vitamina c', 'retinol', 'esfoliar', 'esfoliação'],
    responses: [
      'Para pele oleosa, use um cleanser com ácido salicílico e um hidratante oil-free. A dica de ouro: não pule o protetor solar mesmo em dias nublados — sua pele agradece!',
      'A chave para uma pele saudável é consistência: limpeza, hidratação e proteção solar todos os dias. À noite, inclua um sérum com vitamina C ou retinol (alternando os dias).',
      'Olheiras podem ser amenizadas com compressas frias pela manhã e cremes com cafeína ou vitamina K. Mas nada substitui uma boa noite de sono!',
      'Esfolie a pele 1-2x por semana para renovar as células. Prefira esfoliantes químicos (AHA/BHA) aos físicos — são mais suaves e eficazes.',
      'O protetor solar é o item mais importante da sua rotina. Use FPS 30+ todos os dias, reaplicando a cada 3-4 horas. Sua pele do futuro vai te agradecer.',
      'Para acne, evite produtos oleosos e lave o rosto no máximo 2x ao dia. Lavar demais resseca e estimula ainda mais oleosidade. Consulte um dermatologista para casos persistentes.',
    ],
  },
  {
    id: 'makeup',
    keywords: ['maquiagem', 'maquiar', 'batom', 'base', 'corretivo', 'delineado', 'sombra', 'rimel', 'rímel', 'blush', 'iluminador', 'pó', 'contorno', 'fixador', 'primer', 'make'],
    responses: [
      'Uma base bem aplicada muda tudo! Use primer antes e esfumace bem com pincel ou esponja úmida. O segredo é construir em camadas finas.',
      'Para um batom durar o dia todo: esfolie os lábios, aplique um delineador labial, preencha com batom e dê um leve selado com pó translúcido através de um lenço.',
      'O delineado perfeito pede prática e um bom produto. Comece com traços finos e vá engrossando. Dica: use fita adesiva para guiar o traço!',
      'Sombra nos olhos claros realça o olhar. Para olhos pequenos, evite preto na linha d\'água inferior — use marrom ou bege para abrir o olhar.',
      'O contorno certo valoriza suas feições. O segredo é esfumar bem: nada de linhas marcadas. Produtos em creme são mais fáceis de espalhar que os em pó.',
    ],
  },
  {
    id: 'hair',
    keywords: ['cabelo', 'corte', 'penteado', 'shampoo', 'condicionador', 'hidratacao capilar', 'cabelo cacheado', 'cabelo liso', 'cabelo crespo', 'cacho', 'finalizar', 'leave-in', 'oleo capilar', 'óleo capilar', 'reconstrucao', 'nutricao', 'nutrição', 'umbização', 'umbização capilar'],
    responses: [
      'Cabelos cacheados e crespos amam hidratação! Invite em um bom leave-in e finalize com os cachos amassados de baixo para cima. Nunca passe os dedos depois de seco!',
      'Para cabelos lisos, evite lavar com água muito quente — isso abre as cutículas e causa frizz. Use shampoo seco entre as lavagens para preservar a oleosidade natural.',
      'A hidratação capilar deve ser feita 1x por semana. Máscaras com queratina, colágeno e óleos vegetais fazem milagres. Não esqueça de finalizar com óleo nas pontas.',
      'O corte certo valoriza seu formato de rosto. Rostos redondos ficam bem com cortes alongados nas laterais; rostos quadrados suavizam com camadas e franjas laterais.',
      'Um bom cronograma capilar alterna hidratação, nutrição e reconstrução. Assim você mantém o cabelo saudável, brilhante e forte em todas as estações.',
    ],
  },
  {
    id: 'fashion',
    keywords: ['roupa', 'estilo', 'look', 'vestido', 'calça', 'blusa', 'saia', 'short', 'jeans', 'social', 'terno', 'blazer', 'cropped', 'look', 'acessorio', 'acessório', 'bolsa', 'sapato', 'tenis', 'salto', 'tendencia', 'tendência', 'moda', 'outfit'],
    responses: [
      'Ter um estilo próprio é mais sobre confiança do que sobre tendências. Invista em peças-base de qualidade (jeans bem cortado, camiseta branca, blazer) e use os acessórios para expressar personalidade.',
      'A tendência atual mistura peças estruturadas com casuais — um blazer com jeans e tênis, por exemplo. O contraste de texturas cria um visual interessante e moderno.',
      'Cores neutras (preto, branco, bege, cinza) são a base de um guarda-roupa versátil. Adicione 2-3 peças coloridas ou estampadas para dar vida aos looks.',
      'Acessórios transformam qualquer look: um cinto marcando a cintura, um colar statement ou uma bolsa com personalidade elevam o visual sem esforço.',
      'Para um look monocromático funcionar, varie texturas: couro com algodão, seda com lã. O contraste tátil mantém o visual interessante mesmo numa só cor.',
    ],
  },
  {
    id: 'colors',
    keywords: ['cor', 'cores', 'coloracao', 'cartela', 'colorimetria', 'tom de pele', 'tom', 'pele negra', 'pele branca', 'pele morena', 'combina', 'combinar', 'colorido'],
    responses: [
      'A colorimetria pessoal é a chave para escolher cores que valorizam você. Peles com subtom quente (veias verdes) combinam com tons terrosos e dourados. Subtom frio (veias azuis) brilha em azuis, rosas e prata.',
      'Para peles negras e morenas, cores vibrantes como vermelho, amarelo, azul royal e verde esmeralda criam um contraste deslumbrante. Tons pastel também podem funcionar com a maquiagem certa.',
      'O preto combina com tudo, mas explore marinho, marrom e cinza chumbo como alternativas igualmente versáteis e talvez mais interessantes.',
      'Uma dica prática: cores análogas (vizinhas no círculo cromático) criam looks harmônicos. Cores complementares (opostas) criam contraste ousado e vibrante.',
    ],
  },
  {
    id: 'body',
    keywords: ['corpo', 'formato', 'silhueta', 'magro', 'magra', 'gordo', 'gorda', 'plus size', 'curvy', 'cintura', 'quadril', 'ombro', 'barriga', 'seios', 'alto', 'baixa', 'alongar', 'alongar silhueta'],
    responses: [
      'Vista seu corpo real, não o corpo que você acha que deveria ter. Roupas que servem bem no seu tamanho atual são sempre mais elegantes do que peças apertadas ou largas demais.',
      'Para alongar a silhueta, use a mesma cor da cintura aos pés — isso cria uma linha vertical contínua. Sapatos de cor similar à calça também ajudam.',
      'Silhueta ampulheta: marque a cintura e abuse de peças que equilibrem ombros e quadris. Vestidos envelope e cintos são seus melhores amigos.',
      'Silhueta pera (quadris largos): destaque a parte de cima com cores claras, decotes e ombreiras, e use cores escuras na parte de baixo para equilibrar.',
      'Silhueta triângulo invertido (ombros largos): aposte em decotes em V, cores escuras em cima e claras em baixo, e calças com detalhes nos quadris para equilibrar.',
    ],
  },
  {
    id: 'perfume',
    keywords: ['perfume', 'perfumaria', 'fragrancia', 'fragrância', 'cheiro', 'aroma', 'colônia', 'desodorante'],
    responses: [
      'O perfume ideal é aquele que conversa com sua química corporal. Teste na pele e espere 15 minutos para sentir o aroma real — nunca julgue pelo cheiro no frasco.',
      'Perfumes cítricos e florais são perfeitos para o dia. Orientais e amadeirados funcionam melhor à noite. Mas no fim, use o que te faz feliz a qualquer hora!',
      'Para o perfume durar mais: aplique nas áreas quentes do corpo (punhos, pescoço, atrás dos joelhos) e hidrate a pele antes. Perfume em pele hidratada dura muito mais.',
    ],
  },
  {
    id: 'saudacao',
    keywords: ['oi', 'ola', 'olá', 'bom dia', 'boa tarde', 'boa noite', 'hey', 'tudo bem', 'td bem'],
    responses: [
      'Olá! 😊 Sou a dayson sofia, sua consultora de moda e beleza. Como posso ajudar hoje? Pode perguntar sobre skincare, maquiagem, cabelo, moda ou cores!',
      'Oi! Que bom falar com você! Estou aqui para dar dicas de beleza, moda e estilo. O que você gostaria de saber?',
    ],
  },
];

const fallbackResponses = [
  'Que pergunta interessante! Pelo que entendi, você quer uma dica de estilo. Invista em peças atemporais de qualidade e use acessórios para dar personalidade ao look.',
  'Ótima pergunta! No universo da moda, o mais importante é o conforto e a confiança. Escolha peças que façam você se sentir bem — isso transparece no visual.',
  'Entendi! Uma dica valiosa: mantenha um guarda-roupa cápsula com peças versáteis que se combinam entre si. Isso simplifica suas manhãs e garante looks sempre elegantes.',
  'Sobre isso que você perguntou, a dica de ouro é: conheça seu próprio estilo antes de seguir tendências. O que funciona em alguém pode não funcionar em você — e tá tudo bem!',
  'Boa pergunta! Lembre-se: a moda é sobre expressão pessoal. Misture referências, experimente combinações inusitadas e, acima de tudo, divirta-se com o processo.',
];

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
const STORAGE_KEY = 'dayson_gemini_key';

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
// CHAT — Consultoria de Beleza (100% local)
// ============================================================
function normalize(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '');
}

function findBestMatch(text) {
  const normalized = normalize(text);
  let best = { score: 0, responses: fallbackResponses };
  for (const cat of tipsDB) {
    let score = 0;
    for (const kw of cat.keywords) {
      const nkw = normalize(kw);
      if (normalized.includes(nkw)) score += nkw.length;
    }
    if (score > best.score) {
      best = { score, responses: cat.responses, id: cat.id };
    }
  }
  return best;
}

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

function handleChat() {
  const text = chatInput.value.trim();
  if (!text) return;
  addMsg(text, true);
  chatInput.value = '';
  chatSend.disabled = true;
  setTimeout(() => {
    const match = findBestMatch(text);
    const reply = match.responses[Math.floor(Math.random() * match.responses.length)];
    addMsg(reply);
    chatSend.disabled = false;
    chatInput.focus();
  }, 500 + Math.random() * 400);
}

chatSend.addEventListener('click', handleChat);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleChat();
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
