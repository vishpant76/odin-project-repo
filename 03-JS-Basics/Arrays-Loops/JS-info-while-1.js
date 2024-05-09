// https://javascript.info/while-for

/*
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

*/

// NOOB APPROACH
while (1) {
  const input = prompt("Enter a number > 100");
  if (input === null || input === "" || Number(input) > 100) {
    break;
  }
  alert("Invalid input. Re-enter the number.");
}

// PRO-APPROACH
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
