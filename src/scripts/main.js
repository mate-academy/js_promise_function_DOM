'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
    }, { once: true });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');

  notification.classList.add('message');
  notification.innerHTML = message;
  body.appendChild(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
