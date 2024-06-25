const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url){
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
};
getQuote(apiUrl);

function tweet(){
  window.open("href=https://X.com/intent/tweet?text= " + quote.innerHTML + "-----by" + author.innerHTML, "Tweet WIndow", "width=600px", "height=300px");
}