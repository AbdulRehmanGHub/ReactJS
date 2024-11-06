## Scope of CSS in React

<p> Once we used CSS with any of our React Component, it will apply to all the components. <br>
<b>For example -- </b> If we use a className: "card" in Card component and apply some styling in CSS file and link it with Card component. We know the styling will apply and will be shown to us. Which is good. <br>
<b>Problem -- </b>But the problem will arise when we create some other components and used the same className "card" on these components, then all the components with same className will take styling from CSS file "card" property. And yes, without importing CSS, the styling is applying on components.<br>
Even the styling will now apply on the other files of this project having className "card". Like I'm creating a simple h3 in my index.html file with class "card". So, same styling will apply there also. Let's check.
</p>
<br>
<p>
<b>Solution</b><br>
We have to rename the name of the our CSS file from "Card" to "Card.module.css". <br>
And use the styling as props. <br>
It is recommended to use the classes/id in camelCase format. Like displayCard, topText etc. However if class/id is like top-text, or dispaly-card then we cannot use it with dot(.), use it with style['display-card'], name[top-text]. <br>
However, we are not going to use 2 classes/id on same element. But if this is the case we want to select both classes of same elem, or ids. We should write it in array form and array elements and then join it. Like:<br>

```javascript
className={[styles.card, styles.smallCard, styles.btn].join(' ')}
```
</p>
