// syntax

const sayHello = () => {
  console.log("hello world!");
};

sayHello();

//other way if function only have one line
const add = (a, b) => a + b;

console.log(add(3, 5));

// 2. arguments keyword
//arguments keyword is not available in arrow functions ,
//you will use spread operator(...)
const printNumber = (...numbers) => {
  console.log(numbers);
};

printNumber(2, 54, 3245, 234, 1324);

/*
3. hoisting -> Hoisting is worked in normal function but not in arrow functions
                you can declare function in bottom can you can define on top in normal function 
                but this feature you cannot use in arrow functions.
*/
sayHi();

//this will work
function sayHi() {
  console.log("Hi there");
}

sayBye();

//this will not work
const sayBye = () => console.log("Bye there");

//4. this keyword
//with normal function this.value give the value
const obj = {
  value: 20,
  myFunction: function () {
    console.log(this.value);
  },
};

obj.myFunction(); //20

//but with arrow function 'this' give you window object
const obj2 = {
  value: 20,
  myFunction: () => {
    console.log(this); //20
  },
};

obj2.myFunction();
