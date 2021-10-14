const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
// Get values and trim
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    if(usernameValue === "") {
        // Show error message and add error class
        showError(username, "Username cannot be blank!");
    } else {
        // Show success message and add success class
        showSuccess(username);
    }

    if(emailValue === "") {
        // Show error message and add error class
        showError(email, "Email cannot be blank!");
    } else if(!email) {
        checkEmail();
    } else {
        // Show success message and add success class
        showSuccess(email);
    }

    if(passwordValue === "") {
        // Show error message and add error class
        showError(password, "Password cannot be blank!");
    } else if(passwordValue.length < 8) {
        showError(password, "Password is too short. Must be 8 characters atleast!");
    } else {
        // Show success message and add success class
        showSuccess(password);
    }

    if(password2Value === "") {
        // Show error message and add error class
        showError(password2, "Password cannot be blank!");
    } else if(password2Value !== passwordValue) {
        showError(password2, "Password does not match!");
    } else {
        // Show success message and add success class
        showSuccess(password2);
    }
    }

    

function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    //Add Error class
    formControl.className = "form-control error";
}

function showSuccess(input) {
    const formControl = input.parentElement;
    //Add success class
    formControl.className = "form-control success";
}

function checkEmail(email) { 
    //Get regex code from stack overflow to check if value is email
    return 2
}