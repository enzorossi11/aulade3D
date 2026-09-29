// Arte vetorial (SVG) de todos os assets do Capi Rush — Bora Bike.
// Segue a ficha travada em prompts/ficha_mascote_capi.md.
// Gerar os PNGs: node assets/_fonte_svg/renderizar.mjs

export const COR = {
  laranja: '#FF6B1A', laranjaEsc: '#D9520C',
  azul: '#1B2440', azulClaro: '#2C3A66',
  verde: '#22B573', verdeEsc: '#1F8F5C',
  branco: '#F2F0EA',
  pelo: '#A8683F', peloEsc: '#8A5230', focinho: '#6E3F22',
  ouro: '#F5B82E', ouroEsc: '#D99A1E', agua: '#4FA3E0', poca: '#3F86C9',
};
const C = COR;
const TRACO = 7;
const lin = (cor, larg = TRACO) => `stroke="${C.azul}" stroke-width="${larg}" stroke-linejoin="round" fill="${cor}"`;
const svg = (w, h, corpo, fundo = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${fundo}${corpo}</svg>`;

// ---------- símbolo da marca: roda estilizada ----------
export function roda(cx, cy, r, cor = C.branco, larg = r * 0.22) {
  let raios = '';
  for (let a = 0; a < 3; a++) {
    const ang = a * Math.PI / 3, dx = Math.cos(ang) * r, dy = Math.sin(ang) * r;
    raios += `<line x1="${cx - dx}" y1="${cy - dy}" x2="${cx + dx}" y2="${cy + dy}" stroke="${cor}" stroke-width="${larg * 0.6}" stroke-linecap="round"/>`;
  }
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${cor}" stroke-width="${larg}"/>${raios}<circle cx="${cx}" cy="${cy}" r="${larg * 0.8}" fill="${cor}"/>`;
}

// ============================================================
//  Capi em pé (pés em y=0, centro em x=0). vista: frente | tres-quartos | perfil | costas
// ============================================================
function capacete(dx = 0) {
  return `
    <path d="M${-108 + dx},-318 Q${-104 + dx},-402 ${dx},-404 Q${104 + dx},-402 ${108 + dx},-318 Z" ${lin(C.laranja)}/>
    <path d="M${-12 + dx},-402 L${12 + dx},-402 L${12 + dx},-326 L${-12 + dx},-326 Z" fill="${C.branco}"/>
    <path d="M${-60 + dx},-392 Q${-30 + dx},-372 ${-40 + dx},-340" fill="none" stroke="${C.branco}" stroke-width="6" stroke-linecap="round" opacity=".55"/>
    ${roda(58 + dx, -364, 15)}
    <rect x="${-114 + dx}" y="-332" width="228" height="22" rx="11" ${lin(C.laranjaEsc, 6)}/>`;
}

