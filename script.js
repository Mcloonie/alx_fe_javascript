// Initialize an array to hold quote objects
const quotes = [
    { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
    { text: "Your time is limited, don't waste it living someone else's life.", category: "Inspiration" }
];

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteDisplay = document.getElementById("quoteDisplay");
    
    quoteDisplay.innerHTML = `<strong>${randomQuote.text}</strong> - <em>${randomQuote.category}</em>`;
}

// Function to add a new quote to the array and update the DOM
function addQuote() {
    const quoteText = document.getElementById("newQuoteText").value;
    const quoteCategory = document.getElementById("newQuoteCategory").value;

    if (quoteText && quoteCategory) {
        // Add new quote to the array
        quotes.push({ text: quoteText, category: quoteCategory });
        
        // Clear input fields
        document.getElementById("newQuoteText").value = ''; 
        document.getElementById("newQuoteCategory").value = '';

        // Optionally display the newly added quote immediately
        showRandomQuote(); // Show the newly added quote

        alert("Quote added successfully!");
    } else {
        alert("Please enter both a quote and a category.");
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    showRandomQuote(); // Show a random quote on load
    document.getElementById("newQuote").addEventListener("click", showRandomQuote);
    document.getElementById("addQuoteBtn").addEventListener("click", addQuote);
});
