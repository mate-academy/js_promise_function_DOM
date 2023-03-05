'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`
        It was ${eventName}
        on the element: ${element.nodeName}, id: ${element.id}.
      `);
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
