function nameChange(){
    document.querySelector("#card-content h2").innerText = "Legend Gary"
}

function handleConnection(el,accepted){
    let requests = document.querySelector("#requests h3 span")
    let requestInt = parseInt(requests.innerText)
    let connections = document.querySelector("#your-connections h3 span")
    let connectionsInt = parseInt(connections.innerText)
    requestInt--
    requests.innerText = requestInt
    el.parentElement.parentElement.remove()

    noNewRequest(requestInt)
    addToConnection(accepted,connections,connectionsInt)
}


function addToConnection(accepted,connections,connectionsInt){
    if(accepted){
        connectionsInt++
        connections.innerText = connectionsInt
    }
}


// This is extra
function noNewRequest(num) {
    if(num == 0) {
        let newEl = document.createElement('li')
        let msg = document.createTextNode("No New Requests")
        newEl.appendChild(msg)
        document.querySelector("#requests ul").appendChild(newEl)
    }
}