var req = new XMLHttpRequest();
		
		//var elem = document.getElementById('btnHello');
		//elem.addEventListener('click', function () {alert("Entrou");}, false);

		function validateForm(data) {
			var saida = '';
			var dados = req.responseText;
			saida += `<div class = "classe-news"><p>${data.articles[0].author}</p></div>`
			//document.getElementById('lista-news').innerHTML = saida;
			console.log(dados)

		}

		function getData() {
			var x = document.forms["myForm"]["fname"].value;
			const apiKey = 'b02df544e547429b97eb5c4359fb913d';
			var url = `https://newsapi.org/v2/everything?q=${x}&apiKey=${apiKey}`
			fetch(url).then((res)=>{
        		return res.json()
    		}).then((data)=>{
        		console.log(data)
				var w = window.open("resultados.html", "_parent")
				w.document.write(`<!DOCTYPE html>
				<html lang="pt-br">
				<head>
					<meta charset="UTF-8">
					<meta http-equiv="X-UA-Compatible" content="IE=edge">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<link rel="shortcut icon" href="" type="image/x-icon">
					<title>SporToday</title>
					<link rel="stylesheet" href="style.css">
				</head>
				<body>
					<header>
						<h1>SporToday</h1>
						<div>
							<ul>
								<img src="img/logo.png" height="60" width="90" class="logo" alt="" srcset="">
								<li><a href="futebol.html">Futebol<img src="img/soccer-ball.png" class="img-header" alt=""></a><li>
								<li><a href="Volei.html">Vôlei<img src="img/volleyball.png" class="img-header" alt=""></a></li>
								<li><a href="natacao.html">Natação<img src="img/natacao.png" class="img-header" alt=""></a></li>
								<li><a href="surf.html">Surf<img src="img/surf.png" class="img-header" alt=""></a></li>
								<li><a href="skate.html">Skate<img src="img/skate.png" class="img-header" alt=""></a></li>
								<li><a href="basket.html">Basket<img src="img/basket ball.png" class="img-header" alt=""></a></li>
								<li><form name = "myForm" action = "">
									<input type="text" class="input-busc" name = "fname" value = ${x}>
									<input id = "btn" type="button" value="OK" onclick="getData()"></form>
								</li>
								</ul>
						</div>
					</header>
					<script type = "text/javascript" src = "scriptResults.js"></script>
					<div id="lista-news">
						<fieldset class="field-1">

						</fieldset>
					</div>`);
				var i  = 0;
				var textoResultados = '';
				//for (i = 0; i < data.articles.length; i++) {
                    var newsTitle = data.articles[i].title
				    if (newsTitle == null) {
					    let description = data.articles[i].description;
					    let ptIndex = description.indexOf(".");
					    let descriptionPt = description.slice(0, ptIndex);
					    newsTitle = descriptionPt;
				    }
				    textoResultados += 
				    `<fieldset class="field-1">
				    <div class = "field-1">
				    <h2 style="text-align:center;">${newsTitle}</h2>
				    <a href=${data.articles[i].url}><img src=${data.articles[i].urlToImage} width="250" height="250"></a>
				    </div>
				    </fieldset>`
                //};
				w.document.getElementById("lista-news").innerHTML = textoResultados;
				//validateForm(data)
			})
			//req.onload = validateForm(x);
			//req.open('GET', url, true);
			//req.send();
		}
		function openWin() {
			var w = window.open();
  			w.document.open();
  			w.document.write("<h2>Hello World!</h2>");
  			w.document.close();
		}