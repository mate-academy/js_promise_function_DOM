'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    const form = document.querySelector('form');

    form.addEventListener('click', (e) => {
      resolve(`It was ${eventName}
      on the element: ${element.nodeName},
      id: ${element.id}`);
    });
  }).then().catch();
}

const printMessage = (message) => {
  document.body.insertAdjacentHTML('beforeend',
    `<div class="message"> ${message} </div>`
  );
};

module.exports = {
  waitFor,
  printMessage,
};
