const quotes = [
    { text: "Your quote here", category: "Category" },
    // more quotes...
];
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `<strong>${randomQuote.text}</strong> - <em>${randomQuote.category}</em>`;
}
function addQuote() {
    const quoteText = document.getElementById("newQuoteText").value;
    const quoteCategory = document.getElementById("newQuoteCategory").value;

    if (quoteText && quoteCategory) {
        quotes.push({ text: quoteText, category: quoteCategory });
        document.getElementById("newQuoteText").value = ''; // Clear input
        document.getElementById("newQuoteCategory").value = ''; // Clear input
        alert("Quote added successfully!");
    } else {
        alert("Please enter both a quote and a category.");
    }
}
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);
