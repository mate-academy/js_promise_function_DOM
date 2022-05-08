'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(`${eventName}`, () => {
      resolve(`
      It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.
      `);
    });
  });
};

const printMessage = (message) => {
  const alert = document.createElement('div');
  
  alert.classList.add('message');
  alert.innerText = message;
  document.body.appendChild(alert);
};

module.exports = {
  waitFor,
  printMessage,
};
