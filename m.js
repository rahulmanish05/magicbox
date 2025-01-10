let level = 1;
let imageElement = document.getElementById("image");
let messageElement = document.getElementById("message");
let levelElement = document.getElementById("level");

let randomNumber = getRandomNumber(); // Generate the random number when the page loads

// Set the initial image as img0.png
imageElement.src = "img0.png"; // This will be displayed initially before clicking submit

// This function will generate and log the random number
function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log("Generated Random Number:", randomNum); // Log the generated number
    return randomNum;
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userInput").value);
    console.log("User Guess:", userGuess); // Log the user's guess

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        messageElement.textContent = "Please enter a number between 1 and 10.";
        messageElement.classList.remove("success"); // Remove success class in case of invalid input
        return;
    }

    console.log("Current Random Number:", randomNumber); // Log the current random number

    if (userGuess === randomNumber) {
        messageElement.textContent = "Success! You've unlocked the next level!";
        messageElement.classList.add("success"); // Add success class for styling
        changeImage();
        level++;
        if (level > 4) {
            messageElement.textContent = "Congratulations! You've completed all levels.";
            levelElement.textContent = "Level: 4 (Completed)";
        } else {
            levelElement.textContent = "Level: " + level;
        }

        // Generate and log a new random number after a successful guess
        randomNumber = getRandomNumber();
    } else {
        messageElement.textContent = "Try again!";
        messageElement.classList.remove("success"); // Remove success class if not correct
    }
    document.getElementById("userInput").value = ""; // Clear input field
}

function changeImage() {
    switch (level) {
        case 1:
            imageElement.src = "img1.png";
            break;
        case 2:
            imageElement.src = "img2.png";
            break;
        case 3:
            imageElement.src = "img3.png";
            break;
        case 4:
            imageElement.src = "img4.png";
            break;
        default:
            break;
    }
}

// Ensure the initial random number is logged when the page loads
window.onload = function() {
    console.log("Initial Random Number on Page Load:", randomNumber);
}
