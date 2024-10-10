const messages = ["partner!", "friends!", "hiring manager!"];
let messageIndex = 0;

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});


const rotateMessage = () => {
    const rotatingMessageElement = document.querySelector('.rotating-message');

    // Fade out the current message
    rotatingMessageElement.style.opacity = 0;

    // After the fade-out, change the message and fade it back in
    setTimeout(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        rotatingMessageElement.textContent = messages[messageIndex];

        // Fade in the new message
        rotatingMessageElement.style.opacity = 1;
    }, 500); // Time for fade-out (500ms)
};

// Change the message every 3 seconds
setInterval(rotateMessage, 3000);
