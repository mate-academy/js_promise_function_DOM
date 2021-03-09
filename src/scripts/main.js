'use strict';

function waitFor(element, eventName) {
  const resolver = function(resolve) {
    element.addEventListener(eventName, () => {
      const message = `It was ${eventName} `
        + `on the element: ${element.nodeName}, `
        + `id: ${element.id}.`;

      resolve(message);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  const root = document.querySelector('body');
  const notification = document.createElement('block');

  notification.classList.add('message');
  notification.innerText = message;

  root.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
