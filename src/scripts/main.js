'use strict';

const div = document.createElement('div');

div.className = 'container';
document.body.append(div);

function waitFor(element, eventName) {
  const waitPromise = new Promise(resolve => [
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element:`
        + `${element.nodeName}, id: ${element.id}.`
      );
    }),
  ]);

  return waitPromise;
}

const printMessage = (message) => {
  const p = document.createElement('p');

  p.innerText = message;
  p.className = 'message';

  div.append(p);
};

module.exports = {
  waitFor,
  printMessage,
};
