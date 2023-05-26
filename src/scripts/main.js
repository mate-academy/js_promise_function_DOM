'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, e => {
      resolve(
        `
          It was ${eventName} on the element:
          ${element.tagName}, id: ${element.id}.
        `
      );
    });
  });
}

const printMessage = (message) => {
  const messageElement = document.createElement('div');

  messageElement.classList.add('message');
  messageElement.innerHTML = `<p>${message}</p>`;
  document.body.append(messageElement);
};

module.exports = {
  waitFor,
  printMessage,
};
