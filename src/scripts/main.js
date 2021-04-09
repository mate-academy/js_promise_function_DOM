'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:`
      + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const container = document.createElement('div');

container.className = 'container';
document.body.append(container);

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.className = 'message';
  notification.textContent = message;

  container.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
