const searchForm = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchForm.addEventListener('submit', retrieve)

function retrieve(e){
    
    e.preventDefault()
    const apiKey = 'b02df544e547429b97eb5c4359fb913d'
    let topic = input.value;
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
    
    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        data.articles.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement('a');
                  
        });
    })

    console.log(topic)
}