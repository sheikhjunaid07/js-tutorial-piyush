function sayName() {
  console.log("Hey! Sheikh Junaid");
}

sayName();

//add values
function add(val1, val2) {
  console.log(val1 + val2);
}

add(10, 20);
let sum = add(30, 30);
console.log("sum is: " + sum); //sum is: undefined

//if we return value we can use outside the function block
function multi(val1, val2) {
  return val1 * val2;
}

let ans = multi(10, 30);
console.log("answer is: " + ans);
