'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    function eventHandler(e) {
      element.removeEventListener(eventName, eventHandler);

      resolve(
        `It was ${eventName} on the element: ${element.nodeName}`
        + `, id: ${element.id}`
      );
    }
    element.addEventListener(eventName, eventHandler);
  });
}

const printMessage = (message) => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
};

const myButton = document.getElementById('my-button');

waitFor(myButton, 'click').then(message => printMessage(message));

module.exports = {
  waitFor,
  printMessage,
};
