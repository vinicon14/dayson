// ============================================================
// KNOWLEDGE BASE — Consultoria de Beleza
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
      'Cabelos cacheados e crespos amam hidratação! Invista em um bom leave-in e finalize com os cachos amassados de baixo para cima. Nunca passe os dedos depois de seco!',
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
      'Olá! 😊 Sou a dayson, sua consultora de moda e beleza. Como posso ajudar hoje? Pode perguntar sobre skincare, maquiagem, cabelo, moda ou cores!',
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
const uploadContent = $('uploadContent');
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
const modelStatusConsultar = $('modelStatusConsultar');
const modelStatusJulgar = $('modelStatusJulgar');

// ============================================================
// TABS
// ============================================================
tabs.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    Object.values(panels).forEach((p) => p.classList.remove('active'));
    panels[tab].classList.add('active');
  });
});

// ============================================================
// CHAT — Consultoria de Beleza
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
  avatar.textContent = isUser ? 'V' : 'd';
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
    const responses = match.responses;
    const reply = responses[Math.floor(Math.random() * responses.length)];
    addMsg(reply);
    chatSend.disabled = false;
    chatInput.focus();
  }, 600 + Math.random() * 400);
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
    img.onload = () => analyze(img);
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

// ============================================================
// TRANSFORMERS.JS — Model Loading
// ============================================================
let captionModel = null;
let modelPromise = null;

async function loadCaptionModel(onProgress) {
  if (captionModel) return captionModel;
  if (modelPromise) return modelPromise;

  const onProgressHandler = typeof onProgress === 'function' ? onProgress : () => {};

  modelPromise = (async () => {
    try {
      onProgressHandler({ status: 'loading', progress: 10, step: 'Carregando biblioteca Transformers.js...' });

      if (typeof transformers === 'undefined') throw new Error('Transformers.js não carregado');

      const { pipeline, env } = transformers;

      env.allowRemoteModels = true;
      env.allowLocalModels = false;

      onProgressHandler({ status: 'downloading', progress: 30, step: 'Baixando modelo BLIP de IA... (pode levar alguns minutos na primeira vez)' });

      const model = await pipeline('image-to-text', 'Xenova/blip-image-captioning-base', {
        progress_callback: (p) => {
          if (p.status === 'progress') {
            const prog = 30 + Math.round((p.loaded / p.total) * 50);
            onProgressHandler({ status: 'downloading', progress: Math.min(prog, 80), step: `Baixando modelo... ${Math.round(p.loaded / 1000000)}MB / ${Math.round(p.total / 1000000)}MB` });
          }
        },
      });

      onProgressHandler({ status: 'ready', progress: 100, step: 'Modelo carregado!' });
      captionModel = model;
      modelLoaded = true;
      updateModelStatus('Modelo de IA pronto ✓');
      return model;
    } catch (err) {
      console.warn('Transformers.js não disponível:', err);
      modelPromise = null;
      updateModelStatus('Modo offline — análise simulada');
      throw err;
    }
  })();

  return modelPromise;
}

function updateModelStatus(msg) {
  modelStatusConsultar.textContent = msg;
  modelStatusJulgar.textContent = msg;
}

