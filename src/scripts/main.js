'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: `
      + `${element.nodeName}, id: ${element.id}.`);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  const messageElement = document.createElement('div');

  messageElement.classList.add('message');
  messageElement.innerHTML = message;
  document.body.append(messageElement);
};

module.exports = {
  waitFor,
  printMessage,
};
