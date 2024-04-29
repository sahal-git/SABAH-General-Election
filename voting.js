// voting.js

// Function to handle the voting process for a position
function castVote(position, candidateId, nextPositionUrl) {
    // Simulated vote submission (replace this with actual backend logic)
    console.log(`Vote for ${position}: Candidate ${candidateId} submitted successfully.`);
    // alert(`Vote for ${position} submitted successfully!`);

    // Store the voted value in local storage
    const votedCandidate = localStorage.getItem(position);
    if (votedCandidate) {
        // If a vote for this position has already been cast, increment the count
        localStorage.setItem(position, parseInt(votedCandidate) + 1);
    } else {
        // If this is the first vote for this position, set the count to 1
        localStorage.setItem(position, 1);
    }

    // Redirect to the next position's voting page
    window.location.href = nextPositionUrl;
}
