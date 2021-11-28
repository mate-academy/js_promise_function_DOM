'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: ${element.nodeName},
       id: ${element.id}.`);
    });
  });
}

const notification = document.createElement('div');

const printMessage = (message) => {

  notification.classList.add('message');
  notification.innerText = message;

  body.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
