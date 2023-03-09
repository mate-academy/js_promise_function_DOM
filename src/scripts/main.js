'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  const promise = new Promise((resolve, reject) => {
    element.addEventListener(`${eventName}`, () => {
      resolve(`It was ${eventName} on the element:`
      + ` ${element.nodeName}, id: ${element.id}.`);
    });
  });

  return promise;
}

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.className = 'message';
  notification.textContent = message;
  body.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
