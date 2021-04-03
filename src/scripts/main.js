'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, (e) => {
      const message = `It was ${eventName} on the element: `
      + `${e.target.nodeName}, id: ${element.id}.`;

      resolve(message);
    });
  });
}

const innerForMessage = document.createElement('div');

innerForMessage.classList.add('inner');
document.body.append(innerForMessage);

const printMessage = (message) => {
  const notification = document.createElement('div');
  const inner = document.querySelector('.inner');

  notification.classList.add('message');
  notification.textContent = message;
  inner.append(notification);
  inner.style.cssText = 'display: flex; flex-direction: column; gap: 10px';
};

module.exports = {
  waitFor,
  printMessage,
};
