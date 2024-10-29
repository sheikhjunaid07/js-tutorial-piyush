//you can add multi type values in a single array like -> [1, "Junaid", true, 2.55, {name: "Raj"}]

const names = ["Raj", "Rohan", "Junaid", "Gourav"];

console.log(names);

//length of the array
console.log(names.length);

//get value by index number
console.log(names[2]);

//get index number by value
console.log(names.indexOf("Junaid")); //2

//change value by index number
names[0] = "Sheikh";
console.log(names); //['Sheikh', 'Rohan', 'Junaid', 'Gourav']

//add value to array
names.push("Joey");

console.log(names); //['Sheikh', 'Rohan', 'Junaid', 'Gourav', 'Joey']

//add other value to array
names.push(18);
console.log(names); //['Sheikh', 'Rohan', 'Junaid', 'Gourav', 'Joey', 18]

//remove value from array (by default last element will remove)
names.pop();
console.log(names);

//you can also add a object inside array
names.push({ city: "Indore" });
console.log(names);

//reverse an array
names.reverse();
console.log(names);
