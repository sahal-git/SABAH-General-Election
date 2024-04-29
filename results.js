// results.js

// Function to fetch election results from backend or local storage
function fetchResults() {
    // Simulated results (replace this with actual backend or local storage logic)
    const results = {
        president: {
            candidate1: 300,
            candidate2: 450
        },
        secretary: {
            candidate1: 400,
            candidate2: 350
        },
        treasurer: {
            candidate1: 500,
            candidate2: 400
        }
    };

    return results;
}

// Function to display election results on the page
function displayResults() {
    const resultsContainer = document.getElementById('results-container');
    const results = fetchResults(); // Fetch results

    // Generate HTML for results table
    let html = '<h2>President</h2><table><tr><th>Candidate</th><th>Votes</th></tr>';
    for (const candidate in results.president) {
        html += `<tr><td>${candidate}</td><td>${results.president[candidate]}</td></tr>`;
    }
    html += '</table>';

    html += '<h2>Secretary</h2><table><tr><th>Candidate</th><th>Votes</th></tr>';
    for (const candidate in results.secretary) {
        html += `<tr><td>${candidate}</td><td>${results.secretary[candidate]}</td></tr>`;
    }
    html += '</table>';

    html += '<h2>Treasurer</h2><table><tr><th>Candidate</th><th>Votes</th></tr>';
    for (const candidate in results.treasurer) {
        html += `<tr><td>${candidate}</td><td>${results.treasurer[candidate]}</td></tr>`;
    }
    html += '</table>';

    // Display results on the page
    resultsContainer.innerHTML = html;
}

// Call displayResults function when the page loads
window.onload = displayResults;
