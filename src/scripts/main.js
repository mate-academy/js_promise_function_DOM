'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: `
        + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const newMessage = document.createElement('div');

  newMessage.className = 'message';
  newMessage.textContent = message;

  document.body.append(newMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
