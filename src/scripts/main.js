'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (someEvent) => {
      if (eventName !== someEvent.type) {
        return;
      }

      resolve(
        `It was ${eventName} on the element: `
          + `${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.innerText = message;
  notification.classList.add('message');

  document.body.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
