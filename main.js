
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
