//run this program in browser20

let number = 20;
let guess = 0;

do {
  guess = parseInt(prompt("Enter a number"));
  if (guess == number) {
    alert("Winner");
    break;
  }
} while (guess != 0);
