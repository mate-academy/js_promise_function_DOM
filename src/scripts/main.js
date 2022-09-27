'use strict';

function waitFor(element, eventName) {
  const result = new Promise((resolve, reject) => {
    element.addEventListener(eventName, (evt) => {
      if (evt.target === element) {
        resolve(`
        It was ${eventName} on the element:
        ${element.nodeName}, id: ${element.id}
        `);
        console.log(result);
      }
    });
  });

  return result;
}

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
