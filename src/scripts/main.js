'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName}`
      + ` on the element: ${element.nodeName}, id: ${element.id}`);
    });
  });
}

const printMessage = (message) => {
  const messageBox = document.createElement('div');

  messageBox.classList.add('message');
  messageBox.textContent = message;
  document.querySelector('body').appendChild(messageBox);
};

module.exports = {
  waitFor,
  printMessage,
};
