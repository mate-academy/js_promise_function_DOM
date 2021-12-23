'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element: `
        + `${element.nodeName}, `
        + `id: ${element.id}`
      );
    });
  });
}

const printMessage = (message) => {
  const prevDiv = document.querySelector('.message');

  if (prevDiv) {
    prevDiv.remove();
  }

  const div = document.createElement('div');

  div.textContent = message;
  div.classList.add('message');

  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
