'use strict';

const initMessagesContainer = () => {
  let container;

  if (!document.getElementById('messages')) {
    container = document.createElement('div');
    container.id = 'messages';

    const styles = {
      position: 'absolute',
      top: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    };

    for (const property in styles) {
      container.style[property] = styles[property];
    }

    document.body.append(container);
  }
};

initMessagesContainer();

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: \
      ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const notification = `
    <div class="message">
      ${message}
    </div>
  `;

  document.getElementById('messages')
    .insertAdjacentHTML('beforeend', notification);
};

module.exports = {
  waitFor,
  printMessage,
};
