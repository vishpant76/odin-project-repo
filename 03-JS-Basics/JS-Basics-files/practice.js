// let str = "Colin";
// let s = str.slice(-1);

// console.log(str);
// console.log(s);

// function checkPrime(num) {
//   for (let i = 2; i < num; i++) {
//     // if (i === 2) return true;
//     if (num % i === 0) return false;
//     // return true;
//   }
//   return true;
// }

// console.log(checkPrime(2));

// const repeatString = function (string, num) {
//   let ans = "";
//   for (let i = 0; i < num; i++) {
//     ans += string;
//   }
//   return ans;
// };

// console.log(repeatString("hey", -1));

// const reverseString = function (string) {
//   let s = 0,
//     e = string.length - 1;
//   while (s < e) {}
// };

// let str = "abcde";
// str[3] = "m";
// console.log(str);

// let str = "Hello World";
// let strArr = str.split("");
// console.log(strArr);
// console.log(strArr.length);

// let arr = ["q", "w", "e", "r", "t", "y"];
// let arrString = arr.toString();
// arrString = arrString.replaceAll(",", "");
// console.log(arrString);

// const reverseString = function (str) {
//   const strArray = str.split("");
//   let s = 0;
//   let e = strArray.length - 1;
//   while (s < e) {
//     let temp = strArray[s];
//     strArray[s] = strArray[e];
//     strArray[e] = temp;
//     s++;
//     e--;
//   }
//   let strArrayToString = strArray.toString();
//   strArrayToString = strArrayToString.replaceAll(",", "");
//   return strArrayToString;
// };

// const reverseString2 = function (string) {
//   return string.split("").reverse().join("");
// };

// const ans = reverseString2("Hello, World!");
// console.log(ans);
