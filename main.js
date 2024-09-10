let passInput = document.getElementsByName("PasswordInput")[0];
let repassInput = document.getElementsByName("RePasswordInput")[0];
let submitButton = document.getElementsByName("SubmitButton")[0];

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (passInput.value !== repassInput.value) {
        alert("Passwords do not match");
    } else {
        alert("Registration successful");
    }
});
