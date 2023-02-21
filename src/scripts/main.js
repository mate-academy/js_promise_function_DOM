'use strict';

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element:
       ${element.nodeName}, id: ${element.id}.`);
    });
  });
};

const printMessage = (message) => {
  const form = document.querySelector('form');
  const elem = document.createElement('div');

  elem.className = 'message';
  elem.innerText = message;

  return form.append(elem);
};

module.exports = {
  waitFor,
  printMessage,
};
