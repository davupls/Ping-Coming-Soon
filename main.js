const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const alertContainer = document.querySelector(".alert-message");

form.addEventListener("submit", function() {

    if (emailInput.value == "") {
        alertContainer.innerText = "Whoops! It looks like you forgot to add your email.";
        emailInput.style.border = "2px solid red";
    } else if (form.reportValidity()) {
        form.submit();
        emailInput.value = "";
        alertContainer.innerText = "";  
        emailInput.style.border = "2px solid black";
    } else {
        alertContainer.innerText = "Please provide a valid email address";
        emailInput.style.border = "2px solid red";
    }
})