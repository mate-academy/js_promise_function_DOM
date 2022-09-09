'use strict';

const body = document.body;
let evName;
let nodeName;
let id;

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve();
    });
  }).then(() => {
    evName = eventName;
    nodeName = element.nodeName;
    id = element.id;
  });
}

const printMessage
  = (message = `It was ${evName} on the element: ${nodeName}, id: ${id}.`) => {
    body.insertAdjacentHTML('beforeend', `
      <div class="message">${message}</div>
    `);
};

module.exports = {
  waitFor,
  printMessage,
};
