'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`
        It was ${eventName} on the element: ${element.nodeName},
        id: ${element.id}.
      `);
    });
  });
}

const printMessage = (message) => {
  const messageBlock = document.createElement('div');

  messageBlock.classList = 'message';
  messageBlock.innerHTML = message;
  document.body.appendChild(messageBlock);
};

module.exports = {
  waitFor,
  printMessage,
};
