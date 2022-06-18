// Switch Login in Btn
function changeStatus(el){
    if(el.innerText == "Login"){
        el.innerText = "Logout"
    } else {
        el.innerText = "Login"
    }
}

// Add to like count
function addLike(el){
    num = parseInt(el.childNodes[1].innerText)
    num ++
    el.childNodes[1].innerText = num
    alert('Ninja was liked')
}

// Remove Add Definition Btn
function removeBtn(el){
    el.remove()
}