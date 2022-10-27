'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName},
        id: ${element.id}`
      );
    });
  });
}

const printMessage = createPush();

function createPush() {
  let counter = 0;

  return function(message) {
    const div = document.createElement('div');

    div.className = 'message';
    div.innerText = message;
    document.body.append(div);

    if ([...document.querySelectorAll('div')].length === 1) {
      counter = 0;
    }

    if (!counter) {
      counter++;
    } else {
      div.style.top = `
      ${(30 * counter)
        + div.getBoundingClientRect().height
        * (counter)}px
    `;
      counter++;
    }
  };
}

module.exports = {
  waitFor,
  printMessage,
};
