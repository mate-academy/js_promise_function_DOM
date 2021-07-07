'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the
        element: ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const createMessage = document.createElement('div');

  createMessage.className = message;
  createMessage.innerHTML = message;
  document.body.appendChild(createMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
