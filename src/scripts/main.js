'use strict';

function oftop() {
  if (document.querySelector('.container')) {
    return;
  }

  const container = document.createElement('DIV');

  container.style.cssText = `
    position: absolute;
    bacground-color: red;
    top: 2vh;
    right: 2vw;
    display: flex;
    gap: 10px;
    flex-direction: column;`;

  container.classList.add('container');
  document.body.prepend(container);
};

oftop();

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, e => {
      resolve(
        `It was <strong>${eventName}</strong>
        on the element: <strong>${element.nodeName}</strong>,
        id: ${element.id}.`
      );
    });
  });
}

const printMessage = (message) => {
  const elem = `<div class="message"><span>${message}</span></div>`;

  document.querySelector('.container').insertAdjacentHTML('beforeend', elem);
  document.querySelectorAll('STRONG').forEach(el => (el.style.color = 'red'));
};

module.exports = {
  waitFor,
  printMessage,
};
