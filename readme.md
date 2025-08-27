1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:=> 
* getElementById -- We can hold a unique ID which is we set in HTML file And we can getting a one Element only.

* getElementsByClassName -- We can hold a different element, which is setup one class name in different element.

* querySelector/ querySelectorAll -- We can use CSS selector using by querySelector.



2. How do you create and insert a new element into the DOM?

Ans:=> 
(i)   createElement()-create a new element.
(ii)  setAttribute()-set any needed attributes, such as ID's or classes.
(iii) createTextNode()-create any needed content.
(iv)  appendChild()-attach the new text node to the element.


3. What is Event Bubbling and how does it work?

Ans:=> Event bubbling is the default DOM event propagation method where an event triggered on a child element "bubbles up" the DOM tree, triggering event listeners on its ancestor elements until it reaches the root.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans:=> Event Delegation is very important in js. We can't handle any events without Event Delegation, like- addEventListener().
Why Useful-
i.   It's can do better performance
ii.  Developer can handle a dynamic elements by using event delegation.
iii. Code to doing easier.


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:=> preventDefault() method is- we can turn off the default action method. Example- In form section when we browse it, it load automatically, and we can stop it by using preventDefault().

stopPropagation() is- This method stops event bubbling/propagation.
This means the event will no longer go to the parent element above.