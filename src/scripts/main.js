'use strict';

function waitFor(element, eventName) {
  const resolver = (complete) => {
    element.addEventListener(eventName, () => {
      const message = `It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`;

      complete(message);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  const generalBox = document.querySelector('.messages');
  const messageBox = `
    <div class="message">
      ${message}
    </div>
  `;

  generalBox.insertAdjacentHTML('beforeend', messageBox);
};

module.exports = {
  waitFor,
  printMessage,
};
