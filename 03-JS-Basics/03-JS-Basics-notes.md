### JS Basics

- Extra large or extra small numbers can be written with scientific (exponent) notation:
```
let x = 123e5; // 12300000 -> It means 123 * 10^5
let y = 123e-5; // 0.00123 -> It means 123* 10^(-5)
```

- The JavaScript interpreter works from left to right. First 10 + 20 is added because x and y are both numbers. Then 30 + "30" is concatenated because z is a string.
```
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
```

- Comparing two JavaScript objects always returns false. Avoid creating Number objects. [See here for more](https://chat.openai.com/c/bcecc6e1-05dc-4ec2-8d15-39da435481d1).
```
let x = new Number(500);
let y = new Number(500);
// x==y or x===y - both will return false.
```

### Data Types

- JS String Methods - [W3Schools Ref](https://www.w3schools.com/js/js_string_methods.asp)

- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) on Strings.

- [About comparisons](https://javascript.info/comparison).

- [Logical Operators](https://javascript.info/logical-operators) - A very important article on how logical operators behave in JS, and the truthy and falsy values. Take special note of the little tasks at the end.

- [Conditionals - MDN aricle](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals) - A good article with real life examples. Refer back if needed.

- [Exercise - 2](https://replit.com/@vishvon/Exercise-2-data-types-and-conditionals#index.html) - The exercise was basic, but linking the script in the index.html here as found the JS driver code in it a good one.

- [Data Types and Conditionals](https://www.theodinproject.com/lessons/foundations-data-types-and-conditionals) - Link to Odin article. Pay attention to the questions at the bottom.


### Chrome Dev Tools

- [Odin main article](https://www.theodinproject.com/lessons/foundations-javascript-developer-tools) - This has too much info to take in at the moment... Will return later.

- [Functions Odin Article](https://www.theodinproject.com/lessons/foundations-function-basics) - This contains links to other useful resources. Come back later if needed.


#### [On Problem Solving](https://www.theodinproject.com/lessons/foundations-problem-solving)


### Understanding Errors

- [Main article]()
- [Useful Video on Debugging](https://www.youtube.com/watch?v=H0XScE08hy8) and this [demo page](https://googlechrome.github.io/devtools-samples/debug-js/get-started) to play around.


### Rock Paper Scissors


### Clean Code

### Arrays and Loops

- [Odin Article](https://www.theodinproject.com/lessons/foundations-arrays-and-loops)

- [JS Arrays - W3S](https://www.w3schools.com/js/js_arrays.asp) - Nice article that summarizes key points about arrays.

- [JS Array Methods List](https://www.w3schools.com/js/js_array_methods.asp).

- [MDN-Loops-2](https://github.com/vishpant76/odin-project-repo/blob/main/03-JS-Basics/Arrays-Loops/mdn-loops-2.js) - A good exercise in MDN on the use of slice(). Learnings: working of replace(), and why using it did not work. `refused` and `admitted` are `const` variables, but they could still be modified - Why? Because they are referencing DOM elements obtained through document.querySelector(), which are objects. The const keyword prevents you from reassigning `admitted` and `refused` to point to a different DOM element, but it does not prevent you from modifying properties of the DOM elements themselves. `const` simply means that the variable cannot be assigned to a different value. But it does not mean that the content of the variable, especially if it's an object or an array, cannot be modified.

- [JS_info-while-exercise]() - A very useful usecase of do-while. Notice the difference between your approach and the solution. It's so concise and to the point. The check `while (num <= 100 && num)` handles both the scenarios where input might be `null` (when user presses 'cancel') or when the user enters nothing (simply presses enter without input).

> The loop do..while repeats while both checks are truthy: The check for num <= 100 – that is, the entered value is still not greater than 100. The check && num is false when num is null or an empty string. Then the while loop stops too. If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.

- [repeatString.spec.js]() - The usage of regex in this file (the last test) is not very clear atm.

- [Array Destructuring](https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/) - swapping is an interesting use case of this.

- Read about forEach(), filter(), etc...

- `Math.round(number_variable * 10) / 10` - Nice trick to round a number to one decimal place. Alternavtive to using parseFloat in conjunction with toFixed().


### DOM Manipulation & Events

- [Main article](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events)

- [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

- [textContent vs innerHTML](https://www.youtube.com/watch?v=ns1LX6mEvyM) - potential security risks when using innerHTML.

- [The defer attribute](https://javascript.info/script-async-defer#defer)
