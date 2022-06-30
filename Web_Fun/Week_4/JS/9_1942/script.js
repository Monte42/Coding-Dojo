// Place enemy planes
// set player bounderies
// give enemies health
// add missile and guns to wrapper in HTML / stlye them
// create fire function / fire selected weapons
// create enemies fire function
// create function to move enemies fwd
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
    {top: 50, left:175, type:'enemy-2'},
    {top: 70, left:275, type:'enemy-2'},
    {top: 90, left:375, type:'enemy-1'},
    {top: 90, left:475, type:'enemy-1'},
    {top: 70, left:575, type:'enemy-2'},
    {top: 50, left:675, type:'enemy-2'},
]

function drawEnemies(){
    let output = ''
    for(i=0;i<enemiesDetails.length;i++){
        output += `<div class="${enemiesDetails[i].type} character" style="top:${enemiesDetails[i].top}px; left:${enemiesDetails[i].left}px;"></div>`
    }
    console.log(output);
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



document.onkeydown = function(e){
    if(e.keyCode == 37){
        console.log("left");
        playerDetails.left -= 10
    }
    if(e.keyCode == 38){
        playerDetails.top -= 10
        console.log("up");
    }
    if(e.keyCode == 39){
        playerDetails.left += 10
        console.log("right");
    }
    if(e.keyCode == 40){
        playerDetails.top += 10
        console.log("down");
    }
    if(e.keyCode == 32){
        if (playerDetails.weapon == 'Guns') {
            console.log(`fire ${playerDetails.weapon}`);
        } else {
            console.log(`fire ${playerDetails.weapon}`);
            playerDetails.missiles--
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




drawPlayer()
drawEnemies()