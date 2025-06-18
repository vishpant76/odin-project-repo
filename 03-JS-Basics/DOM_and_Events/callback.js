// function vs callback function

// regular function
function greet() {
  console.log("Hello from regular function");
}
greet(); // You call it directly

// callback
function sayHello(callback) {
  console.log("Before callback");
  callback();
  console.log("After callback");
}

sayHello(() => {
  console.log("Inside callback");
});
