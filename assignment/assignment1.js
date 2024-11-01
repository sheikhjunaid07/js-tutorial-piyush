//add unlimited numbers

function addNumbers() {
  //you can use argument keyword
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans = ans + arguments[i];
  }
  return ans;
}

let result = addNumbers(2, 564, 754, 365, 75, 24, 356, 32, 246);
console.log("sum is: " + result);
