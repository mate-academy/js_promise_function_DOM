'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve, reject) => {
    element.addEventListener(`${eventName}`, () => {
      resolve(`It was ${eventName} on the element:
        ${element.nodeName},
        id: ${element.id}.`
      );
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.className = 'message';
  div.innerHTML = message;
  body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
