'use strict';

function waitFor(element, eventName) {
  const promise1 = (resolve, reject) => {
    element.addEventListener(eventName, () => {
      let result = `It was ${eventName} on the element: `;

      result += `${element.nodeName}, id: ${element.id}.`;
      resolve(result);
    });
  };

  return new Promise(promise1);
}

const printMessage = (message) => {
  const div = document.getElementById('div');

  div.innerText = message;
};

module.exports = {
  waitFor,
  printMessage,
};
