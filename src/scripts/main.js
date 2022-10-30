'use strict';

function waitFor(element, eventName) {
// write your code here
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      const result = `It was ${eventName} on the element: ${
        element.nodeName}, id: ${element.id}.`;

      resolve(result);
    });
});
}

const printMessage = (message) => {
// write your code here
  const div = document.createElement('div');

  div.className = 'message';

  div.innerText = message;

  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
