'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${
        eventName} on the element: ${
        element.nodeName}, id: ${
        element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.classList.add('message');
  notification.textContent = message;

  body.insertAdjacentElement('afterbegin', notification);
};

module.exports = {
  waitFor,
  printMessage,
};
