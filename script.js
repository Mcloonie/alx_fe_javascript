// Initialize an array to hold quote objects
let quotes = [
    { text: "The only way to do great work is to love what you do.", category: "Inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "The purpose of our lives is to be happy.", category: "Happiness" }
];


// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = `"${quotes[randomIndex].text}" - ${quotes[randomIndex].category}`;
}


// Function to add a new quote
function addQuote() {
    const quoteText = document.getElementById('newQuoteText').value.trim();
    const quoteCategory = document.getElementById('newQuoteCategory').value.trim();

    if (quoteText && quoteCategory) {
        // Create a new quote object
        const newQuote = { text: quoteText, category: quoteCategory };
        quotes.push(newQuote); // Add it to the quotes array

        // Clear input fields
        document.getElementById('newQuoteText').value = ""; 
        document.getElementById('newQuoteCategory').value = ""; 
        
        alert("Quote added successfully!");
    } else {
        alert("Please fill in both fields!");
    }
}


// Attach event listeners
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('addQuote').addEventListener('click', addQuote);
