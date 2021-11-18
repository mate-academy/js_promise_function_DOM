'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the elment:
      ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
// write your code here
  const newMessage = document.createElement('div');

  newMessage.className = 'message';
  newMessage.textContent = message;

  document.body.append(newMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
