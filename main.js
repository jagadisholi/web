/*const dateElement = document.querySelector(".date");

function formatDate(date)
{
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
    const MONTHS =["Janawary", "Febrawary", "March", "April","May","June", "July","August","September","October", "November","Decomber"]

    return`${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullDate}`;
}
*/
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
