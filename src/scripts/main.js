'use strict';

const notification = document.createElement('div');
const form = document.querySelector('form');

form.append(notification);

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(`${eventName}`, () => {
      const message = `It was ${eventName} on the element: 
      ${element.nodeName}, id: ${element.id}.`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
  notification.classList = 'message';
  notification.innerText = message;
};

module.exports = {
  waitFor,
  printMessage,
};
