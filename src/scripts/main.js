'use strict';

function waitFor(element, eventName) {
  // write your code here
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:`
        + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const container = document.createElement('div');

document.body.append(container);

const printMessage = (message) => {
  // write your code here
  const notification = document.createElement('div');

  notification.className = 'message';
  notification.textContent = message;

  container.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
