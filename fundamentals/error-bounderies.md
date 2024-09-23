# Error bounderies

In React, an **Error Boundary** is a special component that catches JavaScript errors in its child component tree, logs those errors, and displays a fallback UI instead of crashing the entire application. It’s a way to **gracefully handle errors** in React components without completely breaking the app.

#### Why Use Error Boundaries?

Errors in React components can cause the entire component tree to unmount, resulting in a blank screen. By using error boundaries, you can catch those errors, show a fallback UI (like an error message), and keep the rest of the app running smoothly.

#### How Error Boundaries Work:

* Error boundaries **only catch errors** in the rendering phase (including lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc.) and not in event handlers, asynchronous code (like `setTimeout`), or errors outside the React component tree.

<figure><img src="../.gitbook/assets/image (138).png" alt=""><figcaption></figcaption></figure>
