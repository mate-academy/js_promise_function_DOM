/* eslint-disable max-len */
'use strict';

// Функція, яка повертає проміс, який спрацьовує при певній події на елементі
function waitFor(element, eventName) {
  // створюємо новий проміс
  return new Promise((resolve) => {
    // функція-обробник події
    const handler = (ev) => {
      // якщо подія contextmenu
      if (eventName === 'contextmenu') {
        ev.preventDefault(); // забороняємо стандартне меню браузера
      }

      // Проміс спрацьовує лише один раз завдяки { once: true }
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    // Додаємо слухача події на елемент
    // Опція { once: true } автоматично видаляє слухача після першого виклику
    element.addEventListener(eventName, handler, { once: true });
  });
}

// function waitFor(element, eventName) {
//   return new Promise((resolve) => {
//     const handler = (ev) => {
//       if (eventName === 'contextmenu') {
//         ev.preventDefault();
//       }

//       // або ev.target === element, якщо дочірні не враховуємо
//       if (ev.currentTarget === element) {
//         resolve(
//           `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
//         );
//         element.removeEventListener(eventName, handler);
//       }
//     };

//     element.addEventListener(eventName, handler);
//   });
// }

// Функція, яка додає повідомлення в DOM
function printMessage(message) {
  const div = document.createElement('div'); // створюємо новий <div>

  div.className = 'message'; // задаємо клас для стилів
  div.textContent = message; // вставляємо текст повідомлення
  document.body.appendChild(div); // додаємо <div> в кінець body
}

// робимо функції доступними для тестів
window.waitFor = waitFor;
window.printMessage = printMessage;

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);
