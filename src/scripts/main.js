'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, (e) => {
      const message = `It was ${eventName} on the element: `
      + `${e.target.nodeName}, id: ${element.id}.`;

      resolve(message);
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
