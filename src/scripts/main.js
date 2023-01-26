'use strict';

function waitFor(element, eventName) {
  const resolver = (success) => {
    element.addEventListener(eventName, e => {
      success(
        `It was ${eventName} on the element: ${element.nodeName},
        id: ${element.id}.`
      );
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.classList.add('message');
  body.appendChild(div);
  div.textContent = message;
};

module.exports = {
  waitFor,
  printMessage,
};