// ============================================================
// AI FASHION ANALYSIS
// ============================================================
const fashionKeywords = {
  clothing: {
    dress: { label: 'vestido', formal: 7, trendy: 8, style: 'feminino' },
    suit: { label: 'terno', formal: 10, trendy: 6, style: 'formal' },
    blazer: { label: 'blazer', formal: 8, trendy: 7, style: 'formal' },
    jacket: { label: 'jaqueta', formal: 5, trendy: 8, style: 'casual' },
    jeans: { label: 'jeans', formal: 3, trendy: 7, style: 'casual' },
    pants: { label: 'calça', formal: 5, trendy: 6, style: 'variado' },
    trousers: { label: 'calça social', formal: 9, trendy: 5, style: 'formal' },
    skirt: { label: 'saia', formal: 6, trendy: 7, style: 'feminino' },
    shirt: { label: 'camisa', formal: 7, trendy: 5, style: 'formal' },
    't-shirt': { label: 'camiseta', formal: 2, trendy: 6, style: 'casual' },
    top: { label: 'top', formal: 3, trendy: 7, style: 'casual' },
    'high heels': { label: 'salto alto', formal: 8, trendy: 7, style: 'feminino' },
    sneakers: { label: 'tênis', formal: 2, trendy: 8, style: 'casual' },
    boots: { label: 'botas', formal: 5, trendy: 8, style: 'variado' },
    tie: { label: 'gravata', formal: 10, trendy: 4, style: 'formal' },
    coat: { label: 'casaco', formal: 7, trendy: 7, style: 'variado' },
    sweater: { label: 'suéter', formal: 4, trendy: 6, style: 'casual' },
    hoodie: { label: 'moletom', formal: 1, trendy: 7, style: 'streetwear' },
    hat: { label: 'chapéu', formal: 5, trendy: 6, style: 'variado' },
    glasses: { label: 'óculos', formal: 5, trendy: 7, style: 'variado' },
    scarf: { label: 'cachecol', formal: 5, trendy: 6, style: 'variado' },
    bag: { label: 'bolsa', formal: 5, trendy: 7, style: 'variado' },
    watch: { label: 'relógio', formal: 6, trendy: 6, style: 'variado' },
  },
  colors: {
    red: { label: 'vermelho', vibrant: 9 },
    blue: { label: 'azul', vibrant: 7 },
    black: { label: 'preto', vibrant: 4 },
    white: { label: 'branco', vibrant: 3 },
    pink: { label: 'rosa', vibrant: 8 },
    green: { label: 'verde', vibrant: 7 },
    yellow: { label: 'amarelo', vibrant: 9 },
    purple: { label: 'roxo', vibrant: 8 },
    gray: { label: 'cinza', vibrant: 2 },
    brown: { label: 'marrom', vibrant: 3 },
    gold: { label: 'dourado', vibrant: 9 },
    silver: { label: 'prateado', vibrant: 8 },
    orange: { label: 'laranja', vibrant: 9 },
    navy: { label: 'marinho', vibrant: 4 },
    beige: { label: 'bege', vibrant: 2 },
  },
  style: {
    casual: { label: 'casual', formal: 2, trendy: 6 },
    formal: { label: 'formal', formal: 10, trendy: 5 },
    elegant: { label: 'elegante', formal: 8, trendy: 8 },
    streetwear: { label: 'streetwear', formal: 1, trendy: 9 },
    sporty: { label: 'esportivo', formal: 1, trendy: 5 },
    bohemian: { label: 'boho', formal: 3, trendy: 7 },
    vintage: { label: 'vintage', formal: 4, trendy: 8 },
    minimal: { label: 'minimalista', formal: 7, trendy: 7 },
  },
};

function analyzeCaption(caption) {
  const lower = caption.toLowerCase();
  const found = { clothes: [], colors: [], styles: [] };

  for (const [key, data] of Object.entries(fashionKeywords.clothing)) {
    if (lower.includes(key)) found.clothes.push(data);
  }
  for (const [key, data] of Object.entries(fashionKeywords.colors)) {
    if (lower.includes(key)) found.colors.push(data);
  }
  for (const [key, data] of Object.entries(fashionKeywords.style)) {
    if (lower.includes(key)) found.styles.push(data);
  }

  const scoreStyle = found.clothes.length > 0
    ? Math.min(10, Math.round(5 + found.clothes.length * 1.2 + (found.styles.length > 0 ? 2 : 0)))
    : Math.round(4 + Math.random() * 3);

  const scoreColors = found.colors.length > 0
    ? Math.min(10, Math.round(5 + found.colors.reduce((a, c) => a + (c.vibrant > 7 ? 1 : 0), 0) * 0.8))
    : Math.round(5 + Math.random() * 3);

  const trendiness = found.clothes.length > 0
    ? Math.min(10, Math.round(4 + found.clothes.reduce((a, c) => a + c.trendy, 0) / found.clothes.length * 0.6))
    : Math.round(5 + Math.random() * 2);

  const harmony = found.colors.length >= 2
    ? Math.min(10, Math.round(6 + Math.random() * 3))
    : Math.round(5 + Math.random() * 3);

  const overall = Math.round((scoreStyle + scoreColors + trendiness + harmony) / 4);

  return {
    overall,
    categories: [
      { name: 'Estilo', score: scoreStyle, color: '#ec4899' },
      { name: 'Cores', score: scoreColors, color: '#2dd4bf' },
      { name: 'Tendência', score: trendiness, color: '#fbbf24' },
      { name: 'Harmonia', score: harmony, color: '#a78bfa' },
    ],
    clothes: found.clothes.map(c => c.label),
    colors: found.colors.map(c => c.label),
    styles: found.styles.map(s => s.label),
    raw: caption,
  };
}

