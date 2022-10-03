'use strict';

function waitFor(element, eventName) {
  const result = new Promise((resolve, reject) => {
    element.addEventListener(eventName, (evt) => {
      evt.preventDefault();
      resolve(`
        It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}
      `);
    });
  });

  result.then(() => {
    document.getElementsByClassName('message')[0].remove();
  });

  return result;
};

const printMessage = (message) => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="message">
      ${message}
    </div>
  `);
};

module.exports = {
  waitFor,
  printMessage,
};
