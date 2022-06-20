// By using the console and console.log I was able to find a way to
// to acheive the goal at hand using "this".  This allowed to use
// one funtion, and no array, or glabal variables.

function addLikes(el){
    let elVal = el.parentElement.childNodes[1].childNodes[0]
    let count = parseInt(elVal.innerText)
    count++
    elVal.innerText = count
}