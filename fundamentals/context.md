# Context

<figure><img src="../.gitbook/assets/image (134).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (135).png" alt=""><figcaption></figcaption></figure>

**ontext** is a feature used to share global data (like themes, user data, settings) across the entire component tree without needing to pass props down manually at every level. It's useful when certain data needs to be accessible by many components without prop-drilling (passing props down through multiple layers of nested components).

#### How it works:

**1. Creating Context:**

You create a context using `React.createContext`. This context holds the shared data.

```jsx
MyContext = React.createContext(defaultValue);
```

**2. Providing Context:**

At the top of your component tree, you wrap your components with a `Context.Provider`. The provider allows you to specify the value that will be accessible to all its children.

```jsx
<MyContext.Provider value={someValue}>
  <YourComponent />
</MyContext.Provider>
```

**3. Consuming Context:**

You can consume or access the context values in two ways:

*   **Using `useContext` hook** (most common in functional components):

    ```jsx
    const value = useContext(MyContext);
    ```
*   **Using the `Context.Consumer` component** (works in both class and functional components):

    ```jsx
    <MyContext.Consumer>
      {value => /* Render something based on the context value */}
    </MyContext.Consumer>
    ```

#### When to use Context:

* When you have **global** data that many components need access to, and you want to avoid prop-drilling.
* Common use cases:
  * Theme settings (light/dark mode)
  * User authentication data (current user, permissions)
  * Language/localization settings
