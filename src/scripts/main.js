'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      const id = element.getAttribute('id');
      const message = `It was ${eventName} on the element: ${element.nodeName}, 
        id: ${id}.`;

      resolve(message);
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
