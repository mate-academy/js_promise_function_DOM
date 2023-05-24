'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: `
      + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const tag = document.createElement('div');

  tag.classList.add('message');

  const text = document.createTextNode(`${message}`);

  tag.appendChild(text);

  document.body.appendChild(tag);
};

module.exports = {
  waitFor,
  printMessage,
};
