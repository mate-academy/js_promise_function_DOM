'use strict';

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

function eventHandling(eventElement) {
  if (eventElement.target === loginField
    || eventElement.target === passwordField
    || eventElement.target === button) {
    waitFor(eventElement.target, eventElement.type).then(printMessage);
  }
}

document.body.addEventListener('click',
  (eventElement) => eventHandling(eventElement));

document.body.addEventListener('input',
  (eventElement) => eventHandling(eventElement));

document.body.addEventListener('blur',
  (eventElement) => eventHandling(eventElement), true);

function waitFor(element, eventName) {
  const promise = new Promise((resolve) => {
    resolve(`
    It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.
    `);
  });

  return promise;
}

const printMessage = (message) => {
  const notificationDiv = document.createElement('div');

  notificationDiv.classList.add('message');
  notificationDiv.innerText = message;

  document.body.append(notificationDiv);
};

module.exports = {
  waitFor,
  printMessage,
};
