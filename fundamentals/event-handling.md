# Event Handling

<figure><img src="../.gitbook/assets/image (92).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (93).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (94).png" alt=""><figcaption></figcaption></figure>

#### **Basic Event Handling in React**

React events are named using camelCase instead of lowercase (e.g., `onClick` instead of `onclick`), and you pass a function as the event handler, rather than a string.

**Example of Event Handling:**

```jsx
const Button = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return <button onClick={handleClick}>Click me</button>;
};
```

In this example:

* The event `onClick` is used to handle the button click.
* `handleClick` is the event handler function that is triggered when the button is clicked.

#### 2. **Common Event Types**

React supports most of the DOM event types, including:

* **Mouse Events**: `onClick`, `onDoubleClick`, `onMouseEnter`, `onMouseLeave`, etc.
* **Keyboard Events**: `onKeyDown`, `onKeyUp`, `onKeyPress`.
* **Form Events**: `onChange`, `onSubmit`, `onFocus`, `onBlur`.
* **Input Events**: `onInput`, `onChange`.
* **Other Events**: `onScroll`, `onLoad`, `onError`, etc.

#### 3. **Passing Parameters to Event Handlers**

To pass arguments to an event handler, you can wrap the event handler function in another function.

**Example of Passing Parameters:**

```jsx
const Button = ({ value }) => {
    const handleClick = (message) => {
        alert(message);
    };

    return (
        <button onClick={() => handleClick(`Button clicked with value: ${value}`)}>
            Click me
        </button>
    );
};
```

In this example:

* The `handleClick` function takes a `message` argument, and we use an arrow function to pass the `value` as a parameter when the button is clicked.

#### 4. **Event Object (SyntheticEvent)**

In React, event handlers receive a **SyntheticEvent** object, which is a cross-browser wrapper around the native event object. You can access properties like `target`, `type`, `preventDefault()`, etc., just like with regular DOM events.

**Example:**

```jsx
const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission
        console.log('Form submitted!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
};
```

In this example:

* `event.preventDefault()` is used to prevent the form’s default behavior (which is to refresh the page).
* The event object is automatically passed as the first argument to the event handler.

#### 5. **Handling Input Changes**

Handling input fields in forms is a common task. You can use the `onChange` event to update the state whenever the user types in an input field.

**Example of Handling Input:**

```jsx
const TextInput = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value); // Updates the state with the input value
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>You typed: {value}</p>
        </div>
    );
};
```

In this example:

* The `onChange` event is triggered whenever the user types something.
* The `handleChange` function updates the state with the value from the input field (`event.target.value`).
