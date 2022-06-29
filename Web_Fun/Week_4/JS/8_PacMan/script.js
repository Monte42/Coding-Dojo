// Collect HTML Vars
var pacman = document.getElementById("pacman")
var red = document.getElementById("red")
var orange = document.getElementById("orange")
var scoreboard = document.getElementById("score")
var score = parseInt(scoreboard.innerText)

// Charactes starting attributs
var characters = {
    pacman: {x:1,y:1,lives:3},
    red: {x:11,y:8,id:"red"},
    orange: {x:14,y:8,id:"orange"}
}

// world Map
let worldArr = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2],
    [2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,1,2,1,2],
    [2,1,2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2],
    [2,1,1,1,2,1,2,1,2,1,2,2,0,0,2,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,2,1,2,1,2,0,0,0,0,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,1,2,1,2,1,2,1,2,0,0,0,0,2,1,2,1,2,1,2,1,1,1,2],
    [2,1,2,1,1,1,2,1,2,1,2,2,2,2,2,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,1,2,3,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,2],
    [2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,1,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]

// Construct World
function displayWorld(){
    let output = ''
    for(let i=0;i<worldArr.length;i++){
        output += '<div class="row">'
        for( let j=0;j<worldArr[i].length;j++){
            if(worldArr[i][j] == 2){
                output += '<div class="brick"></div>'
            } else if(worldArr[i][j] == 1){
                output += '<div class="coin"></div>'
            } else if(worldArr[i][j] == 3){
                output += '<div class="cherry"></div>'
            } else{
                output += '<div></div>'
            }
        }
        output += '</div>'
    }
    document.getElementById("world").innerHTML = output
}

// Update Pac-Man POS
function updateCharacter(characterElement, charaterPOS){
    characterElement.style.top = charaterPOS.y*20+"px"
    characterElement.style.left = charaterPOS.x*20+"px"
}

// Moves ghost towards or away PacMan pending ghost status
function moveGhost(ghost,ghostPOS){
    let xORy = Math.floor(Math.random()*2)
    if(ghost.style.backgroundImage === 'url("./assets/edible.gif")'){
        if(xORy == 0){
            if(ghostPOS.y > characters.pacman.y && checkForWall(ghostPOS,"y",1)){
                ghostPOS.y++
                updateCharacter(ghost,ghostPOS)
            } else if(ghostPOS.y < characters.pacman.y && checkForWall(ghostPOS,"y",-1)){
                ghostPOS.y--
                updateCharacter(ghost,ghostPOS)
            }
        } else {
            if(ghostPOS.x > characters.pacman.x && checkForWall(ghostPOS,"x",1)){
                ghostPOS.x++
                updateCharacter(ghost,ghostPOS)
            } else if(ghostPOS.x < characters.pacman.x && checkForWall(ghostPOS,"x",-1)){
                ghostPOS.x--
                updateCharacter(ghost,ghostPOS)
            }
        }
    } else {
        if(xORy == 0){
            if(ghostPOS.y > characters.pacman.y && checkForWall(ghostPOS,"y",-1)){
                ghostPOS.y--
                updateCharacter(ghost,ghostPOS)
            } else if(ghostPOS.y < characters.pacman.y && checkForWall(ghostPOS,"y",1)){
                ghostPOS.y++
                updateCharacter(ghost,ghostPOS)
            }
        } else {
            if(ghostPOS.x > characters.pacman.x && checkForWall(ghostPOS,"x",-1)){
                ghostPOS.x--
                updateCharacter(ghost,ghostPOS)
            } else if(ghostPOS.x < characters.pacman.x && checkForWall(ghostPOS,"x",1)){
                ghostPOS.x++
                updateCharacter(ghost,ghostPOS)
            }
        }
    }
}

// Stops charaters from moving through walls
function checkForWall(charaterPOS,axis,direction){
    if(axis == 'x'){
        return worldArr[charaterPOS.y][charaterPOS.x+direction] != 2
    } else if(axis == 'y'){
        return worldArr[charaterPOS.y+direction][charaterPOS.x] != 2
    }
}

// Actions for when PacMan hits ghost
function ghostCollision(ghost,ghostPOS){
    if(characters.pacman.x == ghostPOS.x && characters.pacman.y == ghostPOS.y){
        if(ghost.style.backgroundImage === 'url("./assets/edible.gif")'){
            ghostPOS.x = 11
            ghostPOS.y = 8
            ghost.style.backgroundImage = `url(./assets/${ghostPOS.id}.gif)`
            score += 1000
            scoreboard.innerText = score
        } else {
            characters.pacman.x = 1
            characters.pacman.y = 1
            characters.pacman.lives--
            updateCharacter(pacman,characters.pacman)
            displayLifeCount()
            gameOver()
        }
    }
}

// Turn ghost into edibles!!!
function eatCherry(){
    console.log('eat cherry');
    red.style.backgroundImage = "url(./assets/edible.gif)";
    orange.style.backgroundImage = "url(./assets/edible.gif)";
    setTimeout(function(){
        red.style.backgroundImage = "url(./assets/red.gif)";
        orange.style.backgroundImage = "url(./assets/orange.gif)";
    },10000)
}

// Builds life display box
function displayLifeCount(){
    let displayLives = ""
    document.querySelector("#lives").innerHTML = displayLives
    for(let i=0; i<characters.pacman.lives; i++){
        displayLives += '<div class="life"></div>'
    }
    document.querySelector("#lives").innerHTML = displayLives
}

// ends game when lives hit 0
function gameOver(){
    if(characters.pacman.lives == 0){
        document.getElementById("container").innerHTML = '<div id="gameOver"><h1>Game Over</h1><button onclick="location.reload()">restart</button></div>'
    }
}

// User Inputs
document.onkeydown = function(e){
    if(e.keyCode==37 && checkForWall(characters.pacman,'x',-1)){
        characters.pacman.x--
        pacman.style.transform = 'rotate(180deg)'
    }
    if(e.keyCode==38 && checkForWall(characters.pacman,'y',-1)){
        characters.pacman.y--
        pacman.style.transform = 'rotate(-90deg)'
    }
    if(e.keyCode==39 && checkForWall(characters.pacman,'x',1)){
        characters.pacman.x++
        pacman.style.transform = 'rotate(0deg)'
    }
    if(e.keyCode==40 && checkForWall(characters.pacman,'y',1)){
        characters.pacman.y++
        pacman.style.transform = 'rotate(90deg)'
    }
    updateCharacter(pacman,characters.pacman)
    if(worldArr[characters.pacman.y][characters.pacman.x] == 1){
        score += 20
    } else if(worldArr[characters.pacman.y][characters.pacman.x] == 3){
        score += 50
        eatCherry()
    }
    worldArr[characters.pacman.y][characters.pacman.x] = 0
    scoreboard.innerText = score
    displayWorld()
}

// Sets Up Game
displayWorld()
updateCharacter(red,characters.red)
updateCharacter(orange,characters.orange)
displayLifeCount()

// Puts ghost in motion
setInterval(function (){
    moveGhost(red,characters.red)
    moveGhost(orange,characters.orange)
    ghostCollision(red,characters.red)
    ghostCollision(orange,characters.orange)
},200)