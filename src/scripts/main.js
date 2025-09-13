'use strict';

function waitFor(element, eventName) {
  if (!element || typeof element.addEventListener !== 'function') {
    throw new TypeError('waitFor: first argument must be a DOM element');
  }

  return new Promise((resolve) => {
    element.addEventListener(
      eventName,
      () => {
        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      },
      { once: true },
    );
  });
}

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;

  if (document.body) {
    document.body.append(div);
  }
};

// Глобальна видимість для старих скриптів
window.waitFor = waitFor;
window.printMessage = printMessage;

// ESM експорт для сучасних тестів
export { waitFor, printMessage };

// Демонстраційні виклики — тільки якщо елементи існують
document.addEventListener('DOMContentLoaded', () => {
  const loginField = document.getElementById('login');
  const passwordField = document.getElementById('password');
  const button = document.getElementById('submit');

  if (loginField) {
    waitFor(loginField, 'click').then(printMessage);
    waitFor(loginField, 'input').then(printMessage);
    waitFor(loginField, 'blur').then(printMessage);
  }

  if (passwordField) {
    waitFor(passwordField, 'click').then(printMessage);
    waitFor(passwordField, 'input').then(printMessage);
    waitFor(passwordField, 'blur').then(printMessage);
  }

  if (button) {
    waitFor(button, 'click').then(printMessage);
    waitFor(button, 'blur').then(printMessage);
  }
});
