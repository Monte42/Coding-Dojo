function rSigma(endPoint, index=1, sum=0){
    if (Math.floor(endPoint)<=0) {
        console.log(0)
        return
    }
    sum += index
    if (Math.floor(endPoint)<=index) {
        console.log(sum)
        return
    }
    index++
    rSigma(endPoint,index,sum)
}

// rSigma(5)
// rSigma(2.5)
// rSigma(-1)


function rFact(endPoint, index=1, factorial=1){
    endPoint = Math.floor(Math.trunc(endPoint))
    if (endPoint<=0) {
        console.log(0)
        return
    }
    factorial *= index
    if (endPoint<=index) {
        console.log(factorial)
        return
    }
    index++
    rFact(endPoint,index,factorial)
}

// rFact(3)
// rFact(6.5)
// rFact(-1)


const rBinarySearch = (arr,val) => {
    while(arr.length > 0){
        if (arr[0] === val) return true
        arr.shift()
        rBinarySearch(arr,val)
    }
    return false
}
// console.log(rBinarySearch([1,3,5,6],4)) 
// console.log(rBinarySearch([4,5,6,8,12],5))

const rgcf = (a,b) => {
    if (b===a) return a
    if (a>b){
        if (a%b===0) return `${b}`
        rgcf(a,b-1)
    } else {
        if (b%a===0) return `${a}`
        rgcf(a-1,b)
    }
}

console.log(rgcf(100,35));