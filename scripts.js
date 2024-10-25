/*******************************************************
 * Script: Portfolio Interaction
 * Author: Conor Steward
 * Date: 10/25/24
 * Version: 1.0
 * Purpose: This script handles the card flip animation and rotating 
 * "Howdy" message functionality on the portfolio page.
 *******************************************************/

/* === Rotating Messages Functionality === */
/* Array of rotating messages */
const messages = ["partner", "friends", "hiring manager"];
let messageIndex = 0;

/**
 * Function to rotate the "Howdy" message.
 * Fades out the current message, changes it, and fades it back in.
 */
const rotateMessage = () => {
    const rotatingMessageElement = document.querySelector('.rotating-message');

    // Fade out the current message
    rotatingMessageElement.style.opacity = 0;

    // After fade-out, change the message and fade it back in
    setTimeout(() => {
        // Update the message index (looping through the array)
        messageIndex = (messageIndex + 1) % messages.length;
        rotatingMessageElement.textContent = messages[messageIndex];

        // Fade in the new message
        rotatingMessageElement.style.opacity = 1;
    }, 500); // Time for fade-out (500ms)
};

/* Automatically change the message every 3 seconds */
setInterval(rotateMessage, 3000);

/* === Card Flip Functionality === */
/**
 * Add a click event listener to each card that toggles its "clicked" class,
 * which controls the card flip animation.
 */
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});
