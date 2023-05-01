'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, e => {
      resolve(`It was ${eventName} on the element:
      ${element.nodeName}, id: ${element.id}`);
    });
  });
}

const printMessage = (message) => {
  document.body.insertAdjacentHTML('beforebegin', `
  <div class="message"
    style="width: max-content; margin: 5px">
    ${message}
  </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
