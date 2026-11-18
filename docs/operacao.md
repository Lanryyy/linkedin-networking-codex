# Operação e limitações

## Seleção de pessoas

Parta das competências atuais do titular. No caso de Dados e BI, busque evidências
de recrutamento nessas áreas: descrição do cargo, especialidade e publicações
de vagas relevantes. Pessoas seniores e divulgadores de vagas também podem ser
considerados se fizerem parte do objetivo escolhido.

Para cada pessoa, confira perfil, atividade pública, região e estado da conexão.
Descarte quem já estiver conectado ou com convite pendente. Não deduza relevância
apenas do nome ou título e não transforme a pesquisa em coleta massiva de perfis.

## Controle de cota

Use a data do fuso definido, não o dia UTC. O exemplo utiliza `America/Sao_Paulo`.
Antes de começar, confira o registro persistente, o histórico da conversa e a
interface de enviados. Inclua ações manuais feitas fora da rotina. Um convite
aceito pode sair da lista de pendentes, mas continua sendo um envio daquele dia.

O consumo diário é a soma de **confirmados + incertos ainda não resolvidos**.
Cada convite real deve ocupar um único registro; não some novamente um envio
manual que já está registrado. Ao confirmar um registro incerto, atualize seu
estado, sem criar uma segunda cobrança.

Exemplo fictício: teto 20, 8 confirmados e 2 incertos deixam saldo de 10.
Para uma rodada com orçamento 10, se houver 7 confirmados e 3 incertos nessa
rodada, encerre. Não busque mais três confirmações, pois as incertezas já ocupam
o orçamento. Não acumule saldos de dias ou rodadas anteriores.

Se o histórico estiver incompleto ou houver divergência que impeça determinar
o consumo, interrompa envios e reconcilie os dados com o titular.

## Registro e deduplicação

Guarde um registro local antes de começar e atualize-o após cada tentativa.
O [CSV fictício](../examples/registro.example.csv) demonstra os campos:

| Campo | Uso |
| --- | --- |
| `data_local`, `fuso`, `rodada` | Data operacional e identificação da rodada |
| `nome`, `url_perfil` | Identificação mínima para evitar repetição |
| `estado` | `confirmado`, `incerto` ou `nao_enviado` |
| `evidencia` | Breve descrição do estado observado na interface |
| `origem` | `manual` ou `rotina` |

Elimine duplicidades pela URL canônica do perfil: remova parâmetros de rastreamento e
fragmentos e use o endereço do perfil principal. Não use URLs de publicações
como identificador. Confira pendências de dias anteriores também.

Um registro `incerto` proíbe nova tentativa naquela URL até sua resolução.
`nao_enviado` só é adequado quando foi possível verificar que não houve envio;
uma falha da ferramenta depois do clique pode deixar o resultado incerto.

CSV e prompts não implementam travas automáticas. Mantenha apenas uma rodada
ativa, inclusive quando operar manualmente. Se não puder garantir exclusividade,
pare. Este projeto não contém banco de dados, bloqueio de concorrência ou
garantia técnica de deduplicação.

## Falhas e interrupções

| Situação | Ação |
| --- | --- |
| Controle do navegador indisponível | Parar e informar a ferramenta necessária |
| Sessão desconectada | Pedir ao titular que entre pessoalmente |
| CAPTCHA, verificação, aviso de limite ou restrição | Parar imediatamente; não contornar |
| Falha após possível envio | Conferir perfil e enviados; manter reserva se incerto |
| Total do dia desconhecido | Reconciliar antes de qualquer novo envio |
| Botão sem confirmação de envio | Não repetir o clique naquele perfil; verificar o resultado |
| Nenhum perfil adequado | Encerrar com o motivo; não completar a meta com pessoas irrelevantes |

Um clique bem-sucedido na ferramenta não prova que o convite foi enviado.
Procure confirmação na interface, como estado pendente ou presença em enviados.
Falhas de navegação e alterações da interface são limitações reais da rotina.

## Limitações e regras da plataforma

O LinkedIn proíbe software de terceiros e extensões que automatizem atividades
no site. O prompt de envios foi preservado como registro histórico; no fluxo
atual deste guia, faça a navegação e os envios manualmente e use o agendamento
somente para revisão ou lembrete. A autorização do titular não elimina as regras
da plataforma.

O LinkedIn também informa que excesso de convites e suspeita de uso de automação podem
levar a restrições. Fazer ações uma a uma ou escolher um teto baixo não garante
proteção contra restrições. Não há garantia de um número diário seguro.

Referências oficiais consultadas em 18/11/2026:

- [Restrições de envio de convites](https://www.linkedin.com/help/linkedin/answer/a551012/types-of-restrictions-for-sending-invitations).
- [Atividade automatizada no LinkedIn](https://www.linkedin.com/help/linkedin/answer/a1340567).

As regras de convites foram verificadas por trechos de busca, e a página de
atividade automatizada foi lida integralmente na revisão. Leia as regras
atuais diretamente antes de operar. O material não oferece mecanismo de
evasão, rotação de contas, quebra de CAPTCHA ou promessa de conformidade.

## Privacidade e publicação

Mantenha fichas reais, registros, capturas, cookies, sessões e conversas em
armazenamento privado. Use `local/` para arquivos locais e confira `git status`.
Ignorar um arquivo não remove versões que já tenham sido commitadas.

Contribuições públicas devem conter somente exemplos fictícios. Descreva falhas
sem nomes, URLs pessoais ou capturas identificáveis. Registre apenas o necessário
à operação e defina com o titular quando excluir os dados que já não precisa.
