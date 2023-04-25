'use strict';

function waitFor(element, eventName) {
  const promise1 = new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName}
       on the element: ${element.nodeName}, id: ${element.id}.`
      );
    });
  });

  return promise1;
}

const printMessage = (message) => {
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