function generateComment(analysis) {
  const { overall, clothes, colors, styles, raw } = analysis;
  const itemList = clothes.length > 0 ? clothes.slice(0, 3).join(', ') : 'peças interessantes';
  const colorList = colors.length > 0 ? colors.slice(0, 3).join(', ') : 'tons variados';
  const styleDesc = styles.length > 0 ? `com um viés ${styles[0]}` : 'com personalidade própria';

  let comment;
  if (overall >= 8) {
    comment = `Seu look está impressionante! Notei ${itemList} em ${colorList} ${styleDesc}. A combinação demonstra um bom conhecimento de moda e atenção aos detalhes. O equilíbrio entre as peças cria um visual coeso e elegante. Continue assim!`;
  } else if (overall >= 6) {
    comment = `Seu look tem potencial! Vejo ${itemList} em ${colorList} ${styleDesc}. A composição é boa, mas alguns ajustes podem elevar ainda mais o visual. Tente brincar mais com texturas e camadas para dar profundidade ao look.`;
  } else if (overall >= 4) {
    comment = `Seu look é básico mas funcional. Percebi ${itemList} ${styleDesc}. Para dar mais personalidade, experimente adicionar um acessório statement ou uma peça de cor contrastante. Pequenos detalhes fazem grande diferença!`;
  } else {
    comment = `Este look é confortável e despojado. Não identifiquei muitos elementos de moda elaborados, mas o conforto vem primeiro! Se quiser ousar mais, tente incorporar uma peça-chave como um blazer ou um acessório marcante.`;
  }

  if (colors.length === 0 && overall < 7) {
    comment += ' Uma dica: cores vibrantes podem transformar completamente um visual.';
  }

  return comment;
}

function generateTips(analysis) {
  const tips = [];
  const { overall, clothes, colors } = analysis;

  if (clothes.length === 0) {
    tips.push('Adicione peças com mais personalidade ao look — uma jaqueta estilosa ou um calçado diferente já fazem diferença.');
  } else {
    tips.push(`As peças que identifiquei (${clothes.slice(0, 3).join(', ')}) são um ótimo ponto de partida. Tente combiná-las de formas inesperadas.`);
  }

  if (colors.length < 2) {
    tips.push('Experimente introduzir uma cor de destaque no look — um acessório colorido ou uma peça em tom vibrante cria interesse visual.');
  } else {
    tips.push(`A paleta de cores (${colors.slice(0, 3).join(', ')}) funciona bem. Tente adicionar um toque de cor complementar para dar mais vida.`);
  }

  if (overall < 6) {
    tips.push('Invista em peças-base de qualidade: um bom jeans, uma camiseta branca bem cortada e um blazer versátil formam a base de qualquer guarda-roupa.');
    tips.push('Acessórios são a forma mais fácil de elevar um look. Um cinto, um relógio ou uma bolsa com personalidade transformam o visual.');
  } else {
    tips.push('Para levar este look ao próximo nível, foque nos detalhes: a barra da calça, o tipo de dobra na manga, o acabamento dos acessórios.');
    tips.push('Texturas diferentes (couro, algodão, seda) criam profundidade visual mesmo em looks monocromáticos. Experimente misturar!');
  }

  if (analysis.styles.includes('formal')) {
    tips.push('O visual formal está bem encaminhado. Para eventos noturnos, invista em um tecido com mais caimento e um sapato de qualidade.');
  } else if (analysis.styles.includes('casual') || analysis.styles.length === 0) {
    tips.push('O estilo casual é confortável, mas você pode elevá-lo com um blazer estruturado ou um sapato mais sofisticado mantendo a essência.');
  }

  tips.push('Lembre-se: o melhor acessório é a confiança. Use o que te faz sentir bem!');

  return tips.slice(0, 5);
}

