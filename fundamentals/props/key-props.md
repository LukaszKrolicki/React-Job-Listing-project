# Key props

A key is unique string or a number to identify component

<figure><img src="../../.gitbook/assets/image (87).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (88).png" alt=""><figcaption></figcaption></figure>

**Key** is a special prop that React uses to identify which items have changed, been added, or removed when rendering lists. It helps React optimize the rendering process by knowing exactly which elements need updates.

**Why is `key` important?**

When rendering a list of elements, React needs a way to track each element so it can apply minimal updates to the DOM. If you don’t provide a `key`, React will use the index by default, which can lead to inefficient updates.

#### Props vs. Key Prop:

* **Props** are the general properties that pass data between components.
* **Key** is a specific prop that helps React manage dynamic lists efficiently.

**Example with Both Props and Key:**

```jsx
const Item = ({ name }) => <li>{name}</li>;

const ItemList = () => {
    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' }
    ];

    return (
        <ul>
            {items.map((item) => (
                <Item key={item.id} name={item.name} />
            ))}
        </ul>
    );
};
```
