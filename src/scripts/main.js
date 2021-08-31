'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: `
        + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const messageBlock = document.createElement('div');

  messageBlock.className += 'message';
  messageBlock.innerText = `${message}`;
  document.body.append(messageBlock);
};

module.exports = {
  waitFor,
  printMessage,
};
