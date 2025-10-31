const quotes = [
    {
        quote: "God does not play dice with the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "The atoms or elementary particles themselves are not real; they form a world of potentialities or possibilities rather than one of things or facts.",
        author: "Werner Heisenberg",
    },
    {
        quote: "And yet it moves.",
        author: "Galileo Galilei",
    },
    {
        quote: "The world is not a collection of things, it's a collection of events.",
        author: "Carlo Rovelli",
    },
    {
        quote: "We are not contained within the universe. We are part of it. We are the universe looking at itself.",
        author: "Carlo Rovelli",
    },
    {
        quote: "The greatest enemy of knowledge is not ignorance,it is the illusion of knowledge.",
        author: "Stephen Hawking",
    },
    {
        quote: "Now I am become Death, the destroyes of worlds.",
        author: "J. Robert Oppenheimer",
    },
    {
        quote: "If you think you understand quantum mechanics, you don't understand quantum mechanics.",
        author: "Richard Feynman",
    },
    {
        quote: "Pick a flower on Earth and you move the farthest star.",
        author: "Paul Dirac",
    },
    {
        quote: "I don't like it, and I'm sorry I ever had anything to do with it.",
        author: "Erwin Schrödinger",
    },
    
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author; 