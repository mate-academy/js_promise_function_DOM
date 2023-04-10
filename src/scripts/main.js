'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    function handler() {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}.`);
    }

    element.addEventListener(eventName, handler);
  });
}

const printMessage = (message) => {
  const elementMessage = document.createElement('div');

  elementMessage.className = 'message';
  elementMessage.textContent = message;
  document.body.append(elementMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
