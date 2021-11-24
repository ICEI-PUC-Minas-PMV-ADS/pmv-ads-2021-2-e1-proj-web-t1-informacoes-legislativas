function getData() {
	var x = document.forms["myForm"]["fname"].value;
	const apiKey = 'b02df544e547429b97eb5c4359fb913d';
	var url = `https://newsapi.org/v2/everything?q=${x}&apiKey=${apiKey}`
	fetch(url).then((res)=>{
        return res.json()
    	}).then((data)=>{
        //console.log(data)
		document.open("text/html","replace")
		var textoResultados = '';
        for (i = 0; i < data.articles.length; i++) {
            let newsTitle = data.articles[i].title
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
        };
		document.write(`<!DOCTYPE html>
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
				<div id="lista-news">`, textoResultados, `</div>
                    <div class="rodape">
                        <fieldset class="field-2">
                            <legend>
                                <h2>Nos siga nas redes</h2>
                            </legend>
                        <ul>
                            <li><img src="img/icone-instagram.png" alt=""> <a href="https://www.instagram.com/" target="_blank" rel="external">instagram</a>- <strong>Nosso instagram</strong></li> 
                            <li><img src="img/icone-twitter.png" alt=""> <a href="https://twitter.com" target="_blank" rel="external">twitter</a>- <strong>Nos siga no twitter</strong></li>
                            <li><img src="img/icone-youtube.png" alt=""> <a href="https://www.youtube.com/" target="_blank" rel="external">youtube</a> <strong>Se inscreva no canal</strong></li>
                        </ul>
                        </fieldset>
    
                    </div>
                </div>`);
	})
}