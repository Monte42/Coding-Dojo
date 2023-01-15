const arr = [1,5,7,3,9,4,-1,5,44,2,-5,77,1,-2,11,4,55]

console.log("Max ",Math.max(...arr));
// Logs 77

console.log("Min ",Math.min(...arr));
// Logs -5

let sum = 0 
arr.map(e=> sum+=e)
console.log("Sum ",sum);
console.log("Avg ",sum/arr.length);