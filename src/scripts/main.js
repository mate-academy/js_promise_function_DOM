'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve) => {
    element.addEventListener(eventName, () => {
      const message
        = `It was ${eventName} on the element: ${element.nodeName}, `
        + `id: ${element.id}`;

      return resolve(message);
    });
  };

  const myPromise = new Promise(resolver);

  return myPromise;
}

const printMessage = (message) => {
  const pageBody = document.querySelector('body');

  const notification = document.createElement('div');

  notification.classList.add('message');

  notification.innerHTML = message;

  pageBody.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
