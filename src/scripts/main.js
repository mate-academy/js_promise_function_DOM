'use strict';

function waitFor(element, eventName) {
return new Promise((resolve) => {
  element.addEventListener(eventName, (eventClick) => {
    if (eventClick.target === element) {
      resolve(`Это было ${eventName}`
      + ` в элементе: ${element.nodeName}, id: ${element.id}.`);
    }
  });
});
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.innerHTML = message;
  document.body.append(div);
};

module.exports = {
  waitFor,
  printMessage,
};
