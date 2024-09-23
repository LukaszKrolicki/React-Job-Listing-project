# Portals

<figure><img src="../.gitbook/assets/image (136).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (137).png" alt=""><figcaption></figcaption></figure>

In React, **Portals** provide a way to render a component's content outside of its parent DOM hierarchy. Essentially, a portal allows you to "teleport" your component (or some part of it) to a different place in the DOM, while still maintaining the same React component tree and event handling.

#### Why use Portals?

Portals are particularly useful when you want to:

* Render elements that should visually break out of their parent container (e.g., modals, tooltips, dropdown menus).
* Avoid issues with overflow or z-index in deeply nested components.

#### How Portals Work:

When a component is rendered inside a portal, it appears in a different part of the DOM than where it’s declared, but it behaves as if it were in its original location in terms of React's event handling.
