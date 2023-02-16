'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName},
         id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const createMessage = document.createElement('div');

  createMessage.classList.add('message');
  createMessage.textContent = message;
  document.body.append(createMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
