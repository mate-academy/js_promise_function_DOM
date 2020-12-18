1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://AndrewKreshchenko.github.io/js_promise_function_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - There are no tests for this task so use `npm run lint` command instead of `npm test`

### Task: Promise function

To complete this task, you should create a function that returns a `Promise`.
Create function `waitFor` which takes two parameters:
- `element` - DOM element
- `eventName`

The function returns a Promise which should be resolved when `eventName` happened on `element`.

Hint: It doesn't matter in what way you choose to notify users about resolved or rejected promises. You can use DOM or `console.log`.
Hint: For convenience, several inputs and buttons have been added to the DOM. Use them for testing your function.
