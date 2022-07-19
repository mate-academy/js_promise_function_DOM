'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve((`It was ${eventName} on the element: ${element.nodeName},`
        + ` id: ${element.id}`));
    });
  });
}

const printMessage = (message) => {
  if (body.querySelector('.message')) {
    body.querySelector('.message').remove();
  }

  const notification = document.createElement('div');

  notification.className = 'message';
  notification.innerText = message;
  body.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
