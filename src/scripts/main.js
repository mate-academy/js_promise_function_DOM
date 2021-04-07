'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      const message = `It was ${eventName} on the element: \
    ${element.nodeName}, id: ${element.id}.`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const messageBlock = document.createElement('div');

  messageBlock.classList.add('message');

  messageBlock.textContent = message;
  document.body.append(messageBlock);
};

module.exports = {
  waitFor,
  printMessage,
};
