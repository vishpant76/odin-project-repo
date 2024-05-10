// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const pRed = document.createElement("p");

pRed.textContent = "Hey I'm red!";
pRed.style.color = "red";
pRed.classList.add("p-red");

container.appendChild(pRed);

const blueh3 = document.createElement("h3");
blueh3.textContent = "I'm a blue h3!";
blueh3.style.color = "blue";
container.appendChild(blueh3);

const blackDiv = document.createElement("div");
blackDiv.style.cssText = "background: pink; border: 4px solid black";
blackDiv.classList.add("black-pink-box");

const h1Element = document.createElement("h1");
h1Element.textContent = "I'm in a div";

const pElement = document.createElement("p");
pElement.textContent = "ME TOO!";

blackDiv.appendChild(h1Element);
blackDiv.appendChild(pElement);

container.appendChild(blackDiv);
