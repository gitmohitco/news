// API key: b60d3d8b-2386-4949-83df-ada1d8eb404a
// API key: 50fa075f409a4f4d974fc8257e4e19de
// Api for web: 55d424718f71d2614fdee636e9df0854
const apikey = '55d424718f71d2614fdee636e9df0854';
let disSec = document.querySelector('.dis-news');
let catagory = document.querySelector('.filter');
const apifetch = async()=>{
    let url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apikey}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayData(data.articles);
        // if (data.status =='ok')
        // {
        //     displayData(data.articles)
        // }
        // else
        // {
        //     console.log("elements not found")
        // }
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
        img.src = element.image;
        img.alt = `${element.title}-image`;
        const para = document.createElement('p');
        para.innerHTML = element.description;
        const auth = document.createElement('p')
        auth.textContent = `Source : ${element.source.name}`;
        auth.classList.add('authors');
        const pubDate = document.createElement('p');
        pubDate.textContent = `Published On: ${new Date(element.publishedAt)}`;
        pubDate.classList.add('pub');
        const link = document.createElement('a');
        link.setAttribute('href',`${element.url}`);
        link.setAttribute('target','_blank')
        link.innerHTML='Know More';
        div2.appendChild(img);
        div.append(title,div2,para,auth,pubDate,link)
        disSec.appendChild(div);
    });
}