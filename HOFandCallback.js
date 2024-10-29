// //HOF

// //accept function as a argument
// function add(a, b, result) {
//   let sum = a + b;
//   result(sum);
// }

// add(34, 54, (value) => console.log(value));

// //return a function
// function multiply(x, y, cb) {
//   let result = x * y;
//   cb(result);
//   return () => console.log(result);
// }

// let multiplyResult = multiply(12, 4, () => {});
// multiplyResult();

//accept function as a argument
function addValues(val1, val2, callbackFunc) {
  let valueSum = val1 + val2;
  callbackFunc(valueSum);
}

addValues(24, 65, (printSum) => console.log(printSum));

//return a function
function subtValue(val1, val2, callbackFunc2) {
  let subtResult = val1 - val2;
  callbackFunc2(subtResult);

  return () => console.log(subtResult);
}

let result = subtValue(100, 65, () => {});
result();