function emPeFrente(giro = 0) {
  const d = giro * 30; // deslocamento das feições na vista três-quartos
  const olhoE = giro ? 0.75 : 1;
  return `
    <ellipse cx="-46" cy="-14" rx="40" ry="18" ${lin(C.peloEsc)}/>
    <ellipse cx="46" cy="-14" rx="40" ry="18" ${lin(C.peloEsc)}/>
    ${giro ? `<rect x="-116" y="-212" width="30" height="124" rx="13" ${lin(C.azul)}/>` : ''}
    <ellipse cx="0" cy="-120" rx="98" ry="110" ${lin(C.pelo)}/>
    <path d="M40,-212 Q120,-130 50,-16 Q84,-120 40,-212 Z" fill="${C.azul}" opacity=".12"/>
    <ellipse cx="-96" cy="-128" rx="26" ry="58" transform="rotate(12 -96 -128)" ${lin(C.pelo)}/>
    <ellipse cx="96" cy="-128" rx="26" ry="58" transform="rotate(-12 96 -128)" ${lin(C.pelo)}/>
    <path d="M${-72 + d / 2},-192 Q${d / 2},-214 ${72 + d / 2},-192 L${78 + d / 2},-78 Q${d / 2},-34 ${-78 + d / 2},-78 Z" ${lin(C.branco, 5)}/>
    <path d="M${-30 + d / 2},-120 L${30 + d / 2},-120" stroke="${C.laranja}" stroke-width="10" stroke-linecap="round"/>
    ${giro ? '' : `<path d="M-52,-198 L-46,-84" stroke="${C.azul}" stroke-width="18" stroke-linecap="round"/>`}
    <path d="M${52 + d / 2},-198 L${46 + d / 2},-84" stroke="${C.azul}" stroke-width="18" stroke-linecap="round"/>
    ${giro ? '' : `<circle cx="-84" cy="-338" r="17" ${lin(C.peloEsc, 6)}/>`}
    <circle cx="${84 + d / 3}" cy="-338" r="17" ${lin(C.peloEsc, 6)}/>
    <ellipse cx="${d / 3}" cy="-280" rx="102" ry="80" ${lin(C.pelo)}/>
    <rect x="${-70 + d}" y="-282" width="140" height="84" rx="40" ${lin(C.focinho, 6)}/>
    <ellipse cx="${-24 + d}" cy="-252" rx="8" ry="10" fill="${C.azul}"/>
    <ellipse cx="${24 + d}" cy="-252" rx="8" ry="10" fill="${C.azul}"/>
    <path d="M${-18 + d},-222 Q${8 + d},-208 ${34 + d},-230" fill="none" stroke="${C.azul}" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="${-52 + d * 0.8}" cy="-300" rx="${10 * olhoE}" ry="12" fill="${C.azul}"/>
    <ellipse cx="${52 + d}" cy="-300" rx="10" ry="12" fill="${C.azul}"/>
    <circle cx="${-49 + d * 0.8}" cy="-304" r="3" fill="${C.branco}"/>
    <circle cx="${55 + d}" cy="-304" r="3" fill="${C.branco}"/>
    <path d="M${-72 + d * 0.8},-324 L${-36 + d * 0.8},-318 M${72 + d},-324 L${36 + d},-318" stroke="${C.azul}" stroke-width="7" stroke-linecap="round"/>
    ${capacete(d / 3)}
    ${giro ? '' : `<path d="M-104,-310 Q-96,-250 -66,-214" fill="none" stroke="${C.azul}" stroke-width="5" stroke-linecap="round"/>`}
    <path d="M${104 + d / 3},-310 Q${96 + d / 3},-250 ${66 + d},-214" fill="none" stroke="${C.azul}" stroke-width="5" stroke-linecap="round"/>`;
}

function emPePerfil() {
  return `
    <ellipse cx="-20" cy="-14" rx="38" ry="17" ${lin(C.peloEsc)}/>
    <ellipse cx="34" cy="-14" rx="38" ry="17" ${lin(C.peloEsc)}/>
    <rect x="-116" y="-222" width="62" height="142" rx="24" ${lin(C.azul)}/>
    <ellipse cx="-6" cy="-120" rx="86" ry="110" ${lin(C.pelo)}/>
    <path d="M14,-206 Q84,-180 76,-80 Q44,-38 14,-68 Z" ${lin(C.branco, 5)}/>
    <path d="M-60,-200 L-40,-90" stroke="${C.azul}" stroke-width="16" stroke-linecap="round"/>
    <ellipse cx="18" cy="-128" rx="24" ry="58" transform="rotate(-8 18 -128)" ${lin(C.pelo)}/>
    <circle cx="-34" cy="-336" r="16" ${lin(C.peloEsc, 6)}/>
    <path d="M-74,-326 Q-86,-250 -40,-214 L108,-204 Q152,-204 152,-246 L142,-292 Q120,-332 40,-346 Q-40,-356 -74,-326 Z" ${lin(C.pelo)}/>
    <path d="M118,-296 Q146,-290 150,-250 Q150,-210 110,-206 Q126,-250 118,-296 Z" fill="${C.focinho}"/>
    <ellipse cx="138" cy="-262" rx="6" ry="8" fill="${C.azul}"/>
    <path d="M100,-222 Q118,-214 134,-224" fill="none" stroke="${C.azul}" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="40" cy="-300" rx="9" ry="12" fill="${C.azul}"/>
    <circle cx="43" cy="-304" r="3" fill="${C.branco}"/>
    <path d="M22,-322 L60,-318" stroke="${C.azul}" stroke-width="7" stroke-linecap="round"/>
    <path d="M-92,-318 Q-82,-404 10,-404 Q92,-398 98,-318 Z" ${lin(C.laranja)}/>
    <path d="M-54,-374 Q10,-394 74,-362" fill="none" stroke="${C.branco}" stroke-width="14" stroke-linecap="round"/>
    ${roda(-20, -356, 13)}
    <path d="M96,-334 L128,-326 L96,-314 Z" ${lin(C.laranjaEsc, 5)}/>
    <rect x="-96" y="-332" width="196" height="20" rx="10" ${lin(C.laranjaEsc, 6)}/>
    <path d="M44,-314 Q52,-260 60,-222" fill="none" stroke="${C.azul}" stroke-width="5" stroke-linecap="round"/>`;
}

