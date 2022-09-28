'use strict';

const root = document.querySelector('body');

function waitFor(el, ev) {
  return new Promise((resolve) => {
    el.addEventListener(ev, () =>
      resolve(`It was ${ev} on the element: ${el.nodeName}, id: ${el.id}.`));
  });
}

const printMessage = (msg) => {
  root.insertAdjacentHTML('beforeend', `<div class="message">${msg}</div>`);
};

module.exports = {
  waitFor,
  printMessage,
};
