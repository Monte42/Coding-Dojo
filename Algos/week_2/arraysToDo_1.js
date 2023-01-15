const awesomeArr = ['Kawasaki','Chevy','Dodge',2004,2003,2006]


const pushFront = (arr,newVal) => {
    return [newVal,...arr]
}
console.log('Push Front ', pushFront(awesomeArr,'Dream Team'));



const popFront = arr => {
    const [,...newArr] = arr
    return newArr
}
console.log('Pop Front ',popFront(awesomeArr));



const insertAt = (arr,index,value) => {
    let tempArr = [...arr]
    for (let i=index;i<arr.length;i++) tempArr[i+1] = arr[i]
    tempArr[index] = value
    return tempArr
}
console.log('Insert At',insertAt(awesomeArr,3,'Dream Team'));



const removeAt = (arr,index) => {
    let tempArr = []
    for (let i=0;i<arr.length;i++){
        if (i!==index) i<index ? tempArr[i] = arr[i] : tempArr[tempArr.length] = arr[i]
    }
    return tempArr
}
console.log('Remove At',removeAt(awesomeArr,4));



const swapPairs = (arr) => {
    let tempArr = []
    let valHolder = null
    if (arr.length%2 == 0){
        for (let i=0;i<arr.length;i++){
            if (i%2==0) valHolder = arr[i]
            else {
                tempArr[tempArr.length] = arr[i]
                tempArr[i] = valHolder
            }
        }
    } else {
        for (let i=0;i<arr.length-1;i++){
            if (i%2==0) valHolder = arr[i]
            else {
                tempArr[tempArr.length] = arr[i]
                tempArr[i] = valHolder
            }
        }
        tempArr[tempArr.length] = arr[arr.length-1]
    }
    return tempArr
}
console.log('Swap Pairs Even',swapPairs(awesomeArr));
console.log('Swap Pairs Odd',swapPairs(insertAt(awesomeArr,3,'Dream Team')));



const removeDups = arr => {
    tempArr = [arr[0]]
    for (let i=1;i<arr.length;i++){
        if (arr[i]!==arr[i-1]) tempArr[tempArr.length] = arr[i]
    }
    return tempArr
}
console.log('Remove Dups',removeDups([9,19,19,19,19,19,29]))