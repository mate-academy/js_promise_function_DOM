'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, (e) => {
      resolve(`It was ${eventName} on the element: `
      + `${e.target.nodeName}, id: ${element.id}.`);
    });
  });
};

const wrapper = document.createElement('div');

wrapper.className = 'wrapper';
document.body.append(wrapper);

const printMessage = (message) => {
  wrapper.insertAdjacentHTML('afterbegin',
    `<div class="message">${message}</div>`
  );
};

module.exports = {
  waitFor,
  printMessage,
};
