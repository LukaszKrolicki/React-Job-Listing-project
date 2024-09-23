# State vs props

#### **State vs Props**

* **State** is local to the component, meaning it can only be changed and managed within that component.
* **Props** are external and passed from parent components. Props are immutable inside the child component and cannot be changed directly within it.

| State                        | Props                                |
| ---------------------------- | ------------------------------------ |
| Managed inside the component | Passed from parent to child          |
| Can be updated               | Immutable                            |
| Used to store dynamic data   | Used to pass data and event handlers |
