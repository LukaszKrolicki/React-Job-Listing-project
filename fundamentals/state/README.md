# State

<figure><img src="../../.gitbook/assets/image (95).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (96).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (97).png" alt=""><figcaption></figcaption></figure>

**state** is a built-in object that holds data or information about the component. The state in a component can change over time, and when it does, it triggers a re-render of the component, updating the UI to reflect the new state. React manages state using the `useState` hook in functional components and the `this.setState` method in class components.

#### 1. **State in Functional Components (using `useState` hook)**

The `useState` hook is used to add state to functional components. It returns an array with two elements:

* The current state value.
* A function that allows you to update that state.

**Basic Syntax:**

```jsx
const [state, setState] = useState(initialValue);
```

* `state`: The current state value.
* `setState`: A function to update the state.
* `initialValue`: The initial value for the state (it can be any data type: number, string, object, etc.).

**Example:**

```jsx
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // count is the state, setCount updates it

    const increment = () => {
        setCount(count + 1); // update state
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};
```

* Initially, `count` is set to `0` (the initial state).
* The `increment` function updates the state using `setCount`.
* When the state changes, the component re-renders with the updated count value.
