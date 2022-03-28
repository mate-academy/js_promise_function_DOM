'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const messageElement = document.createElement('div');

  messageElement.classList.add('message');
  messageElement.innerText = message;
  document.body.append(messageElement);

  setTimeout(() => messageElement.remove(), 3000);
};

module.exports = {
  waitFor,
  printMessage,
};
