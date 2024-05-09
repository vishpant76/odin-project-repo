// Write the code which outputs prime numbers in the interval from 2 to n.

const n = Number(prompt("Enter a number"));

function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
const arr = [];
for (let i = 2; i <= n; i++) {
  if (checkPrime(i)) arr.push(i);
}
alert(arr);
