'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const handler = (e) => {
      // Remove the event listener after it is triggered
      element.removeEventListener(eventName, handler);

      // Resolve the promise with the message
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    // Attach the event listener to the element
    element.addEventListener(eventName, handler);
  });
}

// Function to print the message to the DOM
function printMessage(message) {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
}

// Example usage: Add event listeners on input and button elements
document.querySelectorAll('input, button').forEach((element) => {
  ['click', 'input', 'blur'].forEach((e) => {
    waitFor(element, e).then((message) => {
      printMessage(message); // Call printMessage to add the message to the DOM
    });
  });
});

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);
