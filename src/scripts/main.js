'use strict';

document.body.insertAdjacentHTML('beforeend', '<div class="messages"></div>');

const messages = document.querySelector('.messages');

function waitFor(element, eventName) {
  const text = `It was ${eventName} on the element: `
    + `${element.nodeName}, id: ${element.id}.`;

  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(text);
    });
  });
}

const printMessage = (message) => {
  const divMessage = `<div class="message">${message}</div>`;

  messages.insertAdjacentHTML('beforeend', divMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
