function evens(){
    for( let i=0; i<=50; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
evens()

function odds(){
    for( let i=0; i<=13; i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}
odds()

arr = ["Gary","Heather", "Keith", "John", "Jared", "David"]

function names(arr){
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}
names(arr)

arr2 = [1,5,8,6]

function addNum(arr,num){
    arr.push([1,5,3,2])
    console.log(arr);
}
addNum(arr2,10)




myStr = 'John said "dogs are cool"!'
console.log(myStr);

console.log(`arr2 is ${arr2}`);