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

- [On margins and collapsing margins](https://css-tricks.com/almanac/properties/m/margin/)

- [Another good explanation on margin: 0 auto](https://learnlayout.com/margin-auto) - to horizontally center an element within its container.

- [Mastering margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) - Something to look at later...

- [CSS layout intro and layout flow](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Introduction)

- [Inline vs Inline-block](https://chatgpt.com/c/6854114a-7800-8002-aa6c-0d634694e8d2)

### Introduction to Flexbox

- [The intro article](https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox#introduction) on TOP provides a good overview of flexbox. Key takeaway: any element can be both a flex container and a flex item. Said another way, you can also put display: flex on a flex item and then use flexbox to arrange [its children](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/05.png).

- [Another article on Flexbox](https://internetingishard.netlify.app/html-and-css/flexbox/index.html).

- Flex shorthand: `flex: 1` means flex-grow: 1, flex-shrink: 1, flex-basis: 0.

- flex-shrink is similar to flex-grow, but sets the “shrink factor” of a flex item. flex-shrink only ends up being applied if the size of all flex items is larger than their parent container. For example, if our 3 divs in the first flex demo had a width declaration like: width: 100px, and .flex-container was smaller than 300px, our divs would have to shrink to fit.

- The default shrink factor is flex-shrink: 1, which means all items will shrink evenly. If you do not want an item to shrink then you can specify flex-shrink: 0;. You can also specify higher numbers to make certain items shrink at a higher rate than normal.

- Check out the [Flexbox-2]() css file for some additional important takeaways.

- `flex-basis` sets the initial size of a flex item, so any sort of flex-growing or flex-shrinking starts from that baseline size. The shorthand value defaults to flex-basis: 0%.

- This point is not very clear:
> flex-basis sets the initial size of a flex item, so any sort of flex-growing or flex-shrinking starts from that baseline size. The shorthand value defaults to flex-basis: 0%. The reason we had to change it to auto in the flex-shrink example is that with the basis set to 0, those items would ignore the item’s width, and everything would shrink evenly. Using auto as a flex-basis tells the item to check for a width declaration (width: 250px)

- Note about flex-basis:
> There is a difference between the default value of flex-basis and the way the flex shorthand defines it if no flex-basis is given. The actual default value for flex-basis is auto, but when you specify flex: 1 on an element, it interprets that as flex: 1 1 0. If you want to only adjust an item’s flex-grow you can do so directly, without the shorthand. Or you can be more verbose and use the full 3 value shorthand flex: 1 1 auto, which is also equivalent to using flex: auto.

- What is `flex: auto`?
> flex: auto is one of the shorthands of flex. When auto is defined as a flex keyword it is equivalent to the values of flex-grow: 1, flex-shrink: 1 and flex-basis: auto or to flex: 1 1 auto using the flex shorthand. Note that flex: auto is not the default value when using the flex shorthand despite the name being “auto” which may be slightly confusing at first.

> [!IMPORTANT]
> [A closer look at `flex-basis`](https://chatgpt.com/c/6854323b-0308-8002-8469-49f6890fafd0) - An important discussion that should clear lots of confusion regarding how to use flex-basis.


- In practice you will likely not be using complex values for flex-grow, flex-shrink or flex-basis. Generally, you’re most likely to use declarations like flex: 1; to make divs grow evenly and flex-shrink: 0 to keep certain divs from shrinking.

- [Flexbox made Easy](https://www.youtube.com/watch?v=u044iM9xsWU&t=1s) - A rather detailed video that explains many Flexbox concepts through a demo.

- [Flexbox Growing & Shrinking](https://www.theodinproject.com/lessons/foundations-growing-and-shrinking#introduction) - Adding link to the Odin page where the above flex concepts were covered.

- In the [Flexbox-3](https://github.com/vishpant76/odin-project-repo/tree/main/02-CSS-Foundations-and-Flexbox/flexbox/flexbox-3) CSS demo, we change the flex-direction to column, and the flex items are then stacked vertically. Important note here: **If we had used flex shorthand `flex: 1`, the child divs would have collapsed, even though there is a height defined. Why? It's because `flex: 1` means `flex: 1 1 0` as noted earlier, i.e. the flex shorthand expands flex-basis to 0, which means that all flex-growing and flex-shrinking would begin their calculations from 0. Empty divs by default have 0 height, so for our flex items to fill up the height of their container, they don’t actually need to have any height at all.** This pointed noted in CSS file also. So instead of flex: 1, we use `flex: 1 1 auto;` or `flex: auto`. It's telling the flex items to default to their given height. We could also have fixed it by putting a height on the parent .flex-container, or by using flex-grow: 1 instead of the shorthand. NOTE: We are talking height, not width here because we have changed the flex-direction to column/vertical, so `flex-basis` refers to height instead of width

- The default behavior is `flex-direction: row` which arranges things horizontally. The reason this often works well without changing other details in the CSS is because block-level elements default to the full width of their parent. Changing things to vertical using flex-direction: column adds complexity because block-level elements default to the height of their content, and in this case (Flexbox-3 demo) there is no content (it's just divs we are using for demo).

- [https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/) - Great article that teaches how to develop a mental model of flexbox.

- [Flexbox use cases](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)

- [CSS columns have no effect on a flex container.](https://chat.openai.com/c/3021274c-aaae-4663-8e6e-c64476e2762f)

- [CSS Tricks Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - A handy quick reference on Flexbox.

- [Using auto margins for main axis alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#using_auto_margins_for_main_axis_alignment)


- [Card layout pushing footer down](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox#card_layout_pushing_footer_down) - An interesting use case of using flex in vertical direction, how it's used in conjunction with grid, and its impact on using `flex: 1 1 0` vs `flex: 1 1 auto`. For more insights search [this discussion](https://chatgpt.com/c/6854323b-0308-8002-8469-49f6890fafd0).


- [Flexbox - media objects use case](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox#media_objects) - Also refer to this [important discussion](https://chatgpt.com/c/68554e23-a20c-8002-ab14-e85064ae392e) on why `flex-start: 1` was used, and why we need to set `display: block` for the image element. This goes into an important concept of *Inline elements being aligned based on the text baseline*, which results in an extra bottom whitespace in certain scenarios such as the one discussed here, and how the `block` display solves it.

- [Exercise-01-flex-center](https://github.com/vishpant76/css-exercises/tree/main/flex/01-flex-center) - Center the div. Completed and some self notes added in the file.

- [Exercise-02-flex-header](https://github.com/vishpant76/css-exercises/blob/main/flex/02-flex-header/style.css) - A basic header. This required some more thought. I managed to do it but not with a clean approach. Lessons learnt:
    + There was no need of using separate `.left-links ul` and `.right-links ul`. Since all `ul`'s are essentially having the same properties, we can just create one common `ul` that will be made into flex container with the relevant flex container properties applied to it.
    + `ul` elements have some default margin/padding, so need to reset them to 0.
    + Realizing that there was a need to have nested flexboxes in this exercise. The outer flexbox container was the .header, containing the two `ul`s and the logo `div` in the middle. While each of the two `ul`s were themselves flex containers for their `li` items.
    + Understanding the use of `space-between`.
    + Question: Why do we not use `gap` in the outer flexbox? Why are we using `justify-content: space-between;` in `ul` as even without using it, there is no difference on the page?

- [Exercise 03-flex-header-2](https://github.com/vishpant76/css-exercises/tree/main/flex/03-flex-header-2) - Another header exercise, with further nesting of flexbox. See the comments in the CSS file for the lessons learnt.

- [Exercise 04-flex-information](https://github.com/vishpant76/css-exercises/tree/main/flex/04-flex-information) - This required even more thinking. At least three different ways to solve this:
    + first is the solution.css approach which is very elegant, but I couldn't come up with that. The idea is to not consider the title div as a flex item! So the flex container div is wrapped around the four flower cards. Each flower card is also wrapped around an individual div so that the `max-width` property can be applied to keep them of uniform max size. By keeping only one flex container without any nesting, the CSS is very concise.
    + Second approach is using wrap which is rather complicated that I originally came up with so not going into details. Refer the commented out portions in style.css to experiment if needed in future.
    + The third is also a good one that uses flex-direction column approach. In both second and third, the idea is to first wrap each of the flower cards (the img and the text div) into their individual divs, and then wrap all four divs plus the title div into the container/header div. So in this approach, the main flex container has two items: the title div and the .flowers div. Using `flex-direction: column;` we can stack them up vertically. Also, important is to use `text-align: center;` in the body element, as this ensures that the title moves to center. Although this can also be achieved using `align-items: center` in this approach. Remember that since the direction has been changed to column, the align-items: center will now align horizontally. Now, the .flowers div will also be made a flex container with justify-content: center, so that all 4 flowers are aligned horizontally in a straight line. Add a `gap` in both .header and .flowers flex containers to keep some distance. And finish up with `max-width: 200px` in .flower-type. This ensures that all flower items will get equal width so their text content will get wrapped nicely.

- From Flexbox exercise 04 onwards, will copy all exercises to this repo and do the solutions here itself, to keep the css-exercises repo separate. Continue to refer back to css-exercises for the comments/notes/solutions added until 04 flexbox exercise.

- Key takeaways for [Exercise 04](https://github.com/vishpant76/odin-project-repo/tree/main/02-CSS-Foundations-and-Flexbox/flexbox/flexbox-exercises-practice/04-flex-information) - `text-align: center` is a very handy property to simplify things. Using `max-width` on individual flex items is a useful approach when you want to wrap the text content uniformly.

- [Exercise 05-flex-modal](https://github.com/vishpant76/odin-project-repo/tree/main/02-CSS-Foundations-and-Flexbox/flexbox/flexbox-exercises-practice/05-flex-modal) is another cool exercise. I had to follow the hints to work it out but managed to achieve almost the same result as in the screenshot. Refer the "Updates" secion in CSS for details. Also added some comments in HTML for the changes made. Key takeaways:
    + Realising the use of `flex-shrink: 0;` in .icon CSS. The default value of flex-shrink is 1 for all items, i.e. all items shrink evenly. But we can see that the .icon element was getting smashed to the extreme left by the text to its right, so making flex-shrink 0 is helpful as in this case, we DO NOT want the .icon to shrink, but rather maintain its shape.
    + Making .modal as flex container.
    + Few other thing with HTML but they have been noted in the file itself.

- [Exercise 06-flex-layout](https://github.com/vishpant76/odin-project-repo/blob/main/02-CSS-Foundations-and-Flexbox/flexbox/flexbox-exercises-practice/06-flex-layout/style.css) - Key Takeaways:
    + `list-style-type: none;` - to remove the bullets. `height: 100vh;` in .body - makes the height 100% of the viewport. `text-decoration: none;` - removes underlines from links.
    + Using .body as flex container with direction column. Other flex containers nested inside body: .header, .footer, and ul. Whether or not to switch direction to column, is something that becomes apparent when you look at the desired outcome layout.
    + Using either `flex: 1;` in .content, or `justify-content: space-between;` in body - either approach will make the footer shift to the bottom.
    + Using gap wherever necessary to keep some distance between the flex items.

- [Exercise 07-flex-layout-2](https://github.com/vishpant76/odin-project-repo/tree/main/02-CSS-Foundations-and-Flexbox/flexbox/flexbox-exercises-practice/07-flex-layout-2) - Holy Grail layout - This was probably the hardest one. Managed to do it but my solution is a bit different from the official one. Refer both the HTML and CSS files for the changes. Not writing much here, would suggest to refer back to this later to redo it if you need more practice. And compare with the "solution" files to see the differences.

- Flexbox exercises end here. This is the Odin lesson link on [Alignment](https://www.theodinproject.com/lessons/foundations-alignment) where you can find more additional resources on Flexbox.

### Landing Page Project

- When to use height: 100vh in body? [Some discussion](https://chat.openai.com/c/72726ac3-58ce-48e6-bedb-ebd651bc9fbc)

- [Some points](https://chat.openai.com/c/a27ba228-06b1-4430-af43-cfea136e7722) on dealing with wrapping the text onto next lines in the flex items. But need to do more research on this.
- 
