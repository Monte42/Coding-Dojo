const reverseArr = arr => {
    let start = 0
    let end = arr.length-1
    while (start<end){
        const tempVal = arr[start]
        arr[start] = arr[end]
        arr[end] = tempVal
        start++
        end--
    }
    console.log('Reverse',arr);
}
reverseArr([1,2,3,4,5,6])



const rotateArr = (arr,offSet) => {
    const arrLength = arr.length
    if (offSet<0){
        for (let i=0; i<offSet*-1;i++) {
            const [,...restArr] = arr
            arr = [...restArr, arr[0]]
        }
    }
    for (let i=arrLength-1; i>=arrLength-offSet;i--) {
        arr = [arr[arr.length-1],...arr]
        arr.length = arrLength
    }
    return arr
}
// Using this in Filter Range
console.log('Rotate Pos',rotateArr([1,2,3,4,5,6,7,8,9],3))
console.log('Rotate Neg',rotateArr([1,2,3,4,5,6,7,8,9],-3))



const filterRange = (arr,min,max) => {
    const arrLength = arr.length
    let newArrlength = 0
    for(let i=0;i<arrLength;i++){
        if(arr[i]<=max && arr[i]>=min){
            newArrlength++
            arr = [...arr, arr[i]]
        }
    }
    arr = rotateArr(arr,newArrlength)
    arr.length = newArrlength
    console.log('Filter',arr);
}
filterRange([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],3,9)


const concatArr = (arr1,arr2) => [...arr1, ...arr2]
console.log('Concat',concatArr(['a','s'],[1,2]))