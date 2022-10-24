// First Block
const cars = ["Chevy", "Ford", "Dodge"]
const [randomCar] = cars
const [,anotherRandomCar] = cars
// Predictions
console.log(randomCar); // Chevy
console.log(anotherRandomCar); // Ford

// Second Block
const employee = {
    name: "Gary",
    age: 35,
    company: "WebGND"
}
const {name: otherName} = employee
// Predictions
// console.log(name); // undefined  => After test run this Errored out
console.log(otherName);

// Third Block
const person = {
    name: "Billy Bob",
    age: 41,
    height: "6 feet"
}
const password = "12345"
const {password: hashedPassword} = person // undefined 
// Predictions
console.log(password);
console.log(hashedPassword); // undefind

// Fourth Block
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2]
const [,first] = numbers // 2, index [1]
const [,,,second] = numbers // 5 index [3]
const [,,,,,,,,third] = numbers // 2 index [-1]
//Predictions
console.log(first == second);  // false
console.log(first == third);  // true

// Fifth Block
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest
const { secondKey } = lastTest
const [ ,willThisWork] = secondKey
//Predictions
console.log(key); // value
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5


