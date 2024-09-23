# Hooks

**Hooks** in React are special functions that let you "hook into" React features (like state, lifecycle methods, and context) from **functional components**.

#### **What Are Hooks?**

Hooks are just JavaScript functions that follow specific rules. The most common hooks are used for:

* **State management** (`useState`).
* **Handling side effects** like fetching data or manipulating the DOM (`useEffect`).
* **Reusing logic** (like `useContext`, `useReducer`, and custom hooks).

Hooks always start with the word "use," and you can only use them inside functional components.

#### 2. **Types of Hooks**

React provides a number of built-in hooks, but they can be grouped into two main categories:

**A. Basic Hooks**

1. **`useState`** – For managing state in a functional component.
2. **`useEffect`** – For handling side effects like API calls, DOM manipulations, etc.
3. **`useContext`** – For consuming values from React’s Context API (global-like state).

**B. Additional Hooks**

4. **`useReducer`** – For managing more complex state logic (alternative to `useState`).
5. **`useRef`** – For accessing and interacting with DOM elements or storing mutable values.
6. **`useMemo`** – For optimizing performance by memoizing expensive calculations.
7. **`useCallback`** – For memoizing functions, preventing them from being recreated on every render.
8. **`useLayoutEffect`** – Similar to `useEffect`, but it fires synchronously after all DOM mutations.
9. **`useImperativeHandle`** – For controlling component refs and exposing imperative methods to parent components.
10. **`useDebugValue`** – For displaying custom labels in React DevTools for custom hooks.
