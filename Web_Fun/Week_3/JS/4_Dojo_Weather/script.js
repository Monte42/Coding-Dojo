function loadReport(el){
    let loc = el.innerText
    alert(`Loading weather report for ${loc}...`)
}

function changeTempFormat(){
    let temps = document.getElementsByClassName("temp")
    let tempFormat = document.querySelector("select")
    if(tempFormat.value == 'f'){
        for(var i=0; i<temps.length; i++){
            let t = temps[i]
            let temp = parseInt(t.innerText)
            temp = (temp*9/5) + 32 
            temps[i].innerText = Math.floor(temp)
        }
    } else {
        for(var i=0; i<temps.length; i++){
            let t = temps[i]
            let temp = parseInt(t.innerText)
            temp = (temp-32) * 5/9 
            temps[i].innerText = Math.ceil(temp)
        }
    }

}

function removeCookies(el){
    el.parentElement.parentElement.remove()
}