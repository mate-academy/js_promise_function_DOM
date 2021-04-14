'use strict';

function getMessageBox() {
  let messageBox = document.querySelector('.messages');

  if (!messageBox) {
    document.body.insertAdjacentHTML('afterbegin',
      `
        <div class='messages'></div>
      `);

    messageBox = document.querySelector('.messages');
  }

  return messageBox;
}

function waitFor(element, eventName) {
  const { nodeName, id } = element;

  return new Promise((resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      resolve(
        `It was ${eventName} on the element: ${nodeName}, id: ${id}.`
      );
    });
  });
}

const printMessage = (message) => {
  getMessageBox().insertAdjacentHTML('afterbegin',
    `<p class='message'>${message}</p>`
  );
};

module.exports = {
  waitFor,
  printMessage,
};
