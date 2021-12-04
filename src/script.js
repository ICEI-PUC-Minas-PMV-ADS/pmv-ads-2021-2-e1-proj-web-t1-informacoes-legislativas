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
					<h3>${newsTitle}</h3>
					<details>
						<p>${data.articles[i].description}</p>
						<strong><p>Clique na imagem para a notícia completa</p></strong>
					</div>
				</fieldset>`
		};
		document.querySelector(".b").innerHTML = textoResultados;
	})
}

var main = function() {
    $('.btn').click(function() {
      var post = $('.status-box').val();
      $('<li>').text(post).prependTo('.posts');
      $('.status-box').val('');
      $('.counter').text('250');
      $('.btn').addClass('disabled');
    });
    $('.status-box').keyup(function() {
      var postLength = $(this).val().length;
      var charactersLeft = 250 - postLength;
      $('.counter').text(charactersLeft);
      if (charactersLeft < 0) {
        $('.btn').addClass('disabled');
      } else if (charactersLeft === 250) {
        $('.btn').addClass('disabled');
      } else {
        $('.btn').removeClass('disabled');
      }
    });
  }
  $('.btn').addClass('disabled');
  $(document).ready(main)