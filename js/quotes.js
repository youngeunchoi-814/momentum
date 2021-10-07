const quotes = [
    {
        quote : "I never dreamed about success, I worked for it.",
        author : "Estee Lauder"
    },
    {
        quote : "The only thing worse than starting something and failing ... is not starting something.",
        author : "Seth Godin"
    },
    {
        quote : "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        author : "Joshia J. Marine"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; //floor 내림

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


