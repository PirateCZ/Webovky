let quoteText = document.getElementById('quote')
let quoteTextAuthor = document.getElementById('quote-author')
const apiURL = 'https://programming-quotesapi.vercel.app/api/random'
randomQuote()

async function randomQuote() {
    fetch(apiURL)
    .then(response => response.json())
    .then(quote => {
        quoteText.innerHTML = quote.quote
        quoteTextAuthor.innerHTML = `- ${quote.author}`
    })
    .catch(e => console.error(e))

}



let surprise = document.getElementById('surprise')
let surpriseCounter = 0;
surprise.addEventListener('click', () => {
    surpriseCounter++
    
    if(surpriseCounter === 3){
        alert('Hello World!');
    }
})
