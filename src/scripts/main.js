'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(`${eventName}`, e => {
      resolve(`It was ${eventName}`
        + `on the element: ${element.nodeName},`
        + `id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const form = document.querySelector('form');

  form.insertAdjacentHTML('afterend', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
