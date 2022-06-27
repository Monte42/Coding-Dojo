let newEntry = true
let display = $("#display")[0]
let operations = []

function press(num){
    if(newEntry){
        display.innerText = `${num}`
        newEntry = false
    } else {
        display.innerText += `${num}`
    }
}

function setOP(operation){
    newEntry = true
    operations.push(display.innerText)
    operations.push(operation)
}

function calculate(){
    operations.push(display.innerText)
    let formula = ''
    operations.forEach(el => {
        formula += el
    });
    display.innerText = eval(formula)
    operations = []
    newEntry = true
}

function clr(){
    display.innerText = 0
    operations = []
    newEntry = true
}