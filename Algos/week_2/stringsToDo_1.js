const removeBlanks = str => {
    let newStr =''
    for (let i=0;i<str.length;i++){
        if (str[i]!==' ') newStr += str[i]
    }
    return newStr
}
console.log('Remove Blanks:', removeBlanks('" Pl ayTha tF u nkyM usi c "'));



const getDigits = str => {
    let newStr =''
    for (let i=0;i<str.length;i++){
        if (!isNaN(str[i])) newStr += str[i]
    }
    return newStr
}
console.log('Get Digits:', getDigits('"abc8c0d1ngd0j0!8"'));



const Acron = str => {
    let newStr = str[0].toUpperCase()
    for (let i=1;i<str.length;i++){
        if (str[i-1]===' ') newStr += str[i].toUpperCase()
    }
    return newStr
}
console.log('Get Acronym:', Acron(`" there's no free lunch - gotta pay yer way. "`));



const countNonSpaces = str => {
    let num = 0
    for (let i=0;i<str.length;i++){
        if (str[i]!==' ') num++
    }
    return num
}
console.log('Count Non-Spaces:', countNonSpaces(`Honey pie, you are driving me crazy`));



const removeShorterStrings = (arr,minLength) => {
    let newArr = []
    for (el in arr) if (arr[el].length >= minLength) newArr[newArr.length] = arr[el]
    return newArr
}
console.log('Remove Shorter Strings:', removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
