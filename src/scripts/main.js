'use strict';

const messageContainer = document.querySelector('.message-container');

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve([eventName, element.nodeName, element.id]);
    });
  });
}

const printMessage = message => {
  const [eventName, nodeName, elementId] = message;

  messageContainer.insertAdjacentHTML('beforeend', `
    <div class="message">
      It was ${eventName} on the element: ${nodeName}, id: ${elementId}.
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
