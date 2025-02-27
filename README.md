# Promise function
Create a function `waitFor` that takes a DOM `element` and a string `eventName`, such as `click`, `contextmenu` or `blur`.
The function returns a `Promise` that should be **resolved** when `eventName` happened on the `element` with a message
`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`
(For example: `It was click on the element: INPUT, id: login.`)

Also create a function `printMessage` that takes a string `message` and adds `<div class="message">` with the `message` to the DOM

For your convenience we added several inputs and buttons on the page and used `waitFor` and `printMessage` in the `callPromise.js` 
so you can click and type to check if your code works as expected (you should see messages for `click`, `input` and `blur` events).

[DEMO LINK](https://vkrasnovyd.github.io/js_promise_function_DOM/)
