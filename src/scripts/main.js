'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: `
        + `${element.nodeName}, `
        + `id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const messageContainer = document.createElement('div');

  messageContainer.innerText = message;
  messageContainer.classList.add('message');
  document.body.appendChild(messageContainer);
};

module.exports = {
  waitFor,
  printMessage,
};
