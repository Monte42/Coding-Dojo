


async function getWeather(el){
    let city = el.innerText
    var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=019a90ffa808e20b88dacf340e905e65`)
    data = await response.json()
    console.log(data);
    temp = Math.floor(data.main.temp - 273.15)
    $('select').val('c')
    $('#daily').html(`
    <div class="col">
        <h3>Current Weather in ${city}</h3>
        <img src="./assets/${data.weather[0].main}.png" alt="Rain">
        <p>${data.weather[0].main}</p>
        <div>
            <span class="high"><span class="temp">${temp}</span>&deg;</span>
        </div>
    </div>
    `)

}




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