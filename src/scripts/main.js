'use strict';

function waitFor(element, eventName) {
  const messageText
    = `It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}.`;

  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(messageText);
    });
  });
}

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.classList.add('message');
  notification.textContent = message;

  document.body.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
