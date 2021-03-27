'use strict';

let countOfMessages = 0;

function waitFor(element, eventName) {
  return new Promise(() => {
    element.addEventListener(eventName, () => {
      printMessage(
        `It was ${eventName}
        on the element: ${element.tagName},
        id: ${element.id}`
      );
    }
    );
  });
}

const printMessage = (message) => {
  const textElement = document.createElement('div');

  textElement.className = 'message';
  textElement.innerText = message;
  textElement.style.top = 10 + countOfMessages * 100 + 'px';
  countOfMessages++;
  document.body.append(textElement);
};

module.exports = {
  waitFor,
  printMessage,
};
