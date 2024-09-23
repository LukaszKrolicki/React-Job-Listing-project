# Tailwind setup

Follow steps from this link:

{% embed url="https://tailwindcss.com/docs/installation" %}

<figure><img src="../.gitbook/assets/image (16).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>

this will create this file:

<figure><img src="../.gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure>

change the insights:

<figure><img src="../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure>

Add those to index.css

<figure><img src="../.gitbook/assets/image (20).png" alt=""><figcaption></figcaption></figure>

Bug with Tailwind:

So I encountered a bug with Tailwind implementation.

1. postcss.config.js -> rename to .cjs Should look like this:

&#x20;module.exports = { plugins: { tailwindcss: { content: \['./index.html', './src/\*\*/\*.{js,ts,jsx,tsx}'] }, }, }
