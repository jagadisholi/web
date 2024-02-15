
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
    'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg  ', 'img/8.jpg','img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg ', 'img/13.jpg ', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg
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

const scrollText = document.querySelectorAll("#scroll-text");
const typedText = document.getElementById("typed-text");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    scrollText.forEach((element) => {
        if (scrollPosition > element.offsetTop - windowHeight) {
            element.style.opacity = 1;
        }
    });
});

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Quisque id odio. Praesent libero. Integer nec odio. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.";

let index = 0;
function type() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}

type();
