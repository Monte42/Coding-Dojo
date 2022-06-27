function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

// every min the sec rotates 360 deg so thats 6 deg per sec
// there are 3600 sec in an hour so ever sec the min hand rotates 0.1 deg
// the hour hand makes two rotations per day and there are 86,400 sec in a day
// so we make a full rotation in half that.
// this means the hour hand rotates 0.008333 deg per sec.
//by defalut the hands point to 6 at 0 degrees so we much ad 180 degrees

setInterval( function() {
    let time = getSecondsSinceStartOfDay()
    document.getElementById("hour").style.transform = `rotate(${180+(time*.00833)}deg)`
    document.getElementById("minutes").style.transform = `rotate(${180+(time*.1)}deg)`
    document.getElementById("seconds").style.transform = `rotate(${180+(time*6)}deg)`
}, 1000);
