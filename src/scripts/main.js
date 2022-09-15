'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
// write your code here
  const createMessage = document.createElement('div');

  createMessage.className = 'message';
  createMessage.innerText = message;

  document.body.append(createMessage);

  setTimeout(() => {
    createMessage.remove();
  }, 3000);
};

module.exports = {
  waitFor,
  printMessage,
};
