'use strict';

function waitFor(element, eventName) {
  const result = new Promise((resolve, reject) => {
    element.addEventListener(eventName, (evt) => {
        resolve(`
        It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}
        `);
    });
  });

  return result;
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
