'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const notificationDiv = document.createElement('div');

  notificationDiv.className = 'message';
  notificationDiv.textContent = `${message}`;
  document.body.append(notificationDiv);
};

module.exports = {
  waitFor,
  printMessage,
};
