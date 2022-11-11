'use strict';
document.querySelector('form').style = 'position: absolute';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`
        It was ${eventName} on the element: 
        ${element.nodeName},id: ${element.id}.
        `);
    });
  });
}

const printMessage = (message) => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message" style="align-self: flex-start">
      ${message}
    </div>
    `);
};

module.exports = {
  waitFor,
  printMessage,
};
