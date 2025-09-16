'use strict';

/**
 * Waits for a specific DOM event to occur on an element
 *
 * @param {HTMLElement} element - DOM element to listen on
 * @param {string} eventName - name of the event to wait for
 * @returns {Promise<string>} - Promise that resolves with a message
 *  when the event occurs.
 */
export function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const eventHandler = () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    element.addEventListener(eventName, eventHandler, { once: true });
  });
}

/**
 * Adds a message to the DOM.
 * @param {string} message The message text to display.
 */
export function printMessage(message) {
  const container = document.getElementById('notification') ?? document.body;
  const messageDiv = document.createElement('div');

  messageDiv.setAttribute('data-qa', 'notification');
  messageDiv.className = 'message';
  messageDiv.textContent = message;
  container.appendChild(messageDiv);
}
