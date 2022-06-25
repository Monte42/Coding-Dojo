// Always Hungry
function alwaysHungry(arr){
    let isFood = false
    for(let i=0;i<=arr.length;i++){
        if(arr[i]=="food"){
            console.log("yummy");
            isFood = true
        }
    }
    if(!isFood){
        console.log("I'm hungry");
    }
}
console.log("Always Hungry");
alwaysHungry([3.14, 'food', 'pie', true, 'food'])
alwaysHungry([4,1,5,7,2])
console.log("\n");


// High Pass Filter
function highPass(arr, cutoff){
    let filteredArr = [];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
console.log("High Pass Filter");
var result = highPass([6,8,3,10,-2,5,9],5)
console.log(result);
console.log("\n");


// Better Than Average
function betterThanAverage(arr){
    let sum = 0
    let count = 0
    for(i=0;i<arr.length;i++){
        sum += arr[i]
    }
    for(i=0; i<arr.length; i++){
        if(arr[i]>(sum/arr.length)){
            count ++
        }
    }
    return count
}
console.log("better Than Avgerage");
var result = betterThanAverage([6,8,3,10,-2,5,9])
console.log(result);
console.log("\n");


// Reverse Array
function reverse(arr){
    var newArr = []
    for(i=arr.length-1; i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr
}
console.log("Reverse Array");
var result = reverse(['a','b','c','d','e'])
console.log(result);
console.log("\n");

// Fibonacci Numbers
function fibonacciArray(n) {
    var fibArr = [0, 1];
    let i = 0
    while(fibArr.length<n){
        let newIndex = fibArr[i] + fibArr[i+1]
        fibArr.push(newIndex)
        i++
    }
    return fibArr;
}
console.log("Fibonacci Numbers");
var result = fibonacciArray(10);
console.log(result);
