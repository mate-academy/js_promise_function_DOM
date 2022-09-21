'use strict';

function waitFor(element, eventName) {
  const promise = new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.
      `);
    });
  });

  return promise;
}

const printMessage = (message) => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
