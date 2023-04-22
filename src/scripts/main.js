'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    const handler = () => {
      resolve(
        `It was ${eventName}
        on the element: ${element.nodeName},
        id: ${element.id}.`
      );
    };

    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  const notificationId = '1';
  let notificationElement = document.getElementById(notificationId);

  if (notificationElement) {
    notificationElement.remove();
  }

  notificationElement = document.createElement('div');
  notificationElement.id = notificationId;
  notificationElement.classList.add('message');
  notificationElement.innerText = message;

  document.body.appendChild(notificationElement);
};

module.exports = {
  waitFor,
  printMessage,
};