function emPeCostas() {
  return `
    <ellipse cx="-46" cy="-14" rx="40" ry="18" ${lin(C.peloEsc)}/>
    <ellipse cx="46" cy="-14" rx="40" ry="18" ${lin(C.peloEsc)}/>
    <ellipse cx="0" cy="-120" rx="98" ry="110" ${lin(C.pelo)}/>
    <ellipse cx="-96" cy="-128" rx="26" ry="58" transform="rotate(12 -96 -128)" ${lin(C.pelo)}/>
    <ellipse cx="96" cy="-128" rx="26" ry="58" transform="rotate(-12 96 -128)" ${lin(C.pelo)}/>
    <path d="M-76,-150 Q0,-40 76,-150 L78,-78 Q0,-34 -78,-78 Z" ${lin(C.branco, 5)}/>
    <rect x="-68" y="-218" width="136" height="152" rx="34" ${lin(C.azul)}/>
    <rect x="-46" y="-140" width="92" height="52" rx="14" fill="${C.azulClaro}" stroke="${C.azul}" stroke-width="4"/>
    <rect x="-8" y="-146" width="16" height="10" rx="3" fill="${C.laranja}"/>
    <circle cx="-84" cy="-330" r="17" ${lin(C.peloEsc, 6)}/>
    <circle cx="84" cy="-330" r="17" ${lin(C.peloEsc, 6)}/>
    <ellipse cx="0" cy="-270" rx="100" ry="76" ${lin(C.pelo)}/>
    <path d="M-110,-298 Q-106,-404 0,-406 Q106,-404 110,-298 Z" ${lin(C.laranja)}/>
    <path d="M-12,-404 L12,-404 L12,-306 L-12,-306 Z" fill="${C.branco}"/>
    <rect x="-66" y="-372" width="28" height="11" rx="5" fill="${C.azul}"/>
    <rect x="38" y="-372" width="28" height="11" rx="5" fill="${C.azul}"/>
    <rect x="-116" y="-312" width="232" height="22" rx="11" ${lin(C.laranjaEsc, 6)}/>`;
}

