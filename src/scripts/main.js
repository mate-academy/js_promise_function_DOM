'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    const message = `It was ${eventName} on the element: `
      + `${element.nodeName}, id: ${element.id}`;

    document.addEventListener(eventName, (evt) => {
      const elementToClick = evt.target;

      if (element === elementToClick) {
        resolve(message);
      }
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.classList.add('message');
  div.innerText = message;
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
