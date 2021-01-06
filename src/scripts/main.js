'use strict';

const newBlock = document.createElement('div');

document.body.append(newBlock);

newBlock.id = 'information';
newBlock.style.top = '50px';
newBlock.style.right = '50px';
newBlock.style.position = 'absolute';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(`${eventName}`, (e) => {
      e.preventDefault();

      const message = `It was ${eventName}`
      + ` on the element: ${element.nodeName}, id: ${element.id}.`;

      resolve(message);
    }, true);
  });
};

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.classList.add(`message`);
  notification.textContent = message;

  document.getElementById('information').append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
