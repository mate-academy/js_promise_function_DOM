'use strict';

function waitFor(element, eventName) {
  // write your code here
  return new Promise(resolve => {
    (element.addEventListener(eventName, () => {
      resolve(`
      It was ${eventName} on the element: 
      ${element.nodeName}, id: ${element.id}.
      `);
    }));
  });
}

const printMessage = (message) => {
  // write your code here
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
