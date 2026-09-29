// Gera os PNGs de assets/ e divulgacao/ a partir de arte.mjs.
// Uso: FREDOKA=/caminho/fredoka-latin-700-normal.woff2 node assets/_fonte_svg/renderizar.mjs
// Precisa do Playwright (npm i -g playwright) e da fonte Fredoka (OFL, @fontsource/fredoka).
import { createRequire } from 'module';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as A from './arte.mjs';

const require = createRequire(import.meta.url);
const raizNpm = execSync('npm root -g').toString().trim();
const { chromium } = require(path.join(raizNpm, 'playwright'));

const aqui = path.dirname(fileURLToPath(import.meta.url));
const raiz = path.resolve(aqui, '..', '..');
const fonte = fs.readFileSync(process.env.FREDOKA).toString('base64');

const saidas = {
  'assets/mascote_capi_modelsheet_v01.png': A.modelSheet(),
  'assets/mascote_capi_estado-parado_v01.png': A.sprite('parado'),
  'assets/mascote_capi_estado-pedalar_v01.png': A.sprite('pedalar'),
  'assets/mascote_capi_estado-pegar_v01.png': A.sprite('pegar'),
  'assets/mascote_capi_estado-ops_v01.png': A.sprite('ops'),
  'assets/mascote_capi_estado-ciclovia_v01.png': A.sprite('ciclovia'),
  'assets/cenario_cidade_fundo_v01.png': A.cenarioFundo(),
  'assets/cenario_rua_chao_v01.png': A.cenarioRua(),
  'assets/itens_folha_v01.png': A.folhaItens(),
  'assets/ui_logo_bora-bike_v01.png': A.logo(),
  'assets/ui_botoes_v01.png': A.botoes(),
  'divulgacao/divulgacao_keyart_v01.png': A.keyArt(),
};

const navegador = await chromium.launch();
const pagina = await navegador.newPage();
for (const [destino, conteudo] of Object.entries(saidas)) {
  fs.writeFileSync(path.join(aqui, path.basename(destino, '.png') + '.svg'), conteudo);
  await pagina.setContent(`<!doctype html><html><head><style>
    @font-face { font-family: 'Fredoka'; font-weight: 700; src: url(data:font/woff2;base64,${fonte}) format('woff2'); }
    html, body { margin: 0; background: transparent; }
    svg { display: block; }
  </style></head><body>${conteudo}</body></html>`);
  await pagina.evaluate(() => document.fonts.ready);
  await pagina.locator('svg').first().screenshot({ path: path.join(raiz, destino), omitBackground: true });
  console.log('ok', destino);
}
await navegador.close();
