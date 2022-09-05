async function getCoderData(){

    var user  = document.getElementById('user').value  // get text input value
    var response = await fetch(`https://api.github.com/users/${user}`)  // makes api request
    var coderData = await response.json() // converts data to json

    desiredData = document.getElementsByClassName('desired_data') // collects all checkboxes as a HTMLCollection
    var selected_data = [...desiredData] // converts HTML into an array
    userDict = {} // creates empty dict
    selected_data.forEach(el => {  // finnally able to use the "forEach"
        if (el.checked){ // checking to see if the checkbox is checked
            userDict[el.name] = coderData[el.name] // setting checkbox "name" as key in dict, then value = json."name"
        }
    });

    dataContainer = document.getElementById('coderData') // getting div to display coder info
    data = '' // create empty string for html

    if (coderData.name == undefined){ // Handels a non existing user
        data = `<h2>This User Does Not Exist</h2>`
    } else {
        for ( key in userDict ){ // iterate through dict by key
            if (key=='avatar_url'){ // check if key is user img
                data += `<img src="${userDict[key]}">` // add img to data for html
            } else {
                data += `<h2>${key}: ${userDict[key]}</h2>` // add rest of data to html
            }
        }
    }
    dataContainer.innerHTML = data // set data to html
}

