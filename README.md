# Base Apparel coming soon page solution

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
- The `input` field is empty
- The email address is not formatted correctly

### Links

[VIEW DEMO](https://miron-silviu.github.io/base-appeal/)

### Screenshot

[mobile-design](image.png)
[Lighthouse](image-1.png)

## My process

Starting the project by create index.html, styl.css and add normalizie.css files.
Inside index.html added html elements . Crate links for style and normalize.css.
Using mobile first approach.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

## What I learned

I learned Regular Expression and I used it to validate email format .

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  .button_send_email {
    position: relative;
    right: 3.1rem;
    padding: 1.2rem;
    height: 44px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    background: var(--gradient-from-light-pink-to-orange);
    border: 1px var(--Desaturated-Red);
    color: var(--gradient-from-light-pink-to-orange);
    box-shadow: 0 3px 5px var(--Desaturated-Red);
  }
}
```

```js
const proudOfThisFunc = () => {
  // Function to validate email format using a regular expression

  function isEmailValid(input) {
    const emailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPatern.test(input);
  }

  // Function to check if the email is invalid

  function isemailInvalid(input) {
    return !isEmailValid(input);
  }
};
```

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [Silviu Miron](https://www.frontendmentor.io/home)
- Twitter - [Silviu Miron](https://x.com/silviuumiron)
