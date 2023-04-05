'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName}
        on the element: ${element.nodeName}, id: ${element.id}.`
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
