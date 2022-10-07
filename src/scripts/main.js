'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      const part1 = `It was ${eventName} on the element:`;
      const part2 = ` ${element.nodeName}, id: ${element.id}.`;

      resolve(part1 + part2);
    });
  });
}

const body = document.querySelector('body');

const printMessage = (message) => {
  const notification = `
    <div class="message">
      ${message}
    </div>
  `;

  body.insertAdjacentHTML('afterbegin', notification);
};

module.exports = {
  waitFor,
  printMessage,
};
