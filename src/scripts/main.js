'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    })
  }) 
}

const printMessage = (message) => {
  const newDiv = `<div class="message">${message}</div>`;
  document.body.insertAdjacentHTML('beforeend', newDiv);
};

module.exports = {
  waitFor,
  printMessage,
};
