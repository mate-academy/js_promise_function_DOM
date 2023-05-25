'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${e.type} on the element: `
        + `${e.target.nodeName}, id: ${e.target.id}.`);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class='message'>${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
