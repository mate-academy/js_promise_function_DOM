'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(`${eventName}`, () => {
      resolve(`
        It was ${eventName} on the element: 
        ${element.nodeName}, id: ${element.id}.
      `);
    });
  });
}

const printMessage = (message) => {
  const body = document.body;

  body.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>
  `);

  const div = body.querySelectorAll('div');

  setTimeout(() => {
    for (const block of div) {
      block.hidden = true;
    }
  }, 3500);
};

module.exports = {
  waitFor,
  printMessage,
};
