'use strict';

const container = document.createElement('div');

container.className = 'container';
document.body.append(container);

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      const message = `It was ${eventName} on the element: `
        + `${e.target.nodeName}, id: ${e.target.id}.`;

      resolve(message);
    });
  });
};

const printMessage = (message) => {
  container.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
