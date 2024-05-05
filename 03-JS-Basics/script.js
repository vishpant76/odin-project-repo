// Array Methods
const fruits = ["apple", "guava", "mango", "banana"];
console.log(fruits.at(-1));

console.log(fruits.join("-"));

console.log(fruits.push("kiwi")); // returns new length

console.log(fruits.shift()); // returns the value shifted out

console.log(fruits);

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

// MDN Loops - Challenge 1
let output = document.querySelector(".output");
output.innerHTML = "";

let i = 10;
while (i >= 0) {
  const para = document.createElement("p");
  if (i === 10) {
    para.textContent = "Countdown 10";
  } else if (i > 0) {
    para.textContent = i;
  } else {
    para.textContent = "Blast off!";
  }
  output.appendChild(para);
  i--;
}

// MDN Loops - Challenge 2
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here

// refused.textContent += ;
// admitted.textContent += ;
