'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      // eslint-disable-next-line max-len
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  document.querySelector('body').insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>`);
};

module.exports = {
  waitFor,
  printMessage,
};
