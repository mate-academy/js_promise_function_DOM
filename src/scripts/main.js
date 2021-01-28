'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName}
      on the element: ${e.target.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.classList.add('message');
  notification.textContent = message;
  document.querySelector('body').append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
