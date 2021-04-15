'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(`${eventName}`, () => {
      resolve(`It was ${eventName} `
        + `on the element: ${element.nodeName}, `
        + `id: ${element.id}.`
      );
    });
  });
}

const messageContainer = document.createElement('div');

messageContainer.className = 'message-container';
document.body.append(messageContainer);

const printMessage = (message) => {
  messageContainer.insertAdjacentHTML('beforeend', `
    <div class="message">${message}<div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
