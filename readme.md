### Lecture 1 Namaste React Live Course

- Today is my first day and it was full of fun enjoy. So, today i learn first what is react and why we need it ?
- First he told us React is a frontend JavaScript library it was based on component architecture. It was mostly used to build single page web application .
- Then secondly we use React CDN in our project to make our react code work when we go to react CDN their are two option one was development based and second one was production based. Then he told us that production based CDN is minified and optimised vice-versa for development based.
- Then i learn about how can i create element using React :

```
const heading = React.createElement(
    "h1",
    {id:"title"},
    "Namaste React"
)
```

- so after creating an heading `h1` i want to put it inside my div with id="root"
- for that the code was

```
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
```

- If something was already present in div with id root when react render it will override all the code.

### Thanks
