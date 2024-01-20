// API key: b60d3d8b-2386-4949-83df-ada1d8eb404a
// API key: 50fa075f409a4f4d974fc8257e4e19de
const apikey = '50fa075f409a4f4d974fc8257e4e19de';
let disSec = document.querySelector('.dis-news');
let catagory = document.querySelector('.filter');
const apifetch = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.status == "ok")
        {
            displayData(data.articles)
        }
        else
        {
            console.log("elements not found")
        }
    }
    catch(err){
        console.error('Error is '+err)
    }
}
apifetch();
const displayData = (d)=>{
    d.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('news');
        const title = document.createElement('h3');
        title.textContent = element.title;
        title.classList.add('news-title');
        const div2 = document.createElement('div')
        div2.classList.add('image');
        const img = document.createElement('img');
        img.src = element.urlToImage;
        img.alt = `${element.title}-image`;
        const para = document.createElement('p');
        para.innerHTML = element.description;
        const auth = document.createElement('p')
        auth.textContent = `Author : ${element.author}`;
        auth.classList.add('authors');
        const pubDate = document.createElement('p');
        pubDate.textContent = `Published On: ${new Date(element.publishedAt)}`;
        pubDate.classList.add('pub');
        const link = document.createElement('a');
        link.setAttribute('href',`${element.url}`);
        link.setAttribute('target','_blank')
        link.innerHTML='Read More';
        div2.appendChild(img);
        div.append(title,div2,para,auth,pubDate,link)
        disSec.appendChild(div);
    });
}