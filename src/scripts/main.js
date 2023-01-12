'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    document.addEventListener(`${eventName}`, (evt) => {
      const elementToClick = evt.target;

      if (element === elementToClick) {
        resolve(`
          It was ${eventName} on the element:
          ${elementToClick.nodeName}, id: ${elementToClick.id}.
        `);
      }
    });
  });
}

const printMessage = (message) => {
  createElement(message);
};

module.exports = {
  waitFor,
  printMessage,
};

function createElement(message) {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message};
    </div>
  `);
}
