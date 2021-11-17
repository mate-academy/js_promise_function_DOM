'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        // eslint-disable-next-line max-len
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const messageElement = document.createElement('div');

const printMessage = (message) => {
  messageElement.className = 'message';
  messageElement.innerText = '⚡ ' + message;

  document.body.append(messageElement);
};

module.exports = {
  waitFor,
  printMessage,
};
