
function searchPage() {
    const searchQuery = document.getElementById("searchBox").value.toLowerCase();
    const content = document.getElementById("content").textContent.toLowerCase();
    const resultsList = document.getElementById("resultsList");

    // Clear previous results
    resultsList.innerHTML = '';

    if (content.includes(searchQuery)) {
        const searchMatches = content.match(new RegExp(searchQuery, 'gi'));
        searchMatches.forEach(match => {
            const listItem = document.createElement("li");
            listItem.textContent = match;
            resultsList.appendChild(listItem);
        });
    } else {
        const noResults = document.createElement("li");
        noResults.textContent = "No results found.";
        resultsList.appendChild(noResults);
    }
}
/*  for search button*/
function searchPage() {
    const searchQuery = document.getElementById("searchBox").value.toLowerCase();
    const content = document.body.textContent.toLowerCase();
    const resultsList = document.getElementById("resultsList");

    // Clear previous results
    resultsList.innerHTML = '';

    if (content.includes(searchQuery)) {
        const searchMatches = content.match(new RegExp(searchQuery, 'gi'));
        searchMatches.forEach(match => {
            const listItem = document.createElement("li");
            listItem.textContent = match;
            resultsList.appendChild(listItem);
        });
    } else {
        const noResults = document.createElement("li");
        noResults.textContent = "No results found.";
        resultsList.appendChild(noResults);
    }
}
// refresh image
// Array of image URLs
const imageUrls = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    // Add more image URLs here
];

let currentIndex = 0; // Current image index

// Function to refresh the image source every 1 minute (60000 milliseconds)
function refreshImage() {
    const imageElement = document.getElementById("refreshingImage");
    const currentSrc = imageElement.getAttribute("src");
    // Calculate the next image index
    currentIndex = (currentIndex + 1) % imageUrls.length;
    // Get the URL of the next image
    const nextImageUrl = imageUrls[currentIndex];
    //Add a random query parameter to force a refresh
    const randomParam = Math.random();
    const newSrc = `${nextImageUrl}?v=${randomParam}`;
    // Update the image source
    imageElement.setAttribute("src", newSrc);
}
// Initial call to refresh the image when the page loads
refreshImage();
// Refresh the image every 1 minute (adjust the interval as needed)
setInterval(refreshImage, 60000); // Refresh every 1 minute

