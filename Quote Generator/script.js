const api_url= "https://api.quotable.io/random";

const contentElement= document.getElementById("content");
const authorElement= document.getElementById("author");

async function getQuote(url){
    const response= await fetch(url);
    let data= await response.json();
    contentElement.innerHTML = data.content;
    authorElement.innerHTML = data.author;
}

getQuote(api_url);