fetch("https://quote-generator-backend-fgd1.onrender.com/api/quotes/random")
  .then((response) => response.json())
  .then((quote) => {
    const quoteText = quote.quote;
    const quoteAuthor = quote.author;
    const quoteElement = document.getElementById("quoteElement");
    quoteElement.innerText = `${quoteText}`;
    const authElement = document.getElementById("authElement");
    authElement.innerText = `- quote by ${quoteAuthor}`;
  })
  .catch((error) => {
    console.error("Error fetching quote:", error);
    const quoteElement = document.getElementById("quoteElement");
    quoteElement.innerText = "Failed to load quote.";
  });
