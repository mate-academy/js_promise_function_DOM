'use strict';

const div = document.createElement('div');

document.body.append(div);

function waitFor(element, eventName) {
  const promise = new Promise((resolve) => [
    element.addEventListener(eventName, () => {
      resolve(
        `It was ${eventName} on the element:`
        + `${element.nodeName}, id: ${element.id}`
      );
    }),
  ]);

  return promise;
}

const printMessage = (message) => {
  const paragraph = document.createElement('p');

  paragraph.innerHTML = message;
  paragraph.className = 'message';

  div.append(paragraph);
};

module.exports = {
  waitFor,
  printMessage,
};
