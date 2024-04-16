### CSS Foundations

- [Understanding different types of selectors](https://www.theodinproject.com/lessons/foundations-intro-to-css#selectors) - Pay special attention to Descendant combinator, and Chaining selector.

- [Understading Specificity](https://www.theodinproject.com/lessons/foundations-the-cascade#the-cascade-of-css). When there is no declaration with a selector of higher specificity, a rule with a greater number of selectors of the same type will take precedence over another rule with fewer selectors of the same type. See [CG's examples](https://chat.openai.com/c/c1e292f1-91cd-4941-b2f7-a0462a9eba35) for more clarification. An ID selector will always beat any number of class selectors, a class selector will always beat any number of type selectors, and a type selector will always beat any number of less specific selectors. When there is no declaration with a selector of higher specificity, a rule with a greater number of selectors of the same type will take precedence over another rule with fewer selectors of the same type.

- Here both rule 1 and rule 2 have the same specificity. Rule 1 uses a chaining selector (no space) and rule 2 uses a descendant combinator (the empty space). But both rules have two classes and the combinator symbol itself does not add to the specificity. Note that `.class.second-class` targets elements that have both classes "class" and "second-class". It's targeting elements with a specific combination of classes, where both classes must be present on the same element. On the other hand, `.class .second-class` targets elements with the class "second-class" that are descendants of elements with the class "class". It's not as specific as Rule 1 because it only requires that the "second-class" is a descendant of an element with the "class" class
```
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class .second-class {
  font-size: 24px;
}
```

- The `>` symbol in CSS represents the direct child selector. In the below e.g., in Rule #2, it selects elements with the "second-class" class that are immediate children of elements with the "class" class. Here also, even though rule 2 is using a child combinator (>), this does not change the specificity value. Both rules still have two classes so they have the same specificity values.

```
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class > .second-class {
  font-size: 24px;
}

```

- Inheritance.

- The [06-cascade-fix](https://github.com/vishpant76/css-exercises/tree/main/foundations/06-cascade-fix) exercise is a good one to understand the quirks of specificity.

- 
