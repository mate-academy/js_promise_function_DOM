'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(`${eventName}`, (e) => {
      const text = `It was ${eventName} on the element: ${
        e.target.nodeName}, id: ${e.target.id}.`;

      resolve(text);
    }, true);
  });
}

const printMessage = (message) => {
  const notification = document.createElement('p');
  const div = document.querySelector('div');

  div.style.position = 'fixed';
  div.style.top = `10px`;
  div.style.right = `10px`;
  notification.className = 'message';
  notification.textContent = message;
  div.append(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
