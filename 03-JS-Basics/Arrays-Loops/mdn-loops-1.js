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
