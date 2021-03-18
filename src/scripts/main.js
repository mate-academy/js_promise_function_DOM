'use strict';

function waitFor(element, eventName) {
  const resolver = (complete) => {
    element.addEventListener(eventName, e => {
      complete(
        `It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}`
      );
    });
  };

  return new Promise(resolver);
}

const body = document.querySelector('body');

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;

  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
