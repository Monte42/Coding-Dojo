// Place enemy planes X
// set player bounderies X
// give enemies health X
// add missile and guns to wrapper in HTML / stlye them X
// create fire function / fire selected weapons X
// create enemies fire function
// create function to move enemies fwd X
// create collision function for planes/missiles/guns
// include health point deductions
// find explosion gif
// create explosion function
// create Game Over Function



// dictionaries
var playerDetails = {
    type: 'player',
    top: 550,
    left: 415,
    health:90,
    missiles: 18,
    weapon: 'Guns',
    score: 0
}

var enemiesDetails = [
    {top: 50, left:175, type:'enemy-1', health:100},
    {top: 70, left:275, type:'enemy-1', health:100},
    {top: 90, left:375, type:'enemy-0', health:100},
    {top: 90, left:475, type:'enemy-0', health:100},
    {top: 70, left:575, type:'enemy-1', health:100},
    {top: 50, left:675, type:'enemy-1', health:100},
]

var missiles = []
var guns = []

function drawEnemies(){
    let output = ''
    for(i=0;i<enemiesDetails.length;i++){
        output += `<div class="${enemiesDetails[i].type} character" style="top:${enemiesDetails[i].top}px; left:${enemiesDetails[i].left}px;"></div>`
    }
    document.getElementById("enemies").innerHTML = output
}

function drawPlayer(){
    let player = `<div id="player" class="character" style="top:${playerDetails.top}px; left:${playerDetails.left}px;"></div>`
    let missiles = ''
    for(i=0;i<=playerDetails.missiles;i++){
        missiles += `<div class="missilesLeft"></div>`
    }
    document.getElementById('playerDiv').innerHTML = player
    document.getElementById('health').style.width = `${playerDetails.health}%`
    document.getElementById('score').innerText = playerDetails.score
    document.getElementById('missileCount').innerHTML = missiles
    document.getElementById('weapons').innerText = playerDetails.weapon
}

function drawMissile(){
    let output = ''
    for(let i=0;i<missiles.length;i++){
        output += `<div class="missile" style="top:${missiles[i].top}px; left:${missiles[i].left}px"></div>`
    }
    document.getElementById("missiles").innerHTML = output
}

function drawGuns(){
    let output = ''
    for(let i=0;i<guns.length;i++){
        output += `<div class="bullet" style="top:${guns[i].top}px; left:${guns[i].left}px;"></div>`
    }
    document.getElementById('guns').innerHTML = output
}

function moveObjects(objDict,moveAmount){
    objDict.forEach(obj => {
        obj.top += moveAmount
    });
}

function collisionDetection(arr1,arr2){
    for (let i = 0; i < arr1.length; i++) {
        let roundTop = arr1[i].top
        let roundLeft = arr1[i].left
        let damage = arr1[i].damage
        for (let i = 0; i < arr2.length; i++) {
            if(roundTop < arr2[i].top+75 && roundTop > arr2[i].top && roundLeft > arr2[i].left && roundLeft < arr2[i].left+70){
                console.log("hit plane "+i);
                arr2[i].health -= damage
                if(arr2[i].health <= 0){
                    arr2.splice(i, 1)
                    playerDetails.score += 100
                    enemiesDetails.push({top: -50, left:Math.floor(Math.random()*800)+15, type:`enemy-${Math.round(Math.random())}`, health:100})
                }
            }
        }
    }
}


document.onkeydown = function(e){
    if(e.keyCode == 37){
        if(playerDetails.left > 30){
            playerDetails.left -= 10
        }
    }
    if(e.keyCode == 38){
        if(playerDetails.top > 350){
            playerDetails.top -= 10
        }
    }
    if(e.keyCode == 39){
        if(playerDetails.left < 820){
            playerDetails.left += 10
        }
    }
    if(e.keyCode == 40){
        if(playerDetails.top < 570){
            playerDetails.top += 10
        }
    }
    if(e.keyCode == 32){
        if (playerDetails.weapon == 'Guns') {
            guns.push({top:playerDetails.top-2,left:playerDetails.left+35,damage:3})
            drawGuns()
        } else {
            if(playerDetails.missiles>=0){
                playerDetails.missiles--
                if(missiles.length%2==0){
                    missiles.push({top:playerDetails.top+27, left:playerDetails.left+17,damage:8})
                } else {
                    missiles.push({top:playerDetails.top+27, left:playerDetails.left+43,damage:8})
                }
                
                drawMissile()  
            }
            
        }
    }
    if(e.keyCode == 13){
        console.log("change weapons");
        if (playerDetails.weapon == 'Guns') {
            playerDetails.weapon = "Missiles"            
        } else {
            playerDetails.weapon = "Guns"            
        }
    }
    drawPlayer()
}


function gameLoop(){
    moveObjects(enemiesDetails,.5)
    drawEnemies()

    moveObjects(missiles,-16)
    drawMissile()

    moveObjects(guns,-24)
    drawGuns()

    collisionDetection(guns,enemiesDetails)
    collisionDetection(missiles,enemiesDetails)

    setTimeout(gameLoop,50)
}


drawPlayer()

gameLoop()