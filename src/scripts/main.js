'use strict';

function waitFor(elem, eventName) {
  return new Promise((resolve) => {
    elem.addEventListener(eventName, () => {
      resolve(`
        It was ${eventName} on the element: ${elem.nodeName}, id: ${elem.id}
      `);
    });
  });
}

const printMessage = (message) => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="message">${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
