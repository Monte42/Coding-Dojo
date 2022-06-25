// Print odd nums
console.log("Print Odd Nums");
for(let i=1;i<=20;i++){
    if(i%2!==0){
        console.log(i);
    }
}
console.log("\n");

// Decrease Multiples of 3
console.log("Decrease Multiples of 3");
var num = 100
while(num>0){
    if (num%3 == 0) {
        console.log(num);
    }
    num--
}
console.log("\n");

// Print the Sequence
console.log('Print the sequence');
num = 4 
while(num>=-3.5){
    console.log(num);
    num-=1.5
}
console.log("\n");

// Sigma
console.log("Sigma");
var myStr = ""
var sum = 0
for (let i=1; i<=100; i++) {
    if(i!==100){
        myStr += `${i} + `
        sum += i
    } else {
        myStr += `${i} =`
        sum += i
        myStr += ` ${sum}`
    }
}
console.log(myStr);
console.log('\n');

// Factorial
console.log("Factorial");
var product = 1
myStr = "1"
for(let i=2; i<=12; i++){
    if(i<12){
        myStr += ` * ${i}`
        product *= i
    } else {
        myStr += ` * ${i} =`
        product *= i
        myStr += ` ${product}`
    }
}
console.log(myStr);