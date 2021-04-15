'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element:`
        + ` ${element.nodeName}, id: ${element.id}`
      );
    });
  });
}

const notifications = document.createElement('div');

document.body.append(notifications);

const printMessage = (message) => {
  notifications.insertAdjacentHTML('afterbegin', `
    <div class="message">${message}</div>
  `);
  notifications.className = 'notifications';
};

module.exports = {
  waitFor,
  printMessage,
};
