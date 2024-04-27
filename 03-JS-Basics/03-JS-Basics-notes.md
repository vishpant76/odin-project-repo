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

- 
