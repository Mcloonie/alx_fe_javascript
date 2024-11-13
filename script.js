// Array to store quotes (quote text and category)
let quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" }
];

// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    // Pick a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the quote text and category
    quoteDisplay.innerHTML = `"${randomQuote.text}" - <i>${randomQuote.category}</i>`;
}

// Function to add a new quote dynamically
function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;

    // Check if both fields are filled in
    if (newQuoteText && newQuoteCategory) {
        // Add the new quote to the quotes array
        quotes.push({ text: newQuoteText, category: newQuoteCategory });

        // Optionally, clear the input fields after adding the quote
        document.getElementById("newQuoteText").value = '';
        document.getElementById("newQuoteCategory").value = '';

        // Show confirmation message (optional)
        alert(`New quote added in the category "${newQuoteCategory}"`);

        // Optionally, show the newly added quote immediately
        showRandomQuote();
    } else {
        alert("Please fill in both fields.");
    }
}

// Event listener to show a new random quote when the button is clicked
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
