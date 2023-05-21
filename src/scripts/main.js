'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: `
          + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const block = document.createElement('div');

  block.className = 'message';
  block.innerText = message;
  document.body.append(block);
};

module.exports = {
  waitFor,
  printMessage,
};
