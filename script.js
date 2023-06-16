// script.js

function handleSearch() {
  // Get the search input value
  var searchInput = document.getElementById("search-input").value.toLowerCase();

  // Get all the product elements
  var products = document.querySelectorAll(".product");

  // Loop through each product and check if it matches the search input
  products.forEach(function(product) {
    var productName = product.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(searchInput)) {
      product.style.display = "block"; // Show the product if it matches
    } else {
      product.style.display = "none"; // Hide the product if it doesn't match
    }
  });
}

// Add an event listener to the search button
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleSearch);

// Function to toggle the visibility of the "About Us" content
function toggleAboutContent() {
  const aboutContent = document.getElementById("about-content");
  aboutContent.style.display = aboutContent.style.display === "none" ? "block" : "none";
}

// Add an event listener to the "About Us" link
const aboutLink = document.getElementById("about-link");
aboutLink.addEventListener("click", toggleAboutContent);

// You can add more interactive functionality to the script.js file as per your requirements.

window.onload = function() {
  // Get the search button
  var searchButton = document.getElementById("search-button");

  // Add event listener to the search button
  searchButton.addEventListener("click", handleSearch);
};


  document.getElementById("form-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("sell-form-content").style.display = "block";
  });
  


