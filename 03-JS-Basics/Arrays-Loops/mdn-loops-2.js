// MDN Loops - Challenge 2
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
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
for (let p of people) {
  if (p === "Lola" || p === "Phil") {
    refused.textContent += `${p}, `;
  } else {
    admitted.textContent += `${p}, `;
  }
}

/*WRONG APPROACH - Because replace() will repace the first occurrence of ', ' with '.'. So although, with 
refused.textContent.slice(refused.textContent.length - 2), we are slicing off exactly the last two characters (', ') in the string itself, when we pass it as argument to repace(), to replace with '.', the replace will replace the FIRST OCCURRENCE of ', ', which it will find right at the end of the first word in the string, and not at the end of the string (as that's the last occurrence). So if you want to use replace(), then a regular expression will be required to handle this, otherwise use a simpler method, using slice() only.
*/
/*

refused.textContent = refused.textContent.replace(
  refused.textContent.slice(refused.textContent.length - 2),
  "."
);

admitted.textContent = admitted.textContent.replace(
  admitted.textContent.slice(admitted.textContent.length - 2),
  "."
);
*/

// CORRECT APPROACH
refused.textContent =
  refused.textContent.slice(0, refused.textContent.length - 2) + ".";
admitted.textContent =
  admitted.textContent.slice(0, admitted.textContent.length - 2) + ".";

// Refer here for more: https://chatgpt.com/c/0a40b8c8-d2e3-4042-bef2-70130fbd9796
