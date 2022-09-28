'use strict';

function waitFor(el, ev) {
  return new Promise((resolve) => {
    el.addEventListener(ev, () =>
      resolve(`It was ${ev} on the element: ${el.nodeName}, id: ${el.id}.`));
  });
}

const printMessage = (msg) => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">${msg}</div>`);
};

module.exports = {
  waitFor,
  printMessage,
};
