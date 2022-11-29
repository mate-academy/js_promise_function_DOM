'use strict';

const messagesContainer = document.createElement('div');

messagesContainer.classList.add('messages-container');
document.body.appendChild(messagesContainer);

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`
        It was ${eventName}
        on the element: ${element.nodeName},
        id: ${element.id}
      `);
    });
  });
}

const printMessage = (message) => {
  messagesContainer.insertAdjacentHTML('beforeend', `
    <div class="message">${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
