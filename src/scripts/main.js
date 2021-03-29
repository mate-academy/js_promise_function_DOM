'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
     ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
// write your code here
  const body = document.querySelector('body');
  const notification = document.createElement('div');

  notification.classList.add('message');
  notification.innerText = message;
  body.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
