const form = document.getElementById("form");
const name = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const comments = document.getElementById("comments");
const areaCode = document.getElementById("area-code")
const telNumber = document.getElementById("phone");
const date = document.getElementById("date");
const submitButton = document.getElementById("button");
submitButton.disabled = true;

name.oninput = function(event) {
    if (event.target.name.length > 1)   
    submitButton.disabled = false;   
};


form.addEventListener("submit", (event) => {    
    event.preventDefault();    
   
    console.log("First name:",name.value);
    console.log("Last name:",lastName.value);
    console.log("Email:",email.value);
    console.log("Comment:",comments.value);
    console.log("Telephone number:", areaCode.value + phone.value);
    console.log("Call back on:", date.value);
});