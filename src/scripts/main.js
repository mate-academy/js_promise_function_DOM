'use strict';

function waitFor(element, eventName) {
  function resolver(resolve) {
    element.addEventListener(`${eventName}`, () => {
      const message = 'It was ' + eventName
        + ' on the element: ' + element.nodeName
        + ', id: ' + element.id + '.';

      resolve(message);
    });
  }

  return new Promise(resolver);
}

const printMessage = (message) => {
  const domMessage = `
    <div class="message">
      ${message}
    </div>
  `;

  return document.body.insertAdjacentHTML('afterbegin', domMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
