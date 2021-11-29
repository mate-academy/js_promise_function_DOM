'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element:`
        + `${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const notification = document.createElement('div');

const printMessage = (message) => {
  notification.className = 'message';
  notification.textContent = message;

  document.body.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
