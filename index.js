const btn = document.getElementById("btn");
const quoteContainer = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random";
async function getQuote() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    quoteContainer.innerHTML = data.content;
    author.innerHTML = data.author;
    
  } catch (error) {
    console.error("Error fetching the quote:", error);
  }
}

getQuote()
btn.addEventListener("click", getQuote);
