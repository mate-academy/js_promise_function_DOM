'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
          ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

document.querySelector('body').firstElementChild
  .insertAdjacentHTML('afterend', `
    <div class="container"
         style="display: flex; flex-direction: column"
    ></div>`
  );

const printMessage = (message) => {
  document.querySelector('.container').insertAdjacentHTML('beforeend', `
  <div class="message">${message}</div>`);
};

module.exports = {
  waitFor,
  printMessage,
};
