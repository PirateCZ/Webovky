let quoteText = document.getElementById('quote')
let quoteAuthorText = document.getElementById('quote-author')
const apiURL = ''
let response;
try{
    fetch(apiURL)
}catch(e){
    console.error(e);   
}
console.log(apiURL);
