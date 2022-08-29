'use strict';

const notification = document.createElement('div');

document.body.append(notification);

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve, reject) => {
    element.addEventListener(`${eventName}`, () => {
      const message = `It was ${eventName} on the element: 
        ${element.nodeName}, id: ${element.id}.`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
// write your code here
  notification.classList = 'message';
  notification.textContent = message;
};

module.exports = {
  waitFor,
  printMessage,
};
