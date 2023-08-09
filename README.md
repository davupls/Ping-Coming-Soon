# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot






### Links

- Solution URL: [Github](https://github.com/davupls/Ping-Coming-Soon)
- Live Site URL: [Ping - Coming Soon](https://ping-coming-soon-alpha-six.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Mobile-first workflow


### What I learned

```html
<form action="#" id="form" novalidate> 
  <!-- Learn that default browser alert message can be disabled using novalidate -->
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
else if (form.reportValidity()) {
  form.submit();
  emailInput.value = "";
  alertContainer.innerText = "";  
  emailInput.style.border = "2px solid black";
}
// Using reportValidity I can check using the browser email validity checker in a "if condition"
```

### Useful resources

- [ChatGPT](https://chat.openai.com/) - This helped me to quickly find what html attribute, css property, or javascript method I could use.
- [MDN](https://developer.mozilla.org/) - Where I search to find explanation of everything related to html, css or javascript.

## Author

- Website - [David McLean](https://www.davidmlean.dev)
- Frontend Mentor - [@davupls](https://www.frontendmentor.io/profile/davupls)
- Twitter - [@davutech](https://www.twitter.com/davutech)

## Acknowledgments

To "deejayjay" Frontend Mentor discord channel who helped me find the right attribute to disable form default behavior, cheers 🍻.
