# NavLink, Active Links

<figure><img src="../.gitbook/assets/image (60).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (61).png" alt=""><figcaption></figcaption></figure>

This is a example of active Link

Result:

<figure><img src="../.gitbook/assets/image (62).png" alt=""><figcaption></figcaption></figure>

How NavLink works

* The `NavLink` component from `react-router-dom` calls the `linkClass` function with an object containing the `isActive` property.
* Based on the current route, `isActive` will be `true` for the link that matches the current URL, and `false` for the others.
