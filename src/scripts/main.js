'use strict';

const section = document.createElement('div');

section.style.position = 'absolute';
section.style.left = '10px';
section.style.top = '10px';
section.style.display = 'flex';
section.style.flexDirection = 'column';
section.style.gap = '10px';

document.body.append(section);

function waitFor(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName}
        on the element: ${element.nodeName}, id: ${element.id}`);
    });
  });
}

const printMessage = (message) => {
  const div = `
    <div class="message">
      ${message}
    </div>
  `;

  section.insertAdjacentHTML('beforeend', div);
};

module.exports = {
  waitFor,
  printMessage,
};
