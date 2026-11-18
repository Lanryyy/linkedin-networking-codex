# Networking no LinkedIn com Codex

Um guia em português para reproduzir e adaptar uma rotina de networking:
identificar recrutadores da sua área, verificar a relevância de cada perfil e
controlar convites sem mensagens ou notas.

**O projeto é um processo orientado por prompts.** A origem foi uma conversa no
Codex com uma tarefa agendada. Não há aplicativo, extensão, API do LinkedIn ou
bot executável neste repositório. Clonar os arquivos não agenda nem envia nada.

## Comece por aqui

1. Leia as [limitações e regras](docs/operacao.md#limitações-e-regras-da-plataforma).
2. Siga o [passo a passo](docs/como-reproduzir.md) para preparar seu ambiente.
3. Copie o [perfil de exemplo](examples/perfil.example.json) para `local/` e adapte
   sua área, competências e localização. O JSON é uma ficha de referência para o
   prompt; nenhum programa o lê automaticamente.
4. Teste o [prompt de análise](prompts/01-analisar-perfil.md), que não faz contato.
5. Conheça o [prompt da rotina original](prompts/02-rotina-de-conexoes.md) como
   registro histórico e use o [controle de envios](docs/operacao.md#controle-de-cota)
   com envio manual pelo próprio usuário.

Não existe limite universal garantido de convites. A rotina histórica usava 10
por rodada e teto de 20 por dia; são escolhas operacionais daquele caso. O
LinkedIn informa que suspeita de automação e excesso de convites podem provocar
restrições. O LinkedIn também proíbe software de terceiros que automatize
atividades no site. Para uso atual, faça a navegação e os envios manualmente.
Consulte as [regras de atividade automatizada](https://www.linkedin.com/help/linkedin/answer/a1340567)
e as [regras oficiais sobre convites](https://www.linkedin.com/help/linkedin/answer/a551012/types-of-restrictions-for-sending-invitations).

## O que você encontra

| Arquivo | Finalidade |
| --- | --- |
| [Como reproduzir](docs/como-reproduzir.md) | Preparação, personalização, teste e agendamento |
| [Operação](docs/operacao.md) | Seleção, deduplicação, cota, falhas e privacidade |
| [Análise de perfil](prompts/01-analisar-perfil.md) | Primeiro teste sem enviar convites |
| [Rotina de conexões](prompts/02-rotina-de-conexoes.md) | Modelo adaptado da rotina histórica |
| [Ficha de perfil](examples/perfil.example.json) | Parâmetros fictícios para personalização |
| [Registro de convites](examples/registro.example.csv) | Exemplo fictício de controle local |
| [Validação](scripts/validar.mjs) | Checagem automática de links, JSON e CSV |
| [Contribuição](CONTRIBUTING.md) | Como propor melhorias e validar alterações |

## Pré-requisitos

Para usar os prompts no Codex, tenha acesso ao aplicativo e às ferramentas de
navegador necessárias na sua instalação. Para ler páginas autenticadas, entre
você mesmo no LinkedIn; não coloque senhas ou cookies no prompt.

Um teste de análise precisa de acesso real ao perfil ou de um resumo fornecido
por você. Se o controle do navegador não estiver disponível, use o processo
manual e a ficha de perfil. A disponibilidade das ferramentas varia por ambiente.

## Abrir, atualizar e validar

Abra este README no GitHub ou em um editor. Não há dependências de código para
instalar. Para obter uma cópia, use **Code → Download ZIP** ou clone a URL exibida
no próprio repositório. Mantenha sua configuração e os registros em `local/`.

Ao atualizar uma cópia Git, salve suas alterações em commits próprios, confira
`git status` e só então sincronize com a origem. Revise mudanças nos prompts
antes de reutilizá-los. Não substitua uma rotina ativa sem conferir o novo texto.

Antes de contribuir, execute `git diff --check` e `node scripts/validar.mjs`, que
confere os links internos, o JSON e o CSV de exemplo. Revise todos os arquivos
preparados para commit; as regras completas estão em [CONTRIBUTING.md](CONTRIBUTING.md).

## Compartilhar por WhatsApp

Para compartilhar a versão documentada, envie um ZIP com os arquivos deste guia.
O destinatário só precisa extrair a pasta e começar pelo `README.md`.

Se você tiver Git, execute na pasta do projeto, depois de criar o commit:

```sh
git archive --format=zip --output=../linkedin-networking-codex.zip HEAD
```

Esse comando cria o ZIP na pasta acima do projeto e inclui somente os arquivos
da versão commitada. O histórico `.git`, arquivos privados em `local/` e mudanças
sem commit ficam fora do pacote. Ao compactar manualmente, selecione apenas os
arquivos do guia, sem `.git` nem pastas de operação privada.

Envie o ZIP como documento no WhatsApp. O arquivo não instala software nem ativa
agendamentos; quem receber deve ler o passo a passo e adaptar seus próprios dados.
O repositório local conserva o histórico dos commits.

## Origem, segurança e limites da entrega

O guia foi extraído da conversa **“Expandir conexões no LinkedIn”** e de sua
rotina em 18/11/2026. O foco original era Dados e BI, com Power BI, SQL, Excel e
São Paulo. Os modelos públicos usam dados fictícios e campos adaptáveis.

Nenhuma conversa completa, lista real de contatos, captura de convites, sessão
ou credencial foi incluída. O `.gitignore` exclui `local/` e outros diretórios
operacionais, mas você ainda precisa revisar o que será publicado.

A validação desta entrega cobre os documentos, exemplos e a preparação para
publicação. Não foi executada uma nova rodada de convites para testar o guia.
Resultados anteriores não garantem novos envios, aceitação ou crescimento da rede.

## Licença

[MIT](LICENSE). Você pode reutilizar e adaptar o material conforme a licença.
LinkedIn e Codex são produtos de seus respectivos titulares; este projeto é
independente e não possui afiliação com eles.