// ============================================================
//  Capi na bike, vista de costas e um pouco de cima (sprites do jogo)
// ============================================================
function braco(x1, y1, cx, cy, x2, y2) {
  const d = `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
  return `<path d="${d}" fill="none" stroke="${C.azul}" stroke-width="40" stroke-linecap="round"/>
          <path d="${d}" fill="none" stroke="${C.pelo}" stroke-width="27" stroke-linecap="round"/>`;
}

function estrela(x, y, r, cor = C.ouro) {
  return `<path d="M${x},${y - r} Q${x + r * .18},${y - r * .18} ${x + r},${y} Q${x + r * .18},${y + r * .18} ${x},${y + r} Q${x - r * .18},${y + r * .18} ${x - r},${y} Q${x - r * .18},${y - r * .18} ${x},${y - r} Z" fill="${cor}" stroke="${C.azul}" stroke-width="3"/>`;
}

export function capiNaBike(estado = 'pedalar') {
  const pegar = estado === 'pegar', ops = estado === 'ops', ciclo = estado === 'ciclovia';
  const pernaE = ops ? 0 : 1;
  let extraAtras = '', extraFrente = '';
  if (ciclo) {
    extraAtras += `
      <defs><radialGradient id="brilho"><stop offset="0" stop-color="${C.laranja}" stop-opacity=".75"/><stop offset=".6" stop-color="${C.ouro}" stop-opacity=".35"/><stop offset="1" stop-color="${C.ouro}" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="256" cy="270" rx="200" ry="240" fill="url(#brilho)"/>`;
    for (const [x, y, l] of [[150, 380, 90], [362, 380, 90], [180, 440, 60], [332, 440, 60], [120, 300, 70], [392, 300, 70]]) {
      extraAtras += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + l}" stroke="${C.branco}" stroke-width="9" stroke-linecap="round" opacity=".85"/>`;
    }
  }
  if (ops) {
    extraFrente += `
      <path d="M150,260 Q134,300 150,340 M132,250 Q112,300 132,350 M362,260 Q378,300 362,340 M380,250 Q400,300 380,350" fill="none" stroke="${C.branco}" stroke-width="7" stroke-linecap="round"/>
      <path d="M338,120 Q352,100 344,86 Q330,100 338,120 Z" fill="${C.agua}" stroke="${C.azul}" stroke-width="3"/>
      <path d="M170,132 Q160,112 168,98 Q182,112 170,132 Z" fill="${C.agua}" stroke="${C.azul}" stroke-width="3"/>`;
  }
  if (pegar) {
    extraFrente += estrela(392, 74, 22) + estrela(424, 130, 13) + estrela(330, 52, 11);
  }
  const ladoDir = pegar
    ? braco(316, 246, 356, 190, 372, 118) + `<circle cx="372" cy="108" r="19" ${lin(C.pelo, 6)}/>`
    : braco(316, 240, 344, 200, 344, 158);

  const tufos = ops
    ? `<path d="M196,190 L178,172 L200,176 L190,152 L212,166 L214,142 L230,160 M316,190 L334,172 L312,176 L322,152 L300,166 L298,142 L282,160" fill="none" stroke="${C.peloEsc}" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"/>`
    : '';

  const corpo = `
    ${extraAtras}
    <g transform="${ops ? 'rotate(-9 256 300)' : pegar ? 'translate(0 -14)' : ciclo ? 'translate(0 6) scale(1 .97)' : ''}">
      <rect x="238" y="30" width="36" height="120" rx="18" fill="${C.azul}"/>
      <rect x="246" y="44" width="20" height="92" rx="10" fill="${C.azulClaro}"/>
      <rect x="226" y="126" width="60" height="30" rx="10" ${lin(C.laranja, 5)}/>
      <path d="M166,152 L346,152" stroke="${C.azul}" stroke-width="14" stroke-linecap="round"/>
      <circle cx="166" cy="152" r="13" ${lin(C.laranja, 5)}/>
      <circle cx="346" cy="152" r="13" ${lin(C.laranja, 5)}/>
      <rect x="232" y="370" width="48" height="126" rx="24" fill="${C.azul}"/>
      <rect x="241" y="386" width="30" height="96" rx="15" fill="${C.azulClaro}"/>
      <rect x="222" y="356" width="68" height="28" rx="10" ${lin(C.laranja, 5)}/>
      <ellipse cx="206" cy="${378 + pernaE * 8}" rx="22" ry="40" ${lin(C.pelo)}/>
      <ellipse cx="208" cy="${420 + pernaE * 8}" rx="20" ry="13" ${lin(C.peloEsc, 5)}/>
      <ellipse cx="306" cy="${366 - pernaE * 8}" rx="22" ry="38" ${lin(C.pelo)}/>
      <ellipse cx="304" cy="${404 - pernaE * 8}" rx="20" ry="13" ${lin(C.peloEsc, 5)}/>
      <ellipse cx="256" cy="292" rx="88" ry="94" ${lin(C.pelo)}/>
      <path d="M180,300 Q256,420 332,300 L330,330 Q256,392 182,330 Z" ${lin(C.branco, 5)}/>
      ${braco(196, 240, 168, 200, 168, 158)}
      ${ladoDir}
      <rect x="190" y="226" width="132" height="136" rx="34" ${lin(C.azul)}/>
      <rect x="214" y="296" width="84" height="46" rx="14" fill="${C.azulClaro}" stroke="${C.azul}" stroke-width="4"/>
      <rect x="248" y="290" width="16" height="10" rx="3" fill="${C.laranja}"/>
      <path d="M200,236 L206,340 M312,236 L306,340" stroke="${C.azulClaro}" stroke-width="5" stroke-linecap="round"/>
      ${tufos}
      <circle cx="202" cy="186" r="14" ${lin(C.peloEsc, 5)}/>
      <circle cx="310" cy="186" r="14" ${lin(C.peloEsc, 5)}/>
      <ellipse cx="256" cy="204" rx="64" ry="52" ${lin(C.pelo)}/>
      <path d="M186,210 Q186,132 256,130 Q326,132 326,210 Z" ${lin(C.laranja)}/>
      <rect x="245" y="131" width="22" height="72" fill="${C.branco}"/>
      <rect x="180" y="200" width="152" height="18" rx="9" ${lin(C.laranjaEsc, 5)}/>
    </g>
    ${extraFrente}`;
  return corpo;
}

