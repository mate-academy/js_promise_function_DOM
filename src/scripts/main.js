'use strict';

function waitFor(element, eventName) {
  const promise = new Promise((resolve) => {
    resolve(`
    It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.
    `);
  });

  return promise;
}

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
