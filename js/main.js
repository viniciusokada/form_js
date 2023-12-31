const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    
    event.preventDefault();

    if(nameInput.value === "") { 
        alert("Please, fill your name");
        return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)) { 
        alert("Please, fill your email");
        return;
    }

    if(!isPasswordValid(passwordInput.value, 8)) {
        alert("The password needs the mminimum of 8 digits");
        return;
    }

    if(jobSelect.value === "") {
        alert("Please, choose your job situation");
        return;
    }

    if(messageTextarea.value === "") {
        alert("Please, Write your message");
        return;
    }
    
    
    form.submit();
});

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

function isPasswordValid(password, minDigits) {
    if (password.length >= minDigits) {
        return true;
    }

    return false;
}
