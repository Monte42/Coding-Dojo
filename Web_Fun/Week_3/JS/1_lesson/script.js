




function removeBtn(el){
    el.remove()
}

function alertBtn(){
    alert("Hello")
}

function addLike(){
    var x = document.querySelector('span')
    num = parseInt(x.innerText)
    num ++ 
    x.innerText = num
}