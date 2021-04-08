'use strict';

function waitFor(element, eventName) {
  const newPromise = new Promise(resolve => {
    element.addEventListener(eventName, (handleEvent) => {
      // eslint-disable-next-line max-len
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });

  return newPromise;
}

const printMessage = (message) => {
  const newMessage = document.createElement('div');

  newMessage.className = 'message';
  newMessage.innerText = message;

  document.body.append(newMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
