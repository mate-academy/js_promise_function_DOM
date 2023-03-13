'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const result = document.createElement('div');

  result.innerHTML = `
    <div class="message">
      ${message}
    </div>
  `;

  document.body.append(result);
};

module.exports = {
  waitFor,
  printMessage,
};
