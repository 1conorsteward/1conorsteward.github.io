// JavaScript to rotate messages
const messages = ["partner", "friends", "hiring manager"];
let messageIndex = 0;

const rotateMessage = () => {
    const rotatingMessageElement = document.querySelector('.rotating-message');
    messageIndex = (messageIndex + 1) % messages.length;
    rotatingMessageElement.textContent = messages[messageIndex];
};

// Change the message every 3 seconds
setInterval(rotateMessage, 3000);
