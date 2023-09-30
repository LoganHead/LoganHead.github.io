// Check if the user is logged in (this is a simplified example)
const isLoggedIn = true; // Change this based on your authentication logic

// Function to load content based on user's login status
function loadContent() {
    const contentDiv = document.getElementById('content');

    if (isLoggedIn) {
        contentDiv.innerHTML = '<h2>Welcome, User!</h2><p>This is your personalized content.</p>';
    } else {
        contentDiv.innerHTML = '<h2>Welcome to our website!</h2><p>Please log in to access exclusive content.</p>';
    }
}

// Call the function when the page loads
window.onload = loadContent;