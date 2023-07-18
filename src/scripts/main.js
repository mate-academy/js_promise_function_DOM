'use strict';

const waitFor = (element, eventName) => {
  const resolver = (resolve) => {
    element.addEventListener(eventName, () => {
      // eslint-disable-next-line max-len
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  };

  return new Promise(resolver);
};

const printMessage = (message) => {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', `
    <div class="message">${message}</div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
