'use strict';

function createNotification(description, className) {
  const body = document.querySelector('body');
  const message = document.createElement('div');

  message.classList.add(className);
  message.innerText = description;

  body.append(message);

  setTimeout(() => message.remove(), 2000);
}

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: `
          + `${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  createNotification(message, 'message');
};

module.exports = {
  waitFor,
  printMessage,
};
