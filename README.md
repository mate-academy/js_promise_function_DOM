1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://<your_account>.github.io/js_promise_function_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Promise function

To complete this task, you should create a function that returns a `Promise`.
Create function `waitFor` which takes two parameters:
- `element` - DOM element;
- `eventName`, such as `click`, `input` and `blur`.

The function returns a Promise which should be resolved when `eventName` happened on `element`.
Function should print the message with text: `It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`
For example: `It was click on the element: INPUT, id: login.`

Hint: You have to use <div> elements with class `message` to notify users about resolved or rejected promises. 
Hint: For convenience, several inputs and buttons have been added to the DOM. Use them for testing your function.
