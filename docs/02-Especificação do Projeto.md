# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição do problema e os pontos mais relevantes a serem tratados neste projeto foi sugerido pela falta de portais de notícias políticas para o público-alvo. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.
## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

 ### Larissa Alves

<img src = "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/la.png?raw=true">


 ### Marcos Gomes
 
 <img src = "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/ma.png?raw=true">


### 	André Almeida

<img src = "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/An.png?raw=true">



### Helena Pereira 

<img src = "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/he.png?raw=true">




## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Larissa Alves       | Visualizar as notícias políticas mais relevantes do momento.                                  | Tomar ciência dos fatos políticos que me interessam.|
|Marcos Gomes        | Visualizar notícias mais relevantes do meu país.                                              | Estar a par do que acontece no cenário federal.     |
|André Almeida       |Manter um registro de notícias específicas sobre os candidatos que possuo interesse particular | Visualizar e manter um histórico de notícias que possam ser compartilhadas posteriormente.               |
|Helena Pereira      | Ler notícias mais relevantes do âmbito federal.              | Levantar temas relevantes a serem debatidos em sala de aula com os alunos. |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar na página principal notícias legislativas obtidas por meio de canais oficiais do governo federal.    | ALTA | 
|RF-002| O site deverá apresentar atrativos visuais.                                                                                 | ALTA |
|RF-003| O site deverá apresentar notícias dinâmicas.                                                                                | MÉDIA | 
|RF-004| Agregar ao site um menu de busca para que o usuário possa buscar notícias específicas bem como deverá ter um menu adicional para que o usuário possa buscar notícias especificas.                                                                                                                         | ALTA |
|RF-005| Permitir visualizar os criadores e mantenedores desse site                                                                  | MÉDIA/ALTA | 
|RF-006| Agregar ao site o botão compartilhar para as redes sociais (Facebook, Twitter, Instagram).                                  | MÉDIA |
|RF-007| O site deve exibir os comentários registrados juntamente com a notícia exibida e deve permitir que usuários possam comentar.| BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
