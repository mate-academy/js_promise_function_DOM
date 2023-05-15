"use strict";

function waitFor(element, eventName) {
  const resolver = (resolve) => {
    element.addEventListener(eventName, () => {
      const message =
        `It was ${eventName}` +
        ` on the element: ${element.nodeName}, id: ${element.id}.` +
        ` (For example: It was click on the element: INPUT, id: login.`;

      printMessage(message);
      resolve();
    });
  };

  return new Promise(resolver);
}

const printMessage = (message) => {
  const messageContainer = document.createElement("div");

  messageContainer.className = "message";
  messageContainer.innerText = message;
  document.body.append(messageContainer);
};

module.exports = {
  waitFor,
  printMessage,
};
