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

- [Box Model](https://www.theodinproject.com/lessons/foundations-the-box-model): Padding, Margin, and Border. Also cheeck out [MDN Docs article](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margins_padding_and_borders) on box model.

![image](https://github.com/vishpant76/odin-project-repo/assets/18080911/a0184861-5d47-4714-9605-a55fae265086)

- [CSS Box Model - Short Video](https://www.youtube.com/watch?v=rIO5326FgPE) - Some important points covered in second half.. Why we need box-sizing:border-box, the collapsing margin phenomenon when the elements are next to each other (the largest margin is considered), etc. Refer the [style.css]() file for the demo. Added one useful comment from a user for reference.

- [box-sizing: border-box (EASY!)](https://www.youtube.com/watch?v=HdZHcFWcAd8) - This is probably the best explanation on border-box. Marking it for reference.

- Block and Inline: [Normal Flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow) - MDN article that explains block vs inline.

- [List of Block and Inline elements](https://www.w3schools.com/html/html_blocks.asp)

- [Inline vs Inline-block](https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block) - explains with a couple of examples.

- [01-margin-and-padding-1]() - This was a good exercise. I missed to think about `margin-left: auto` in .three class. Setting margin-left: auto; will cause the element to be horizontally centered within its containing element. This happens because setting the left margin to auto will push the element as far to the right as possible within its containing element, effectively centering it horizontally. SO no need to do hit and trial with random values. Also understand how padding is working here.

- [02-margin-and-padding-2]() - Slightly more difficult.
    + Failed to understand that padding had to be given in .card to bring that gap between .card and all 3 child divs!
    + Failed to understand the margin-top:0 in the title element. This was done to counter the browser's default margin. Note that this is not the case of collapsing margin in this instance as there is no sibling of .title just above it, and we are talking about margin-top here. Refer [this chat](https://g.co/gemini/share/da0daf393c23) for more details on this. Useful info. Or the [Google docs link](https://docs.google.com/document/d/1swowHTsOS4zwEEkELLOyPmAUuY0l-2HD4kPMckgoq9s/edit?usp=drive_link).
    + Failed to understand how to center the big button in the middle. They key here is this: `margin: 0 auto;`. For full details on why/how this works, refer [this explanation here](https://docs.google.com/document/d/1oOiL6AFunfVLBfFRIHd58fRsnAEn4uc7dGjRisYEFQY/edit).
    + In short, need to redo this challenge again before moving further.

- Leaving the 5th assignment for now in the recipe projects - styling, etc. Come back later.

- [Inline vs Inline-block](https://chat.openai.com/share/200401c8-0a72-4466-ab95-696795a05c5a) in terms of the width, height, and padding.

- [Another good explanation on margin: 0 auto](https://learnlayout.com/margin-auto) - to horizontally center an element within its container.


### Introduction to Flexbox

- [The intro article](https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox#introduction) on TOP provides a good overview of flexbox. Key takeaway: any element can be both a flex container and a flex item. Said another way, you can also put display: flex on a flex item and then use flexbox to arrange [its children](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/05.png).

- 