// Capi parada de frente ao lado da bike (tela inicial)
function bikeLado(x0, y0, esc = 1) {
  const g = (d, cor, l) => `<path d="${d}" fill="none" stroke="${C.azul}" stroke-width="${l + 9}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${cor}" stroke-width="${l}" stroke-linecap="round" stroke-linejoin="round"/>`;
  return `<g transform="translate(${x0} ${y0}) scale(${esc})">
    <circle cx="0" cy="0" r="58" fill="none" stroke="${C.azul}" stroke-width="16"/>
    <circle cx="150" cy="0" r="58" fill="none" stroke="${C.azul}" stroke-width="16"/>
    ${roda(0, 0, 40, C.azulClaro, 6)}${roda(150, 0, 40, C.azulClaro, 6)}
    ${g('M0,0 L56,-84 L130,-84 L150,0 M56,-84 L70,0 L0,0 M70,0 L130,-84', C.laranja, 13)}
    ${g('M56,-84 L46,-114', C.laranja, 11)}
    <rect x="20" y="-126" width="54" height="16" rx="8" fill="${C.azul}"/>
    ${g('M130,-84 L126,-124 L150,-132', C.laranja, 11)}
    <rect x="140" y="-100" width="64" height="44" rx="8" ${lin(C.branco, 6)}/>
    <path d="M150,-92 L150,-64 M166,-92 L166,-64 M182,-92 L182,-64 M196,-92 L196,-64" stroke="${C.azul}" stroke-width="4"/>
  </g>`;
}

export function capiParada() {
  return `${bikeLado(240, 420, 1)}
    <g transform="translate(190 488)">${emPeFrente(0)}</g>
    ${braco(284, 350, 330, 300, 368, 292)}
    <circle cx="372" cy="290" r="18" ${lin(C.pelo, 6)}/>`;
}

