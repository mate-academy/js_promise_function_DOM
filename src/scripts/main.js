'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve((`It was ${eventName} on the element: ${element.nodeName},`
        + ` id: ${element.id}`));
    });
  });
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');

  notification.className = 'message';
  notification.innerText = message;
  body.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
