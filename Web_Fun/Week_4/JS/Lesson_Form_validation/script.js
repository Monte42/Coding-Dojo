let form = document.forms["register"]

function validateUser(fname,lname,email,pwd1,pwd2){
    if(fname == ""){
        alert("please enter first name")
    }
    if(lname == ""){
        alert("please enter last name")
    }
    if(email == ""){
        alert("please enter email")
    }
    if(pwd1 == ""){
        alert("please enter a password")
    }
    if(pwd2 == ""){
        alert("please confirm password")
    }
    if (pwd1 != pwd2 || pwd1.length < 8){
        alert('passwords do not match or are not 8 charaters in length')
    }
}



// targeting the submit btn to prevent the page refresh
document.getElementById("submit").addEventListener("click",
function(event){
    event.preventDefault()
    console.log(form.fname.value);
    validateUser(form.fname.value,form.lname.value,form.email.value,form.password1.value,form.password2.value)
})