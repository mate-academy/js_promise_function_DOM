'use strict';

const div = document.createElement('div');

div.classList.add('message');

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`
        It was ${eventName} on the element: ${element.nodeName}, 
        id: ${element.id}.
      `);
    });
  });
};

const printMessage = (message) => {
  document.forms[0].insertAdjacentHTML('beforeend', `
    <div class='message'>${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
