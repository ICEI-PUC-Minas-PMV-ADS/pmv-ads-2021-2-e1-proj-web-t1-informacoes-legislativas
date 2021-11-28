function getData() {
	var x = document.forms["myForm"]["fname"].value;
	const apiKey = 'b02df544e547429b97eb5c4359fb913d';
	var url = `https://newsapi.org/v2/everything?q=${x}&apiKey=${apiKey}`
	fetch(url).then((res)=>{
   		return res.json()
	}).then((data)=>{
   		console.log(data)
		var i  = 0;
		var textoResultados = '';
		for (i = 0; i < data.articles.length; i++) {
            var newsTitle = data.articles[i].title
			if (newsTitle == null) {
				let description = data.articles[i].description;
				let ptIndex = description.indexOf(".");
				let descriptionPt = description.slice(0, ptIndex);
				newsTitle = descriptionPt;
			}
			textoResultados += 
				`<fieldset class="field-1">
					<a href=${data.articles[i].url}><img src=${data.articles[i].urlToImage} style="float: left;" width="230" height="230"></a>
					<h3 style="padding-right: 300px;">${newsTitle}</h3>
					<details style="padding-right: 500px;">
						<p style="padding-right: 20px;">${data.articles[i].description}</p>
						<strong><p>Clique na imagem para a notícia completa</p></strong>
					</div>
				</fieldset>`
		};
		document.querySelector(".b").innerHTML = textoResultados;
	})
}