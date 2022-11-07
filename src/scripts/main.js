'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    document.body.addEventListener('contextmenu', (ev) => {
      ev.preventDefault();
    });

    element.addEventListener(eventName, () => {
      resolve(`
        It was ${eventName} on the element:${element.nodeName},
        id: ${element.id}`);
    });
  });
}

const printMessage = (message) => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
