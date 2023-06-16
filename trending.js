// trending.js

// Function to fetch and display the trending items
function fetchTrendingItems() {
  // Make an API request or perform any data retrieval operation to get the trending items
  // Once you have the trending items, you can display them in the UI
  const trendingItems = [
    "Smartphones",
    "Laptops",
    "Men's clothing",
    "Women's clothing",
    "Furniture",
    // Add more trending items here
  ];

  const trendingContainer = document.createElement("div");
  trendingContainer.id = "trending-container";

  const trendingHeading = document.createElement("h3");
  trendingHeading.textContent = "Trending Items";

  const trendingList = document.createElement("ul");

  for (const item of trendingItems) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    trendingList.appendChild(listItem);
  }

  trendingContainer.appendChild(trendingHeading);
  trendingContainer.appendChild(trendingList);

  // Add the trending container to the main section of the HTML
  const mainSection = document.querySelector("main");
  mainSection.appendChild(trendingContainer);
}

// Call the fetchTrendingItems function to display the trending items
fetchTrendingItems();

// You can add more functionality related to trending items in the trending.js file.

  