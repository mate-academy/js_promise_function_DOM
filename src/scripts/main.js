'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName}`
        + ` on the element: ${element.nodeName}`
        + ` id: ${element.id}.`
      );
    });
  });
}

const containerMessage = document.createElement('div');

containerMessage.style.cssText = `
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 10px 0 10px;
`;

const printMessage = (message) => {
  document.body.append(containerMessage);

  containerMessage.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
