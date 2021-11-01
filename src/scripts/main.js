'use strict';

function waitFor(element, eventName) {
  return new Promise(() => {
    element.addEventListener(eventName, () => printMessage(
      /* eslint-disable-next-line */
      `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`)
    );
  });
};

const printMessage = (message) => {
  const notificationDiv = document.createElement('div');

  notificationDiv.classList.add('message');
  notificationDiv.innerText = message;

  document.body.append(notificationDiv);
};

module.exports = {
  waitFor,
  printMessage,
};
