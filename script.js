// DOM
const generateBtn = document.getElementById('generateBtn');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const userInput = document.getElementById('userInput');
const errorMsg = document.getElementById('errorMsg');

// Function async,await and fetch()
async function fetchRandomQuote() {
    errorMsg.textContent = '';
    quoteText.textContent = "Getting new quote...";
    quoteAuthor.textContent = " Please Wait";

    try {
        const response = await fetch('https://dummyjson.com/quotes/random');

        if (!response.ok) {
            throw new Error('Network response failed');
        }

        const data = await response.json();

        quoteText.textContent = '"'+data.quote+'"';
        quoteAuthor.textContent = '--'+data.author+'--';

    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteText.textContent = "Didn't get data.";
        quoteAuthor.textContent = "";
        errorMsg.textContent = "Could not fetch data. Please try again.";
    }
}

if (generateBtn) {
    generateBtn.addEventListener('click', fetchRandomQuote);
}
fetchRandomQuote();
