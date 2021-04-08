'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: ${element.nodeName},
        id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const notificationMessage = document.createElement('div');

  notificationMessage.className = 'message';
  notificationMessage.innerText = message;

  document.body.append(notificationMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
