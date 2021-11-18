'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: `
       + `${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const messageContainer = document.createElement('div');

messageContainer.classList.add('message__container');

const printMessage = (message) => {
  const block = document.createElement('div');

  block.classList.add('message');
  block.innerHTML = message;
  messageContainer.append(block);
  document.body.append(messageContainer);
};

module.exports = {
  waitFor,
  printMessage,
};
