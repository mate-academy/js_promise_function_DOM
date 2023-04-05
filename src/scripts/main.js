'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      /* eslint-disable max-len */
      const message = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

      resolve(
        printMessage(message)
      );
    });
  });
}

const printMessage = (message) => {
  const notificationMessage = document.createElement('div');

  notificationMessage.classList.add('message');
  notificationMessage.innerText = message;
  document.body.appendChild(notificationMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
