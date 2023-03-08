'use strict';

const elementDom = document.createElement('div');

document.querySelector('form').append(elementDom);

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

function printMessage(message) {
  elementDom.classList.add('message');
  elementDom.textContent = message;
}

module.exports = {
  waitFor,
  printMessage,
};
