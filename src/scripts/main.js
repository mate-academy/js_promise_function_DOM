'use strict';

function waitFor(element, eventName) {
  const resolver = (resolve, reject) => {
    document.addEventListener(`${eventName}`, (e) => {
      if (e.target === element) {
        resolve(`It was
        ${eventName} on the element: ${element.nodeName}, id: ${element.id}`
        );
      };
    }, true);
  };

  return new Promise(resolver);
};

const printMessage = (message) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  body.lastChild.remove();
  div.className = 'message';
  div.textContent = message;
  body.append(div);

  waitFor().then(printMessage);
};

module.exports = {
  waitFor,
  printMessage,
};
