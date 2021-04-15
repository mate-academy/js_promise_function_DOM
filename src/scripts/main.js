'use strict';

const form = document.querySelector('form');

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      const text = `It was ${eventName} on the element:
       ${element.nodeName}, id: ${element.id}`;

      resolve(text);
    });
  });
}

const printMessage = (message) => {
  form.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
