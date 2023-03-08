'use strict';

const block = document.createElement('div');

document.body.append(block);

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`
      It was ${eventName} on the element: ${element.nodeName} id: ${element.id}.
      `);
    });
  });
}

const printMessage = (message) => {
  block.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
