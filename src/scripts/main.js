'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(`${eventName}`, () => {
      const message = `It was ${eventName}
      on the element: ${element.nodeName},
      id: ${element.id}.`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const messagePlace = document.body.lastElementChild.previousElementSibling;

  const messageHtml = `
    <div class="message">
      ${message};
    </div>
  `;

  messagePlace.insertAdjacentHTML('beforebegin', messageHtml);
};

module.exports = {
  waitFor,
  printMessage,
};
