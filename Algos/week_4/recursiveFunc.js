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

rSigma(5)
rSigma(2.5)
rSigma(-1)


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

rFact(3)
rFact(6.5)
rFact(-1)