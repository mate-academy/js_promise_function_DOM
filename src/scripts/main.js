'use strict';

const printMessage = (message) => {
  const box = document.createElement('div');

  document.body.appendChild(box);
  box.className += 'message';
  box.textContent = `${message}`;
};

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      printMessage(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

module.exports = {
  waitFor,
  printMessage,
};
