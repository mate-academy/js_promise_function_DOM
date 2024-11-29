'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      if (e.target === element) {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      }
    });
  });
}

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.className = 'message';
  notification.textContent = message;
  document.body.append(notification);
  // for better look
  notification.style.width = '200px';
  notification.style.position = 'absolute';
  notification.style.top = '50px';
  notification.style.right = '50px';
  notification.style.left = 'unset';
};

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
