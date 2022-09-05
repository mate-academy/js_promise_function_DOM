'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const body = document.body;

  body.insertAdjacentHTML(
    'beforeend',
    `
      <div class="message">
        <p>${message}</p>
      </div>
    `
  );
};

module.exports = {
  waitFor,
  printMessage,
};
