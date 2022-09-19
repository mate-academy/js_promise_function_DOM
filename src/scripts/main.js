'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve, reject) => {
    element.addEventListener(`${eventName}`, function(e) {
      resolve(`It was ${eventName} on the element:`
      + ` ${element.nodeName}, id: ${element.id}.`);
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  document.body.insertAdjacentHTML('beforeend', `
  <div class="message">${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
