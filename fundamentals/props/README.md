# Props

**Props** are used to pass data from one component to another, typically from a parent component to a child. Props are immutable, meaning they cannot be changed once passed to a component.

**How Props Work:**

Props are passed to components similarly to how arguments are passed to functions.

**Example**:

```jsx
const Greeting = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};

const App = () => {
    return <Greeting name="Alice" />;
};
```

In this example, the `Greeting` component receives a prop called `name`, and it renders a personalized greeting.

**Props as an Object:**

Props in functional components are an object where each key corresponds to a prop name and the value to the data being passed.

```jsx
const Greeting = (props) => {
    console.log(props); // { name: "Alice" }
    return <h1>Hello, {props.name}!</h1>;
};
```

<figure><img src="../../.gitbook/assets/image (84).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (85).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (86).png" alt=""><figcaption></figcaption></figure>
