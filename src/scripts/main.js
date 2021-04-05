'use strict';

const messageElements = document.createElement('div');

messageElements.className = 'messages';
document.body.append(messageElements);

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`
        It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.
      `);
    });
  });
};

const printMessage = (message) => {
  const messageElement = document.createElement('div');

  messageElement.textContent = message;
  messageElement.className = 'message';

  messageElements.append(messageElement);
};

module.exports = {
  waitFor,
  printMessage,
};
