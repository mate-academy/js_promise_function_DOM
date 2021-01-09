'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      if (eventName !== e.type) {
        return;
      }

      resolve(`It was ${eventName} on the element: ${element.nodeName},
      id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
// write your code here
  const notificationMessage = document.createElement(`div`);

  notificationMessage.textContent = message;
  notificationMessage.classList.add(`message`);
  document.body.append(notificationMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
