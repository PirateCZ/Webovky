let quoteText = document.getElementById('quote')
let quoteTextAuthor = document.getElementById('quote-author')
const apiURL = 'https://programming-quotesapi.vercel.app/api/random'
randomQuote()

async function randomQuote() {
    fetch(apiURL)
    .then(response => response.json())
    .then(quote => {
        // Assigning the quote text and author to respective HTML elements
        quoteText.innerHTML = quote.quote;
        quoteTextAuthor.innerHTML = `- ${quote.author}`;
    })
    .catch(e => console.error(e));

}