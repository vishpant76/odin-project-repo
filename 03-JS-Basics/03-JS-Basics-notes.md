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

- 
