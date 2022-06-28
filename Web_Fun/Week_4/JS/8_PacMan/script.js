var pacman = document.getElementById("pacman")
var pacmanPos = {
        x: 1,
        y: 1,
}

let worldArr = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,1,2,1,2],
    [2,1,2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2],
    [2,1,1,1,2,1,2,1,2,1,2,2,0,0,2,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,2,1,2,1,2,0,0,0,0,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,2,1,2,1,2,0,0,0,0,2,1,2,1,2,1,2,1,1,1,2],
    [2,1,2,1,1,1,2,1,2,1,2,2,2,2,2,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,2],
    [2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,1,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]

// Bulids World
function displayWorld(){
    let output = ''
    for(let i=0;i<worldArr.length;i++){
        output += '<div class="row">'
        for( let j=0;j<worldArr[i].length;j++){
            if(worldArr[i][j] == 2){
                output += '<div class="brick"></div>'
            } else if(worldArr[i][j] == 1){
                output += '<div class="coin"></div>'
            } else{
                output += '<div></div>'
            }
        }
        output += '</div>'
    }
    document.getElementById("world").innerHTML = output
}
displayWorld()


// Update Pac-Man POS
function updatePacman(){
    pacman.style.top = pacmanPos.y*20+"px"
    pacman.style.left = pacmanPos.x*20+"px"
}


// Key Commands
document.onkeydown = function(e){
    if(e.keyCode==37 && worldArr[pacmanPos.y][pacmanPos.x-1] != 2){
        console.log('left');
        pacmanPos.x--
        pacman.style.transform = 'rotate(180deg)'
    }
    if(e.keyCode==38 && worldArr[pacmanPos.y-1][pacmanPos.x] != 2){
        console.log('up');
        pacmanPos.y--
        pacman.style.transform = 'rotate(-90deg)'
    }
    if(e.keyCode==39 && worldArr[pacmanPos.y][pacmanPos.x+1] != 2){
        console.log('right');
        pacmanPos.x++
        pacman.style.transform = 'rotate(0deg)'
    }
    if(e.keyCode==40 && worldArr[pacmanPos.y+1][pacmanPos.x] != 2){
        console.log('down');
        pacmanPos.y++
        pacman.style.transform = 'rotate(90deg)'
    }
    updatePacman()
    if(worldArr[pacmanPos.y][pacmanPos.x] == 1){
        let scoreboard = document.getElementById("score")
        let score = parseInt(scoreboard.innerText)
        score += 20
        scoreboard.innerText = score
        worldArr[pacmanPos.y][pacmanPos.x] = 0
        displayWorld()
    }
}
