// Validação da documentação, sem dependências externas.
// Uso: node scripts/validar.mjs  (Node.js 18 ou superior)
//
// Verifica:
// - sintaxe do JSON de exemplo e presença dos campos usados pelos prompts;
// - mesmo número de campos em todas as linhas do CSV de exemplo;
// - valores válidos de `estado` e `origem` no CSV;
// - links relativos dos arquivos Markdown (arquivo e âncora existentes).

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const erros = [];
const erro = (msg) => erros.push(msg);

// JSON de exemplo
const camposFicha = [
  'modo_inicial', 'perfil_ou_resumo', 'area', 'competencias', 'localizacao',
  'publico_alvo', 'fuso', 'meta_rodada', 'teto_diario', 'registro_local',
];
try {
  const ficha = JSON.parse(readFileSync(join(raiz, 'examples/perfil.example.json'), 'utf8'));
  for (const campo of camposFicha) {
    if (!(campo in ficha)) erro(`perfil.example.json: campo ausente "${campo}"`);
  }
  if (ficha.meta_rodada > ficha.teto_diario) {
    erro('perfil.example.json: meta_rodada maior que teto_diario');
  }
} catch (e) {
  erro(`perfil.example.json: JSON inválido (${e.message})`);
}

// CSV de exemplo
const estados = new Set(['confirmado', 'incerto', 'nao_enviado']);
const origens = new Set(['manual', 'rotina']);
const linhas = readFileSync(join(raiz, 'examples/registro.example.csv'), 'utf8')
  .split('\n').filter((l) => l.trim() !== '');
const cabecalho = linhas[0].split(',');
linhas.slice(1).forEach((linha, i) => {
  const valores = linha.split(',');
  const n = i + 2;
  if (valores.length !== cabecalho.length) {
    erro(`registro.example.csv:${n}: ${valores.length} campos, esperado ${cabecalho.length}`);
    return;
  }
  const reg = Object.fromEntries(cabecalho.map((c, j) => [c, valores[j]]));
  if (!estados.has(reg.estado)) erro(`registro.example.csv:${n}: estado inválido "${reg.estado}"`);
  if (!origens.has(reg.origem)) erro(`registro.example.csv:${n}: origem inválida "${reg.origem}"`);
});

// Links relativos em Markdown
const ignorar = new Set(['.git', 'node_modules', 'local']);
function listarMarkdown(dir) {
  return readdirSync(dir).flatMap((nome) => {
    if (ignorar.has(nome)) return [];
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) return listarMarkdown(caminho);
    return nome.endsWith('.md') ? [caminho] : [];
  });
}

// Aproximação das âncoras geradas pelo GitHub.
function ancora(titulo) {
  return titulo.trim().toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, '')
    .replace(/\s/g, '-');
}

function ancorasDe(arquivo) {
  const texto = readFileSync(arquivo, 'utf8').replace(/```[\s\S]*?```/g, '');
  return new Set([...texto.matchAll(/^#{1,6}\s+(.+)$/gm)].map((m) => ancora(m[1])));
}

for (const arquivo of listarMarkdown(raiz)) {
  const texto = readFileSync(arquivo, 'utf8').replace(/```[\s\S]*?```/g, '');
  for (const [, alvo] of texto.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^[a-z]+:/i.test(alvo)) continue; // http, https, mailto
    const [caminho, fragmento] = alvo.split('#');
    const destino = caminho ? resolve(dirname(arquivo), caminho) : arquivo;
    const origem = relative(raiz, arquivo);
    if (!existsSync(destino)) {
      erro(`${origem}: link quebrado "${alvo}"`);
    } else if (fragmento && destino.endsWith('.md')
      && !ancorasDe(destino).has(decodeURIComponent(fragmento))) {
      erro(`${origem}: âncora inexistente "${alvo}"`);
    }
  }
}

if (erros.length) {
  console.error(`Falhas encontradas (${erros.length}):`);
  for (const e of erros) console.error(`- ${e}`);
  process.exit(1);
}
console.log('Validação concluída: JSON, CSV e links relativos estão corretos.');
