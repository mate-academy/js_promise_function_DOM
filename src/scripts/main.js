'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      // eslint-disable-next-line max-len
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const element = `
    <div class="message">
      ${message}
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', element);
};

module.exports = {
  waitFor,
  printMessage,
};
