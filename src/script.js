function waitFor(element, eventName) {
  return new Promise((resolve) => {
    // eslint-disable-next-line no-shadow
    const handler = (event) => {
      if (event.target === element) {
        element.removeEventListener(eventName, handler);

        resolve(
          `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
        );
      }
    };

    // Check if the event has already happened
    if (
      eventName === 'DOMContentLoaded' &&
      document.readyState === 'complete'
    ) {
      resolve(
        `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`,
      );
    } else {
      element.addEventListener(eventName, handler);
    }
  });
}

function printMessage(message) {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
  const loginInput = document.getElementById('login');
  const passwordInput = document.getElementById('password');
  const submitButton = document.getElementById('submit');

  const elements = [loginInput, passwordInput, submitButton];
  const events = ['click', 'blur'];

  events.forEach((eventName) => {
    // eslint-disable-next-line no-shadow
    document.body.addEventListener(eventName, (event) => {
      if (elements.includes(event.target)) {
        waitFor(event.target, eventName).then(printMessage);
      }
    });
  });
});
