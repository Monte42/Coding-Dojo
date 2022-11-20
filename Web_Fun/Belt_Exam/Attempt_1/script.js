// Global Variables
var leader = document.getElementsByClassName("leader")

// Initializing the timers
const game = setTimeout(endGame, 13100)
const gameTime = setInterval(changeTimer,1000)

// Allerts who won the game and stops the game timer
function endGame() {
    alert(`The ${leader[1].innerText} have won!`)
    clearInterval(gameTime)
}

// Updates the time remaininer on the score board
function changeTimer() {
    let time = document.getElementById("time")
    let remainingTime = parseInt(time.innerText)
    remainingTime--
    time.innerText = remainingTime
}

//Removes the "subscribe" button
function removeEl(){
    document.getElementById("subscribe").remove()
}

// Increase the corresponding team points by on, both in live
// and on the score board
function addPoints(el){
    let teamScore = document.getElementsByClassName(el.className)
    let currentScore = parseInt(teamScore[1].innerText)
    currentScore++
    teamScore[0].innerText = currentScore
    teamScore[1].innerText = currentScore
    switchLeader()
}

// Switch who is leading both in the score board header and
// in the top stories board
function switchLeader() {
    let ninjaScore = parseInt(document.getElementsByClassName("ninja-score")[1].innerText)
    let pirateScore = parseInt(document.getElementsByClassName("pirate-score")[1].innerText)
    let trailer = document.getElementById("trailer")
    
    if(ninjaScore>pirateScore){
        leader[0].innerText = "Ninjas"
        leader[1].innerText = "Ninjas"
        trailer.innerText = "Pirates"
    } else {
        leader[0].innerText = "Pirates"
        leader[1].innerText = "Pirates"
        trailer.innerText = "Ninjas"
    }
}