'use strict';

function waitFor(element, eventName) {
  const resolver = () => {
    element.addEventListener(eventName, () => {
      printMessage(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}`);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  const element = document.createElement('div');

  element.textContent = message;
  element.className = 'message';
  document.body.append(element);
};

module.exports = {
  waitFor,
  printMessage,
};
