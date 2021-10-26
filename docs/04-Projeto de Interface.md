
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

O diagrama apresentado na Figura X mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o ambiente MarvelApp do projeto: https://marvelapp.com/prototype/2bj6456g

## User Flow

 <img src = "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/user%20flow.png?raw=true">
 
 - FIGURA X - Fluxo de telas do usuário 



## Wireframes

 <img src ="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/docs/img/estru.png?raw=true">


  As páginas  do site apresentam uma estrutura clara:
-	Cabeçalho - local onde são dispostos elementos fixos de identidade (logo) e navegação principal do site (menu da aplicação);
-	Artigo - apresenta o conteúdo da tela em questão;
-	Barra lateral - apresenta os elementos de navegação secundária, geralmente associados aos elementos do bloco de conteúdo.
-	Rodapé - informações de contato.

## Tela - Home-Page

A tela de home-page mostra notícias de destaque a partir da API utilizada pelo sistema. 
Com base na estrutura padrão, o bloco de Conteúdo traz as notícias em destaque (imagem, título, data, fonte e resumo, ícone de compartilhamento). O bloco da Barra Lateral traz três elementos distintos:
-	Componente de pesquisa que permite substituir o conteúdo da página com o resultado da busca solicitada pelo usuário;
-	Componente de notícias preferidas que leva o usuário para a tela de Notícias Preferidas;
-	Componente de lista de categorias que dá acesso às páginas de cada uma das seções disponibilizadas.

<img src ="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/home%202.png?raw=true">

## Tela - Notícias de Categoria
A tela de notícias de categoria apresenta, no Bloco de Conteúdo, as notícias referentes a uma categoria específica, escolhida pelo usuário. O Bloco de Barra Lateral apresenta os mesmos elementos da Home-Page. 

<img src ="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/categorias.png?raw=true">

## Tela - Resultado de Pesquisa
Assim que o usuário informa um tópico de pesquisa, ao clicar no botão Ok, ele é direcionado para uma tela que traz a relação de notícias associadas ao tópico informado. Este resultado é apresentado na Figura a seguir.

<img src ="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/resultado.png?raw=true">

## Tela - Leitura Notícias
A tela de Leitura de Notícia apresenta, no Bloco de Conteúdo, uma notícia específica. O Bloco de Barra Lateral apresenta os mesmos elementos da Home-Page. 

<img src ="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/leituras.png?raw=true">

## Tela - Salvar Notícias Preferidas
A tela que permite o salvamento de notícias preferidas é uma janela modal (surge sobre outras janelas) quando o usuário pressiona o ícone coração na tela de Leitura de Notícia. Nesta tela, a notícia a ser salva é visualizada e o usuário pode informar um tópico ou escolher entre os já cadastrados. Em seguida deve confirmar ou cancelar o salvamento. Na sequência, a tela é fechada voltando para o ambiente anterior.

<img src ="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/salvar.png?raw=true">

## Tela - Notícias Preferidas
A tela de Notícias Preferidas apresenta a relação de notícias salvas pelo usuário. Nesta tela, as notícias são separadas pelo Tópico informado pelo usuário. Os tópicos servem como uma identificação de agrupamento das notícias salvas. Ao clicar em uma notícia é disparada a tela de visualização de notícia. O Bloco de Barra Lateral apresenta os mesmos elementos da Home-Page. 

<img src ="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/preferidas.png?raw=true">

## Tela - Comentários
Na tela que permite ao usuário comentar uma notícia, deve-se informar o nome de quem está comentando e o texto do comentário. Esta tela é exibida na forma de uma janela modal. Em seguida, deve-se confirmar ou cancelar o salvamento do comentário. Na sequência, a tela é fechada voltando para o ambiente anterior.


<img src ="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-informacoes-legislativas/blob/main/src/comentario.png?raw=true">









