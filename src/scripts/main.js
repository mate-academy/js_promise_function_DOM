'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    const myEvent = () => {
      element.removeEventListener(eventName, myEvent);

      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    };

    element.addEventListener(eventName, myEvent);

    // console.log(myEvent());
  });
}

// console.log(waitFor());

const printMessage = (message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.append(div);
};

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

// It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.



// =================================== Debaging =====================================

// Чудово! 🎉 Тепер про дебаг асинхронного коду.
// Найпростіші способи які ти вже можеш використовувати:
// 1. console.log у кожній точці ланцюжка:

waitFor(loginField, 'click')
  .then((message) => {
    console.log('Promise вирішився, отримав:', message);
    return message;
  })
  .then(printMessage)
  .catch((error) => {
    console.log('Щось пішло не так:', error);
  });

// 2. console.log всередині самої функції:

const myEvent = () => {
  console.log('Подія спрацювала!'); // ← чи взагалі заходимо сюди?
  element.removeEventListener(eventName, myEvent);
  console.log('Слухач видалено'); // ← чи видалився?
  resolve(`It was...`);
  console.log('resolve викликано'); // ← чи дійшли до resolve?
};

// 3. Вкладка Sources у DevTools — найпотужніший інструмент:

// 1.Відкрий DevTools → вкладка Sources
// 2.Знайди свій файл
// 3.Клікни на номер рядка → з'явиться синя крапка — це breakpoint
// 4.Тепер коли код дійде до цього рядка — він зупиниться і
// ти можеш дивитись значення всіх змінних у цей момент

// Це працює однаково і для синхронного і для асинхронного коду! 😊
