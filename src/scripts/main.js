'use strict';

// handle every event only once time?
const ONLY_ONCE = false;

function waitFor(element, eventName) {
  return new Promise(resolve => element.addEventListener(eventName, () =>
    resolve(`It was ${eventName} on the element: `
    + `${element.nodeName}, id: ${element.id}.`), {
    once: ONLY_ONCE,
  }));
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.textContent = message;
  div.classList = 'message';
  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
