'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve, reject) => {
    switch (eventName) {
      case 'click': element.addEventListener(('click'), () => {
        resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
      });

        break;

      case 'input': element.addEventListener(('click'), () => {
        resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
      });

        break;

      case 'blur': element.addEventListener(('click'), () => {
        resolve(`It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}.`);
      });

        break;
    }
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');
  const p = document.createElement('p');

  div.classList.add('message');
  p.innerText = message;

  div.append(p);
  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
