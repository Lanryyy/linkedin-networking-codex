# Como contribuir

Melhorias no guia, nos prompts e nos exemplos são bem-vindas. Explique o problema
e como sua alteração facilita a reprodução. Este repositório documenta um
processo; uma nova aplicação ou integração precisa de escopo próprio.

## Fluxo

1. Crie uma branch para uma mudança coerente.
2. Edite somente os arquivos relacionados ao objetivo.
3. Valide os pontos abaixo e revise `git status` e `git diff`.
4. Crie um commit descritivo em português e abra um pull request.

## Validação

- Execute `git diff --check`.
- Confira se cada link relativo aponta para um arquivo e uma seção existentes.
- Verifique a sintaxe de `examples/perfil.example.json` em um leitor JSON.
- Abra o CSV: cabeçalho e linhas devem manter os mesmos oito campos.
- Confira coerência entre prompt, exemplos e cálculo da cota.
- Revise o conteúdo preparado para commit: somente dados fictícios, sem tokens,
  cookies, capturas pessoais ou registros reais.
- Não envie convites a terceiros para testar uma alteração de documentação.

Se tiver Node.js instalado, valide o JSON sem instalar pacotes:

```sh
node -e "JSON.parse(require('node:fs').readFileSync('examples/perfil.example.json','utf8')); console.log('JSON válido')"
```

Mantenha exemplos em `examples/` e dados de uso real em `local/`, que é ignorada
pelo Git. Não anexe conversas privadas a issues. Consulte novamente as fontes
oficiais quando alterar afirmações sobre o Codex ou o LinkedIn.
