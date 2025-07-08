// 1. Create an array of quote objects
const quotes = [
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    }
];

// 2. Get references to the HTML elements
const quoteTextElement = document.querySelector(".quote-text");
const quoteAuthorElement = document.querySelector(".quote-author");
const newQuoteButton = document.getElementById("new-quote-btn");

// 3. Create a function to get a random quote
function getNewQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Get the quote object at that random index
    const randomQuote = quotes[randomIndex];

    // Update the HTML with the new quote's text and author
    quoteTextElement.textContent = `"${randomQuote.text}"`;
    quoteAuthorElement.textContent = `- ${randomQuote.author}`;
}

// 4. Add an event listener to the button
newQuoteButton.addEventListener("click", getNewQuote);
