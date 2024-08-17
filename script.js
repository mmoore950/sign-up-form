const pwdInput = document.getElementById('pwd');
const confirmPwdInput = document.getElementById('confirm-pwd');

pwdInput.addEventListener('input', () => {
    confirmPwdInput.pattern = pwdInput.value; // Set the pattern to match the password
});

function checkPasswordMatch() {
    const errorMessage = document.getElementById('error-message');

    if (confirmPwdInput.value !== pwdInput.value) {
        errorMessage.style.display = 'inline';
        confirmPwdInput.setCustomValidity("Passwords do not match")
    } else {
        errorMessage.style.display = 'none'
        confirmPwdInput.setCustomValidity('')
    }
}