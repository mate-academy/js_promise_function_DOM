'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName} on the element:`
       + `${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', `
  <div class="message">${message}</div>
  `);
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
