'use strict';

const div = document.createElement('div');

div.style.display = 'block';
div.style.position = 'absolute';
div.style.top = '20px';
div.style.right = '20px';
document.body.append(div);

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      const msg = `It was ${eventName} on
      the element: ${element.nodeName}, id: ${element.id}.`;

      resolve(msg);
    });
  });
}

const printMessage = (message) => {
  div.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
