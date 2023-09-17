'use strict';

function waitFor(element, eventName) {
  const result = new Promise((resolve, reject) => {
    document.addEventListener(eventName, (e) => {
      if (e.target === element) {
        resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
      }
    });
  });

  return result;
};

const printMessage = (message) => {
  const body = document.getElementById('document');

  body.insertAdjacentHTML('beforeend', `
  <div class="message">${message}</div>`);
};

module.exports = {
  waitFor,
  printMessage,
};
