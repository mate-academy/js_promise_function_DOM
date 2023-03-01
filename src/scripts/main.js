'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} `
        + `on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const elementMessage = document.createElement('div');

  elementMessage.classList.add('message');
  elementMessage.innerText = message;
  document.body.appendChild(elementMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
