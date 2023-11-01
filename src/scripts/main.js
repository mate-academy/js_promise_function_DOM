'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: `
        + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const createMessageDiv = document.createElement('div');

  createMessageDiv.classList.add('message');
  createMessageDiv.innerText = message;

  document.body.appendChild(createMessageDiv);
};

module.exports = {
  waitFor,
  printMessage,
};
