'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(`${eventName}`, () => {
      resolve(`It was ${eventName} on the element: ${element.nodeName},\
      id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const table = document.createElement('div');

  table.className = 'message';
  table.innerText = `${message}`;
  document.body.prepend(table);
};

module.exports = {
  waitFor,
  printMessage,
};
