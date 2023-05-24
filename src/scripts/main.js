'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const element = document.createElement('div');

  element.className = 'message';
  element.textContent = message;
  body.append(element);
};

module.exports = {
  waitFor,
  printMessage,
};
