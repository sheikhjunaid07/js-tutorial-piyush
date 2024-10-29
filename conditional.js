//ternary operator

const age = 22;

// line 6 and 7 both are same
//  age >= 18 ? console.log("eligible for vote") : console.log("not eligible for vote")
let result = age >= 18 ? "eligible for vote" : "not eligible for vote";

console.log(result);

//switch case
const option = "+";
const val1 = 30;
const val2 = 20;

switch (option) {
  case "+":
    console.log("first case '+' is executed");
    console.log(val1 + val2);
    break;
  case "-":
    console.log("second case '-' is executed");
    console.log(val1 - val2);
    break;
  case "*":
    console.log("Third case '*' is executed");
    console.log(val1 * val2);
    break;
  case "/":
    console.log("Forth case '/' is executed");
    console.log(val1 / val2);
    break;
  default:
    console.log("Invalid Option");
}
