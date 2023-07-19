'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      let result = `It was ${eventName} on the element: `;

      result += `${element.nodeName}, id: ${element.id}.`;
      resolve(result);
    });
  });

  // return new Promise(promise1);
}

const printMessage = (message) => {
  const divTag = document.createElement('div');

  divTag.classList.add('message');

  const text = document.createTextNode(`${message}`);

  divTag.appendChild(text);

  document.body.appendChild(divTag);
};

module.exports = {
  waitFor,
  printMessage,
};
