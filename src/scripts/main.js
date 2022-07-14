'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise(resolve => {
    element.addEventListener(`${eventName}`, (e) => {
      resolve(`
      It was ${eventName} on the element:
      ${e.target.nodeName}, id: ${e.target.id}.`);
    });
  });
};

const printMessage = (message) => {
// write your code here
  const div = `<div class="message">${message}</div>`;

  return document.body.insertAdjacentHTML('beforeend', div);
};

module.exports = {
  waitFor,
  printMessage,
};
