// You can use query selector but its more of a sniper approach the way we do it here

function myFunction(el){
    let fontS = Math.random()+1;
    let r = Math.floor(Math.random()*10)*25
    let g = Math.floor(Math.random()*10)*25
    let b = Math.floor(Math.random()*10)*25
    console.log(fontS);
    el.style.color = `rgb(${r},${g},${b})`
    el.style.fontSize = `${fontS}em`
}

