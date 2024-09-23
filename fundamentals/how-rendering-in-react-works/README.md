# How rendering in react works

<figure><img src="../../.gitbook/assets/image (89).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (91).png" alt=""><figcaption></figcaption></figure>

#### **JSX to Virtual DOM**:

When you write JSX (JavaScript XML) in a React component, it gets transformed into JavaScript objects known as the **Virtual DOM**. The Virtual DOM is a lightweight in-memory representation of the real DOM elements.

**Example JSX**:

```jsx
const App = () => {
    return (
        <div>
            <h1>Hello, React!</h1>
        </div>
    );
};
```

**Transformed into Virtual DOM**: This JSX gets compiled into something like:

```js
React.createElement('div', null, 
    React.createElement('h1', null, 'Hello, React!')
);
```

#### 2. **Virtual DOM and Real DOM**:

* The **Virtual DOM** allows React to keep track of changes in a more efficient way. Instead of directly manipulating the real DOM, which is slow, React first makes changes to the Virtual DOM.
* React then compares the Virtual DOM with a snapshot of the previous Virtual DOM using a process called **diffing**.
* After the comparison, React updates only the parts of the real DOM that have changed, reducing the number of manipulations and making rendering more efficient.

#### 3. **Initial Render**:

When a React application starts, the following happens:

* Your root component (like `<App />`) is rendered to the real DOM using the `ReactDOM.render()` method.

```jsx
ReactDOM.render(<App />, document.getElementById('root'));
```

This initial render converts the Virtual DOM into actual DOM elements that are displayed in the browser.

#### 4. **Updates and Re-rendering**:

React re-renders a component whenever there is a change in **state** or **props**. When this happens:

* React updates the Virtual DOM with the new state or props.
* It compares the updated Virtual DOM with the previous version (diffing).
* Only the changed parts (nodes) of the real DOM are updated.

**Example:**

```jsx
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
```

* When the button is clicked, the `count` state changes.
* React updates the Virtual DOM with the new count value.
* React compares the old Virtual DOM (with `count` = 0) to the new one (with `count` = 1).
* Only the `<h1>` element with the count is updated in the real DOM (not the entire component).

#### 5. **Reconciliation Process**:

React’s **reconciliation** process determines the most efficient way to update the UI:

1. **Diffing Algorithm**: React compares the Virtual DOM before and after the update. If elements have changed (e.g., different text, new elements added), React marks those changes.
2. **Batching Updates**: React batches multiple updates into a single re-render to avoid unnecessary rendering.
3. **Key Prop in Lists**: When rendering lists, React uses the `key` prop to keep track of individual list items. If the list changes (like adding or removing items), React uses the keys to know exactly which items have changed and need updating.