// ============================================================
//  Itens (cada um numa célula 300x300)
// ============================================================
export const ITENS = {
  moeda: () => `
    <circle cx="150" cy="150" r="88" ${lin(C.ouro, 8)}/>
    <circle cx="150" cy="150" r="66" fill="none" stroke="${C.ouroEsc}" stroke-width="7"/>
    ${roda(150, 150, 36, C.azul, 8)}
    <path d="M92,110 Q110,78 146,70" fill="none" stroke="${C.branco}" stroke-width="10" stroke-linecap="round" opacity=".7"/>`,
  garrafa: () => `
    <rect x="106" y="84" width="88" height="160" rx="30" ${lin(C.agua, 8)}/>
    <rect x="126" y="50" width="48" height="38" rx="10" ${lin(C.azul, 8)}/>
    <rect x="110" y="136" width="80" height="44" fill="${C.branco}"/>
    ${roda(150, 158, 14, C.azul, 4)}
    <path d="M126,196 L126,228" stroke="${C.branco}" stroke-width="10" stroke-linecap="round" opacity=".7"/>`,
  cone: () => `
    <rect x="58" y="214" width="184" height="32" rx="12" ${lin(C.azul, 8)}/>
    <path d="M150,36 L214,220 L86,220 Z" ${lin(C.laranja, 8)}/>
    <path d="M124,110 L176,110 L190,154 L110,154 Z" fill="${C.branco}"/>
    <path d="M146,52 L118,146" stroke="${C.branco}" stroke-width="8" stroke-linecap="round" opacity=".5"/>`,
  buraco: () => `
    <path d="M58,150 Q62,96 126,92 Q176,74 222,104 Q260,132 238,178 Q226,216 160,214 Q96,222 70,194 Q52,176 58,150 Z" fill="#5A6488" stroke="${C.azul}" stroke-width="8" stroke-linejoin="round"/>
    <path d="M84,152 Q88,112 136,112 Q180,100 208,122 Q232,146 214,172 Q200,198 156,194 Q106,200 92,180 Q80,168 84,152 Z" fill="#10162A"/>
    <path d="M58,150 L26,136 L14,150 M238,178 L268,196 L282,188 M126,92 L118,62 L100,52 M222,104 L246,78" fill="none" stroke="${C.azul}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
  poca: () => `
    <path d="M46,160 Q40,110 96,108 Q124,76 176,92 Q236,88 252,130 Q272,176 222,196 Q186,226 128,212 Q58,214 46,160 Z" ${lin(C.poca, 8)}/>
    <ellipse cx="116" cy="136" rx="34" ry="11" fill="${C.branco}" opacity=".65" transform="rotate(-12 116 136)"/>
    <ellipse cx="192" cy="176" rx="18" ry="6" fill="${C.branco}" opacity=".5"/>
    <circle cx="232" cy="98" r="9" ${lin(C.poca, 5)}/>`,
  passe: () => `
    <defs><clipPath id="cartao"><rect x="42" y="82" width="216" height="136" rx="22"/></clipPath></defs>
    <rect x="42" y="82" width="216" height="136" rx="22" fill="${C.laranja}"/>
    <g clip-path="url(#cartao)">
      <rect x="42" y="106" width="216" height="34" fill="${C.azul}"/>
      <path d="M190,82 L258,82 L258,218 L150,218 Z" fill="${C.laranjaEsc}" opacity=".35"/>
    </g>
    <rect x="42" y="82" width="216" height="136" rx="22" fill="none" stroke="${C.azul}" stroke-width="8"/>
    <rect x="62" y="152" width="38" height="28" rx="6" fill="${C.ouro}" stroke="${C.azul}" stroke-width="4"/>
    ${roda(160, 180, 22, C.branco, 5)}${roda(222, 180, 22, C.branco, 5)}
    <path d="M160,180 L182,150 L206,150 L222,180 M182,150 L192,180 L160,180" fill="none" stroke="${C.branco}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>`,
};
export const ORDEM_ITENS = ['moeda', 'garrafa', 'cone', 'buraco', 'poca', 'passe'];

