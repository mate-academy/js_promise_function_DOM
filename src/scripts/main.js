'use strict';

const info = document.querySelector('.info');

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName}
        on the element: ${element.nodeName}, id: ${element.id}`);
    });
  });
}

const printMessage = (message) => {
  info.insertAdjacentHTML('beforeend', `
  <div class="success">
    ${message}
  </div>
`);
};

module.exports = {
  waitFor,
  printMessage,
};
