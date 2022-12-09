'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName}`
        + ` on the element: ${element.nodeName},`
        + ` id: ${element.id}.`
      );
    });
  });
}

const divForMessage = document.createElement('div');

divForMessage.style.cssText = `
  display: flex;
  flex-direction: column;
  align-item: center;
  gap: 5px;
  margin-left: 15px;`;

const printMessage = (message) => {
  document.body.append(divForMessage);

  divForMessage.insertAdjacentHTML('beforeend', `
    <div class="message">${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
