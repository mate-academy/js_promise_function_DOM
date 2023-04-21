'use strict';

const body = document.querySelector('body');

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, evt => {
      if (evt.type === eventName) {
        /* eslint-disable */
        resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
        /* eslint-enable */
      };
    });
  });
}

const printMessage = (message) => {
  const element = document.createElement('div');

  element.className = 'message';
  element.innerText = message;
  body.append(element);
};

module.exports = {
  waitFor,
  printMessage,
};
