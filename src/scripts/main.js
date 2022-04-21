'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName}
       on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const createMessage = document.createElement('div');

  createMessage.className = 'message';
  createMessage.innerText = message;

  document.body.append(createMessage);

  setTimeout(() => {
    createMessage.remove();
  }, 1000);
};

module.exports = {
  waitFor,
  printMessage,
};