// ============================================================
//  Cenário
// ============================================================
function aleatorio(semente) {
  let s = semente;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

export function cenarioFundo() {
  const W = 720, H = 1280, rnd = aleatorio(42);
  let c = `<rect width="${W}" height="${H}" fill="#26315A"/>
    <rect x="144" y="0" width="432" height="${H}" fill="#2A3258"/>`;
  for (const lado of [0, 1]) {
    const x0 = lado ? 604 : 0;
    for (let k = 0; k < 4; k++) {
      const y = k * 320;
      const t = rnd();
      const cor = t > .5 ? C.azul : '#33406E';
      c += `<rect x="${x0 + 8}" y="${y + 16}" width="100" height="186" rx="6" fill="${cor}" stroke="#141B33" stroke-width="5"/>`;
      c += `<rect x="${x0 + 22}" y="${y + 32}" width="30" height="22" rx="4" fill="${t > .5 ? C.laranja : C.branco}" opacity=".9"/>`;
      c += `<circle cx="${x0 + 80}" cy="${y + 150}" r="14" fill="#141B33"/><circle cx="${x0 + 80}" cy="${y + 150}" r="9" fill="#5A6488"/>`;
      c += `<rect x="${x0 + 20}" y="${y + 100}" width="40" height="12" rx="3" fill="#5A6488"/>`;
      // canteiro com árvore junto da calçada
      const tx = lado ? x0 + 30 : x0 + 86;
      const ty = y + 262;
      c += `<circle cx="${tx + 4}" cy="${ty + 6}" r="${34 + t * 8}" fill="#141B33" opacity=".35"/>`;
      c += `<circle cx="${tx}" cy="${ty}" r="${34 + t * 8}" fill="${C.verdeEsc}" stroke="#14583A" stroke-width="5"/>`;
      c += `<circle cx="${tx - 10}" cy="${ty - 10}" r="${16 + t * 4}" fill="${C.verde}"/>`;
    }
  }
  // calçadas e guias
  c += `<rect x="116" y="0" width="28" height="${H}" fill="#D9D3C2"/><rect x="576" y="0" width="28" height="${H}" fill="#D9D3C2"/>`;
  for (let y = 0; y < H; y += 40) {
    c += `<rect x="116" y="${y}" width="28" height="3" fill="#BDB6A3"/><rect x="576" y="${y}" width="28" height="3" fill="#BDB6A3"/>`;
  }
  return svg(W, H, c);
}

export function cenarioRua() {
  const W = 400, H = 800, rnd = aleatorio(7);
  let c = `<rect width="${W}" height="${H}" fill="#39456F"/>`;
  for (let i = 0; i < 90; i++) {
    const x = 16 + rnd() * (W - 32), y = 6 + rnd() * (H - 12), r = 1.5 + rnd() * 2.5;
    c += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="${rnd() > .5 ? '#434F7C' : '#323D63'}"/>`;
  }
  c += `<ellipse cx="300" cy="560" rx="30" ry="30" fill="#2C365A" stroke="#4A5684" stroke-width="5"/>
        <path d="M280,560 L320,560 M300,540 L300,580" stroke="#4A5684" stroke-width="4"/>`;
  c += `<rect x="0" y="0" width="12" height="${H}" fill="${C.branco}"/><rect x="${W - 12}" y="0" width="12" height="${H}" fill="${C.branco}"/>`;
  for (const x of [W / 3, 2 * W / 3]) {
    for (let y = 22; y < H; y += 100) c += `<rect x="${x - 5}" y="${y}" width="10" height="56" rx="3" fill="${C.branco}"/>`;
  }
  return svg(W, H, c);
}

// ============================================================
//  Folhas e composições
// ============================================================
export function folhaItens() {
  let c = '';
  ORDEM_ITENS.forEach((k, i) => {
    c += `<g transform="translate(${(i % 3) * 300} ${Math.floor(i / 3) * 300})">${ITENS[k]()}</g>`;
  });
  return svg(900, 600, c);
}

export function sprite(estado) {
  return svg(512, 512, estado === 'parado' ? capiParada() : capiNaBike(estado));
}

export function modelSheet() {
  const vistas = [emPeFrente(0), emPeFrente(1), emPePerfil(), emPeCostas()];
  let c = `<rect width="1600" height="620" fill="#FFFFFF"/>`;
  vistas.forEach((v, i) => {
    c += `<ellipse cx="${200 + i * 400}" cy="572" rx="120" ry="16" fill="${C.azul}" opacity=".08"/>`;
    c += `<g transform="translate(${200 + i * 400} 570) scale(1.25)">${v}</g>`;
  });
  return svg(1600, 620, c);
}

const FONTE = `font-family="Fredoka" font-weight="700"`;
export function logoGrupo() {
  return `
    <text x="118" y="190" ${FONTE} font-size="190" fill="${C.laranja}" stroke="${C.azul}" stroke-width="22" paint-order="stroke" stroke-linejoin="round">B</text>
    <circle cx="316" cy="124" r="62" fill="${C.azul}"/>
    ${roda(316, 124, 50, C.laranja, 15)}
    <text x="392" y="190" ${FONTE} font-size="190" fill="${C.laranja}" stroke="${C.azul}" stroke-width="22" paint-order="stroke" stroke-linejoin="round">RA</text>
    <text x="400" y="352" text-anchor="middle" ${FONTE} font-size="150" letter-spacing="14" fill="${C.branco}" stroke="${C.azul}" stroke-width="20" paint-order="stroke" stroke-linejoin="round">BIKE</text>`;
}
export function logo() { return svg(800, 400, logoGrupo()); }

export function botoes() {
  const dados = [
    ['JOGAR', C.laranja, C.branco, C.azul, 64],
    ['JOGAR DE NOVO', C.azul, C.branco, C.branco, 50],
    ['COMPARTILHAR', C.branco, C.azul, C.azul, 50],
  ];
  let c = '';
  dados.forEach(([txt, fundo, cor, borda, tam], i) => {
    const y = 40 + i * 200;
    c += `<rect x="40" y="${y + 12}" width="520" height="120" rx="60" fill="${C.azul}" opacity=".45"/>
      <rect x="40" y="${y}" width="520" height="120" rx="60" fill="${fundo}" stroke="${borda}" stroke-width="8"/>
      <path d="M90,${y + 30} Q300,${y + 12} 510,${y + 30}" fill="none" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round" opacity=".25"/>
      <text x="300" y="${y + 60 + tam * 0.36}" text-anchor="middle" ${FONTE} font-size="${tam}" fill="${cor}">${txt}</text>`;
  });
  return svg(600, 600, c);
}

export function keyArt() {
  const W = 1080, H = 1350;
  const fundoSvg = cenarioFundo().replace(/^<svg[^>]*>|<\/svg>$/g, '');
  let c = `<defs>
      <linearGradient id="topo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.azul}" stop-opacity=".95"/><stop offset="1" stop-color="${C.azul}" stop-opacity="0"/></linearGradient>
      <linearGradient id="ciclo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.verde}" stop-opacity=".55"/><stop offset=".5" stop-color="${C.verde}"/></linearGradient>
    </defs>
    <g transform="scale(1.5)">${fundoSvg}</g>
    <rect x="216" y="0" width="648" height="${H}" fill="url(#ciclo)"/>
    <rect x="216" y="0" width="16" height="${H}" fill="${C.branco}"/><rect x="848" y="0" width="16" height="${H}" fill="${C.branco}"/>`;
  for (let y = -40; y < H; y += 160) {
    c += `<rect x="533" y="${y}" width="14" height="80" rx="4" fill="${C.branco}" opacity=".8"/>`;
    c += `<g opacity=".55">${roda(360, y + 110, 26, C.branco, 6)}${roda(420, y + 110, 26, C.branco, 6)}${roda(660, y + 30, 26, C.branco, 6)}${roda(720, y + 30, 26, C.branco, 6)}</g>`;
  }
  // linhas de velocidade
  for (const [x, y, l] of [[300, 900, 200], [780, 880, 220], [260, 1080, 160], [820, 1060, 180], [350, 760, 120], [730, 740, 140]]) {
    c += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + l}" stroke="${C.branco}" stroke-width="12" stroke-linecap="round" opacity=".8"/>`;
  }
  // cones ficando para trás (embaixo)
  c += `<g transform="translate(190 1040) scale(.55) rotate(-18 150 150)">${ITENS.cone()}</g>`;
  c += `<g transform="translate(680 1180) scale(.5) rotate(24 150 150)">${ITENS.cone()}</g>`;
  // moedas e passe voando
  for (const [x, y, s] of [[180, 560, .5], [820, 520, .55], [260, 760, .4], [860, 760, .42], [700, 400, .36]]) {
    c += `<g transform="translate(${x - 150 * s} ${y - 150 * s}) scale(${s})">${ITENS.moeda()}</g>`;
  }
  // Capi (pose "pegar", pegando o passe)
  c += `<g transform="translate(540 820) scale(1.55) translate(-256 -290)">${capiNaBike('pegar')}</g>`;
  c += `<g transform="translate(700 380) scale(.8) rotate(-12 150 150)"><g style="filter:drop-shadow(0 0 18px ${C.ouro})">${ITENS.passe()}</g></g>`;
  // título
  c += `<rect width="${W}" height="420" fill="url(#topo)"/>
    <text x="540" y="210" text-anchor="middle" ${FONTE} font-size="176" fill="${C.laranja}" stroke="${C.azul}" stroke-width="30" paint-order="stroke" stroke-linejoin="round">CAPI RUSH</text>
    <text x="540" y="300" text-anchor="middle" ${FONTE} font-size="56" fill="${C.branco}" stroke="${C.azul}" stroke-width="14" paint-order="stroke" stroke-linejoin="round">Pedale, pontue e libere a ciclovia!</text>`;
  // logo
  c += `<g transform="translate(790 1175) scale(.33)"><rect x="60" y="20" width="700" height="370" rx="60" fill="${C.azul}" opacity=".9"/>${logoGrupo()}</g>`;
  c += `<text x="40" y="1322" ${FONTE} font-size="22" fill="${C.branco}" opacity=".85">Jogo promocional fictício · criado com IA para fins educacionais</text>`;
  return svg(W, H, c);
}
