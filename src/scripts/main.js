'use strict';

// Funkcja dodająca wiadomość do DOM
const printMessage = (message) => {
  const div = document.createElement('div');
  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
};

// Funkcja zwracająca Promise, który resolve po wystąpieniu zdarzenia
function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const handler = () => {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`
      );
      element.removeEventListener(eventName, handler);
    };
    element.addEventListener(eventName, handler);
  });
}

// Pobranie elementów
const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

// Wywołania dla wszystkich wymaganych zdarzeń
waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);
