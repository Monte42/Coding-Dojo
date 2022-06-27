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
console.log(result + "\n");


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
console.log(result + "\n");


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
console.log(result + "\n");



// Reverse While
function reverseWhile(arr){
    let left = 0
    let right = arr.length-1

    while(left<right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }

    return arr
}
console.log("Reverse Array with While");
console.log(reverseWhile([1,2,3,4,5]) + '\n');

// Fibonacci Numbers
function fibonacciArray(n) {
    var fibArr = [0, 1];
    // let i = 0
    while(fibArr.length<n){
        let newIndex = fibArr[fibArr.length-1] + fibArr[fibArr.length-2]
        fibArr.push(newIndex)
        // i++
    }
    return fibArr;
}
console.log("Fibonacci Numbers");
var result = fibonacciArray(10);
console.log(result + '\n');


// If you deposited a penny on day 1, and doubled that amount
// every day for n days your account would be...
function doubleAPenny(days){
    let penney = 1
    let account = 1
    for(let i=2;i<=days;i++){
        penney *=2
        account += penney
    }
    account /= 100
    console.log(`Doubble a penny every day \n $${account} \n`);
}
doubleAPenny(30)

// Flatten a 2D array
function flatten(arr2d) {
    var flat = [];
    arr2d.forEach(element => {
        for(i=0;i<element.length;i++){
            flat.push(element[i])
        }
    });
    return flat;
}
console.log('Flatten a 2D array');
var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]])
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

