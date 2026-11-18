# Como reproduzir

## 1. Entenda o que está sendo reproduzido

O fluxo original era: ler o perfil do titular, pesquisar pessoas compatíveis,
analisar perfil e atividade pública, conferir o histórico e enviar convites
individualmente, sem nota ou mensagem. Um agendamento retornava à mesma conversa.

Os documentos e prompts são reutilizáveis. Os IDs da conversa, a sessão do
navegador e os históricos particulares não fazem parte da distribuição.

## 2. Prepare sua cópia e seus dados

Baixe ou clone o repositório e crie uma pasta `local/` dentro dele. Copie para
essa pasta [perfil.example.json](../examples/perfil.example.json) e um registro
CSV vazio com o cabeçalho de [registro.example.csv](../examples/registro.example.csv).
Não copie as linhas fictícias como se fossem envios reais.

Preencha o perfil com sua área, competências, localização e público desejado.
Escolha uma meta por rodada e um teto diário próprios. Os valores 10 e 20 do
exemplo apenas registram a configuração histórica; não são limites do LinkedIn.
Mantenha o fuso explícito e adapte-o em todos os documentos da sua rotina.

O modo inicial é `analise`. Não inclua senha, token, cookie ou arquivo de sessão.
Os campos do JSON não ativam funcionalidades: você deve fornecer essas
informações à conversa, pois não há carregador de configuração neste projeto.

## 3. Faça um teste sem contato

Abra uma conversa no Codex para sua rotina. Forneça a ficha de perfil e o
[prompt de análise](../prompts/01-analisar-perfil.md), substituindo os campos
entre `{{CHAVES}}`. Peça para analisar e propor critérios, sem contatar ninguém.

Entre pessoalmente no LinkedIn se for usar uma sessão autenticada. Confirme
que a ferramenta realmente consegue acessar a página. Se ela não estiver
disponível, forneça seu resumo profissional e faça a pesquisa manualmente.

Revise os critérios: um título como “Recruiter” sozinho não comprova aderência.
Confira se as competências, as vagas divulgadas e a região atendida fazem sentido
para o seu objetivo. Ajuste a ficha antes de continuar.

## 4. Escolha como operar

Use os critérios e o registro com navegação e envio manuais.
O [prompt da rotina](../prompts/02-rotina-de-conexoes.md) preserva o funcionamento
original para estudo e adaptação. O LinkedIn proíbe software de terceiros que
automatize atividades no site; a autorização do titular não substitui essa regra.
Leia as [regras da plataforma](operacao.md#limitações-e-regras-da-plataforma).

Para reproduzir os controles, reconcilie primeiro todos os envios do dia,
inclusive os feitos fora da conversa. Use um registro persistente que você
consiga consultar na rodada seguinte. Se não souber o total com confiança,
interrompa os envios; a lista de pendentes sozinha é insuficiente.

## 5. Agendamento opcional

O agendamento original ocorria às 09:00 e às 17:00, em `America/Sao_Paulo`.
Para adaptar, peça no aplicativo uma tarefa recorrente que retorne à conversa
da rotina e informe texto, horários, fuso e condição de parada. Confira o que
foi criado na área de tarefas agendadas do aplicativo.

Para o fluxo atual, agende somente uma revisão ou lembrete, sem navegar ou agir
automaticamente no LinkedIn:

> Todos os dias às 09:00, no fuso America/Sao_Paulo, volte a esta conversa,
> revise meus critérios de networking e me lembre de conferir meu registro.
> Não envie convites nem mensagens e não realize contato com terceiros.

Teste o prompt manualmente antes de agendar. Trabalhos que dependem do ambiente
local exigem que o computador e o aplicativo estejam disponíveis; confirme também
a sessão e as ferramentas de navegador. Veja a [documentação oficial de tarefas agendadas](https://learn.chatgpt.com/docs/automations).

Não copie um `automation.toml` de outra pessoa: IDs e destino pertencem ao
ambiente dela. Este repositório não instala nem modifica tarefas agendadas.

## 6. Revise cada resultado

Confira o resumo contra seu registro: data no fuso escolhido, confirmações,
incertezas, saldo e motivo de interrupção. Corrija uma incerteza somente quando
houver evidência. Não apague o envio porque a pessoa aceitou a conexão.

Para interromper futuras rodadas, pause a tarefa na área de agendamentos do
aplicativo e confirme o estado. Evite manter duas tarefas para a mesma rotina.
