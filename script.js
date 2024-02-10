const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const span = document.querySelector("#no-match-message");

function checkPasswordValidity() {
    if (password.value === "" || password.value !== confirmPassword.value) {
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
        span.classList.add("no-match");
    } else {
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
        span.classList.remove("no-match");
    }
}

checkPasswordValidity();

password.addEventListener('change', checkPasswordValidity);
confirmPassword.addEventListener('change', checkPasswordValidity);