'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the
        element: ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const messageToPrint = document.createElement('div');

  messageToPrint.className = 'message';
  messageToPrint.innerHTML = message;
  document.body.appendChild(messageToPrint);
};

module.exports = {
  waitFor,
  printMessage,
};
