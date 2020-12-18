'use strict';

function detectCtrl(e) {
  const evt = window.event ? event : e; // IE browser

  return evt.ctrlKey;
}

function detectPaste(e) {
  const evt = window.event ? event : e;

  return evt.keyCode === 86;
}

function isFieldEmpty(field) {
  return !field.length;
}

function validate(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  let key;

  for (key in data) {
    if (isFieldEmpty(data[key])) {
      return false;
    }
  }

  return true;
}

function waitFor(element, eventName, eventRepeats) {
  const resolver = (resolve, reject) => {
    element.addEventListener(eventName, (e) => {
      let canResolve = false;
      let msgPromise = `'${eventName}'`;

      switch (true) {
        case element.tagName === 'FORM' && eventName === 'submit':
          e.preventDefault();
          canResolve = validate(element);
          break;
        case element.tagName === 'INPUT' && eventName === 'keydown':
          canResolve = eventRepeats ? detectPaste(e) : detectCtrl(e);
          break;
        default:
          msgPromise = ` on '${element.tagName.toLowerCase()}`
          + `[name="${element.name}"]'`;

          canResolve = !isFieldEmpty(element.value);
      }

      if (canResolve) {
        resolve({
          msg: 'Promise was resolved in ' + msgPromise, ev: eventName,
        });
      } else {
        reject({
          msg: 'Promise was rejected in ' + msgPromise, ev: eventName,
        });
      }
    });
  };

  return new Promise(resolver);
}

document.addEventListener('DOMContentLoaded', () => {
  const msgBlock = document.createElement('div');

  msgBlock.style.cssText = 'position: fixed; top: 10px;'
  + 'right: 10px; text-align: right;';
  document.body.append(msgBlock);

  const showMessage = (msg, isResolved) => {
    const msgElem = document.createElement('p');
    const color = typeof isResolved === 'boolean'
      ? (isResolved ? 'rgb(80, 115, 0)' : 'rgb(235, 0, 70)')
      : 'rgb(0, 146, 200)';

    msgElem.style.color = color;
    msgElem.innerHTML = msg;

    msgBlock.append(msgElem);
  };

  const form = document.querySelector('form');
  const blurLogin = waitFor(form.querySelector('#login'), 'blur');

  // Detect user do Ctrl+V to paste a password
  // Will work if user press Ctrl+V for the first time
  const passwElem = form.querySelector('#password');
  const keyDownPassw = waitFor(passwElem, 'keydown');
  const submitForm = waitFor(form, 'submit');

  blurLogin
    .then(resolve => {
      showMessage(resolve.msg, true);
    })
    .catch(error => {
      showMessage(error.msg, false);
    });

  keyDownPassw
    .then(() => {
      return waitFor(passwElem, 'keydown', true);
    })
    .then(() => {
      showMessage('Hmm. Maybe a password was reserved '
        + 'in order not to remember it &#x1F600');
    })
    .catch(error => {
      showMessage(error.msg, false);
    });

  submitForm
    .then(resolve => {
      showMessage(resolve.msg, true);
    })
    .catch(error => {
      showMessage(error.msg, false);
    });
});
