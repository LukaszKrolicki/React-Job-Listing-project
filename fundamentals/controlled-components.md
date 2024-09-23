# Controlled components

<figure><img src="../.gitbook/assets/image (98).png" alt=""><figcaption></figcaption></figure>

C**ontrolled components** refer to form elements (like `<input>`, `<textarea>`, `<select>`) where the component's state completely controls the input element's value. This means the form element’s value is always determined by the React state, and any changes to the input are handled through React's state mechanism.

In a controlled component:

* The form element’s value is bound to a piece of React state.
* The component controls the current value of the form element via its state.
* You can update the state through user input (using an `onChange` event handler).

**Example of a Controlled Input:**

```jsx
import { useState } from 'react';

const ControlledInput = () => {
    const [value, setValue] = useState(''); // React state controls the input's value

    const handleChange = (event) => {
        setValue(event.target.value); // Update state based on input change
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>Input value: {value}</p>
        </div>
    );
};
```
