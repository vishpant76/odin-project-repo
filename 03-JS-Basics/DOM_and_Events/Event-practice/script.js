// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   alert("Button was clicked!");
// });

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Button was clicked!");
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => console.log(e.target));
});

btns.forEach((btn) => {
  btn.addEventListener(
    "click",
    (e) => (e.target.style.background = changeColor())
  );
});

function changeColor() {
  const rand = Math.floor(Math.random() * 5);
  const colors = ["blue", "lightgreen", "pink", "yellow", "purple"];
  return colors[rand];
}
