'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const handler = () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`
      );
    };

    element.addEventListener(eventName, handler, { once: true });
  });
}

function printMessage(message) {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}