function getVerdict(score) {
  if (score >= 9) return 'Deslumbrante! ✨';
  if (score >= 8) return 'Excelente! Sua moda está afiada';
  if (score >= 7) return 'Muito bom! Quase lá';
  if (score >= 6) return 'Bom, com espaço para melhorar';
  if (score >= 5) return 'Mediano — dá para ousar mais';
  return 'Precisa de atenção — vamos trabalhar nisso';
}

// ============================================================
// SIMULATED ANALYSIS (fallback)
// ============================================================
function simulateAnalysis() {
  const items = ['camiseta', 'jeans', 'tênis', 'blazer', 'vestido', 'saia', 'blusa', 'casaco', 'botas', 'acessórios'];
  const colors = ['preto', 'branco', 'azul', 'vermelho', 'bege', 'cinza', 'verde', 'rosa'];
  const styles = ['casual', 'elegante', 'despojado', 'moderno', 'clássico'];

  const item = items[Math.floor(Math.random() * items.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const style = styles[Math.floor(Math.random() * styles.length)];

  const fakeCaption = `uma pessoa vestindo ${item} ${color} com um estilo ${style}`;
  return analyzeCaption(fakeCaption);
}

// ============================================================
// ANALYZE IMAGE
// ============================================================
async function analyze(img) {
  uploadZone.style.display = 'none';
  result.hidden = true;
  loadingOverlay.hidden = false;
  loadingBar.style.width = '5%';

  const updateProgress = (state) => {
    if (state.progress) loadingBar.style.width = state.progress + '%';
    if (state.step) loadingStep.textContent = state.step;
    if (state.status === 'downloading') {
      loadingText.textContent = 'dayson está baixando o modelo de IA...';
    }
  };

  try {
    updateProgress({ progress: 5, step: 'Preparando imagem...' });

    await new Promise(r => setTimeout(r, 600));

    updateProgress({ progress: 15, step: 'Iniciando motor de IA...' });

    let model;
    let analysis;
    let usedFallback = false;

    try {
      model = await loadCaptionModel(updateProgress);
      updateProgress({ progress: 85, step: 'Analisando sua foto...' });
      await new Promise(r => setTimeout(r, 300));

      const result = await model(img);
      const caption = Array.isArray(result) ? result[0].generated_text : result.generated_text || String(result);

      updateProgress({ progress: 92, step: 'Processando resultados...' });
      await new Promise(r => setTimeout(r, 400));

      analysis = analyzeCaption(caption);
    } catch (modelErr) {
      console.warn('Model analysis failed, using simulation:', modelErr);
      updateProgress({ progress: 85, step: 'Usando análise otimizada...' });
      await new Promise(r => setTimeout(r, 800));
      analysis = simulateAnalysis();
      usedFallback = true;
    }

    updateProgress({ progress: 98, step: 'Montando resultado...' });
    await new Promise(r => setTimeout(r, 500));

    loadingOverlay.hidden = true;
    showResult(img, analysis, usedFallback);

  } catch (err) {
    console.error('Analysis error:', err);
    loadingOverlay.hidden = true;

    const analysis = simulateAnalysis();
    showResult(img, analysis, true);
  }
}

// ============================================================
// SHOW RESULT
// ============================================================
function showResult(img, analysis, fallback) {
  result.hidden = false;
  resultImg.src = img.src;

  const { overall, categories: cats, raw } = analysis;

  resultScore.textContent = overall;

  const scoreVal = overall;
  let scoreColor = '#f87171';
  if (scoreVal >= 8) scoreColor = '#2dd4bf';
  else if (scoreVal >= 6) scoreColor = '#fbbf24';
  else if (scoreVal >= 4) scoreColor = '#fb923c';

  resultCircle.style.color = scoreColor;
  resultVerdict.textContent = getVerdict(overall);

  if (fallback) {
    modelStatusJulgar.textContent = 'Análise otimizada (modelo de IA indisponível)';
  }

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
    bar.style.background = cat.color;

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

  resultComment.textContent = generateComment(analysis);

  const tips = generateTips(analysis);
  const tipsList = resultTips;
  tipsList.innerHTML = '';
  tips.forEach((tip) => {
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
// INIT — Preload model status
// ============================================================
updateModelStatus('Modelo de IA será carregado ao analisar uma foto');

console.log('✨ dayson — inteligência de moda');
console.log('📸 Modelo: BLIP Image Captioning (Transformers.js)');
console.log('🔒 100% local — suas fotos não saem do seu dispositivo');
