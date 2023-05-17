'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve, reject) => {
    const message = `It was ${eventName} on the element: 
    ${element.nodeName}, id: ${element.id}.`;

    element.addEventListener(`${eventName}`, () => {
      resolve(message);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = message;

  document.body.appendChild(messageDiv);
};

module.exports = {
  waitFor,
  printMessage,
};
