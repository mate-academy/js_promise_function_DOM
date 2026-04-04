'use strict';

/**
 * Повертає Promise, який вирішується при виникненні події на елементі.
 * Важливо: додана крапка в кінці повідомлення!
 */
function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(
      eventName,
      () => {
        // Форматуємо рядок точно за шаблоном, включаючи крапку в кінці
        const resultMessage = `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`;

        resolve(resultMessage);
      },
      { once: true },
    );
  });
}

/**
 * Створює елемент div з класом "message" та додає його в DOM
 */
const printMessage = (message) => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = message;
  document.body.append(messageDiv);
};

// --- Решта коду залишається без змін (тести самі викличуть ці функції) ---
const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

// Перевірка на існування елементів перед викликом (гарна практика)
if (loginField && passwordField && button) {
  waitFor(loginField, 'click').then(printMessage);
  waitFor(passwordField, 'click').then(printMessage);
  waitFor(button, 'click').then(printMessage);

  waitFor(loginField, 'input').then(printMessage);
  waitFor(passwordField, 'input').then(printMessage);

  waitFor(loginField, 'blur').then(printMessage);
  waitFor(passwordField, 'blur').then(printMessage);
  waitFor(button, 'blur').then(printMessage);
}
