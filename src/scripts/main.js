'use strict';



function waitFor(element, eventName) {
  // write your code here
  return new Promise((resolve) => {
    const handler = (e) => {
      const message = `Це була подія "${eventName}" на елементі: ${element.nodeName}, id: ${element.id || 'N/A'}.`;

      resolve(message);
      element.removeEventListener(eventName, handler);
    };

    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  // write your code here
  const messageDiv = document.createElement('div');

  messageDiv.classList.add(
    'message',
    'bg-purple-200',
    'text-purple-800',
    'p-3',
    'rounded-lg',
    'text-center',
    'shadow-md',
    'mb-2',
  );
  messageDiv.textContent = message;

  if (messageContainer.firstChild) {
    messageContainer.insertBefore(messageDiv, messageContainer.firstChild);
  } else {
    messageContainer.appendChild(messageDiv);
  }

  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');
const messageContainer = document.getElementById('message-container');

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);
