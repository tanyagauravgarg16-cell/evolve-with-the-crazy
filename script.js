// script.js

// Function to change background color
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to display current date and time
function displayDateTime() {
    const dateTimeContainer = document.getElementById('date-time');
    const now = new Date();
    const formattedDate = now.toISOString().substring(0, 19).replace('T', ' ');
    dateTimeContainer.innerHTML = `Current Date and Time (UTC): ${formattedDate}`;
}

// Add event listener to button
document.getElementById('color-btn').addEventListener('click', changeBackgroundColor);

displayDateTime();