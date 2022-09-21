'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      // eslint-disable-next-line max-len
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const container = document.createElement('div');

  container.classList.add('message');
  container.textContent = message;

  document.body.append(container);
};

module.exports = {
  waitFor,
  printMessage,
};
