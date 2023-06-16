// search.js

// Function to perform the search operation
function performSearch(searchTerm) {
  // Implement your search logic here based on the provided search term
  // You can make an API request or search through your data to find matching items
  // For this example, we'll simply log the search term to the console
  console.log("Performing search for:", searchTerm);

  // Clear the search input field
  const searchInput = document.getElementById("search-input");
  searchInput.value = "";
}

// Function to handle the keypress event in the search input
function handleKeyPress(event) {
  if (event.key === "Enter") {
    const searchTerm = event.target.value;
    performSearch(searchTerm);
  }
}

// Add an event listener to the search input
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("keypress", handleKeyPress);

// You can add more functionality related to search operations in the search.js file.

