'use strict';

const notificationContainer = document.createElement('div');

notificationContainer.style.display = 'flex';
notificationContainer.style.flexDirection = 'column';

function waitFor(element, eventName) {
  const resolved = (resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName}`
        + `on the element: ${element.nodeName},`
        + `id: ${element.id}`
      );
    });
  };

  return new Promise(resolved);
}

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.textContent = message;
  notification.classList.add('message');
  document.body.append(notificationContainer);
  notificationContainer.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
