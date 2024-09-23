# top 3 hooks

<figure><img src="../../.gitbook/assets/image (129).png" alt=""><figcaption></figcaption></figure>

#### **`useState`**

* **Purpose:**
  * It lets you create state variables in functional components. A state variable stores data that may change over time, like user inputs or UI changes (e.g., toggling a modal, tracking input text).
*   **Syntax:**

    ```jsx
    jsxSkopiuj kodconst [state, setState] = useState(initialValue);
    ```

    * `state` is the current value.
    * `setState` is the function to update that value.
    * `initialValue` is the starting value.
* **When to use:**
  * When you need to track and update dynamic data in a component (e.g., form inputs, toggles, counters).
*   **Example:**

    ```jsx
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
    ```

#### **`useEffect`**

* **Purpose:**
  * It lets you perform side effects in function components, like fetching data, setting up event listeners, or interacting with the DOM (e.g., updating the page title).
  * By default, `useEffect` runs after every render, but it can be controlled to run only under certain conditions.
*   **Syntax:**

    ```jsx
    useEffect(() => {
      // Code to run (side effect)
    }, [dependencies]);
    ```

    * If you pass an empty array (`[]`), it runs only once (like `componentDidMount`).
    * If you include variables in the array, it runs whenever those variables change.
* **When to use:**
  * When you need to run code after the component renders or updates (e.g., fetching data, setting up timers, or subscriptions).
*   **Example:**

    ```jsx
    useEffect(() => {
      console.log("Component rendered or count changed!");
    }, [count]);  // Runs whenever 'count' changes
    ```

<figure><img src="../../.gitbook/assets/image (131).png" alt=""><figcaption></figcaption></figure>

#### **`useRef`**

* **Purpose:**
  * It provides a way to reference DOM elements or persist values across renders without causing re-renders. It does **not** trigger a re-render when its value changes.
*   **Syntax:**

    ```jsx
    jsxSkopiuj kodconst ref = useRef(initialValue);
    ```

    * `ref.current` holds the value you want to persist or access.
* **When to use:**
  * When you need to directly interact with DOM elements (e.g., focusing an input field) or store mutable values that don’t require re-rendering (e.g., previous state, timers).
*   **Example:**

    ```jsx
    jsxSkopiuj kodconst inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus(); // Focus the input field on render
    }, []);

    return <input ref={inputRef} />;
    ```

#### Summary of When to Use:

* **`useState`**: When you need to store and update state (dynamic data) in a component.
* **`useEffect`**: When you need to perform side effects after rendering or when dependencies change (e.g., fetching data, subscriptions, timers).
* **`useRef`**: When you need to reference DOM elements or store mutable values without triggering a re-render (e.g., timers, previous values).

<figure><img src="../../.gitbook/assets/image (132).png" alt=""><figcaption></figcaption></figure>
