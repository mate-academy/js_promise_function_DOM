'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener('click', el => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName},
      id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const element = document.createElement('div');

  element.className = 'message';
  element.textContent = message;
  document.body.append(element);
};

module.exports = {
  waitFor,
  printMessage,
};
