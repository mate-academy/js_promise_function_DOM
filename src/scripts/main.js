'use strict';

function waitFor(el, eName) {
  return new Promise((resolve, reject) => {
    el.addEventListener(eName, (e) => {
      resolve(`It was ${eName} on the element: ${el.nodeName}, id: ${el.id}.`);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;
  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
