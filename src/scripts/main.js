'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');

  notification.className = 'message';
  notification.textContent = `${message}`;
  body.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
