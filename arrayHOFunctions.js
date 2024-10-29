const names = ["Raj", "Rohan", "Junaid", "Gourav"];

//forEach  (only perform operation)
names.forEach((print) => console.log(print));

console.log("-----------");

//map  (created a new array)
names.map((print) => console.log(print));

//find value in array
let findName = names.find((data) => data === "Gourav");
console.log(findName); //Gourav

//find value in array using index number
let findUsingIndex = names.findIndex((data) => data === "Gourav");
console.log(findUsingIndex); //3
