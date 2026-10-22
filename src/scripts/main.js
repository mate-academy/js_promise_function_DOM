'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-shadow
    element.addEventListener(`${eventName}`, (event) => {
      event.preventDefault();

      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    });
  });
}

const printMessage = (message) => {
  const oldNotification = document.querySelector('.message');

  if (oldNotification) {
    oldNotification.remove();
  }

  const notification = document.createElement('div');

  notification.classList.add('message');
  notification.textContent = message;
  document.body.appendChild(notification);
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
