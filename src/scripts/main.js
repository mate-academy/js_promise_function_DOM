'use strict';

const messagesBlock = `
  <div 
    class="messages"
    style="
      position: absolute; 
      right: 0; top: 20%; 
      display: flex; flex-direction: column;"
    >
  </div>
`;

document.body.insertAdjacentHTML('beforeend', messagesBlock);

const nodeMessageBlock = document.querySelector('.messages')

function waitFor(element, eventName) {
// write your code here
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      const message = `It was ${eventName} on the element: `
        + `${element.nodeName}, id: ${element.id}.`;

      resolve(message);
    });
  });
}

const printMessage = (message) => {
  const maskMessage = `
    <div class="message" style="margin-bottom: 10px;">${message}</div>
  `;

  nodeMessageBlock.insertAdjacentHTML('beforeend', maskMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
