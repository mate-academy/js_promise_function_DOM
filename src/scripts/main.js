'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');
  const body = document.body;

  div.insertAdjacentHTML('afterbegin', `
    <div class="message">${message}</div>
  `);

  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
