'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:`
        + `${element.nodeName}, id: ${element.id}.`);
    });
  });
};

const printMessage = (message) => {
  const bodyElement = document.querySelector('body');
  const printElement = document.createElement('div');

  bodyElement.appendChild(printElement);
  printElement.innerText = message;
  printElement.classList.add('message');
};

module.exports = {
  waitFor,
  printMessage,
};
