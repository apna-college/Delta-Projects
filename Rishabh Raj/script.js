const title = document.querySelector('#title');
const nameField = document.querySelector('#nameField');
const signinBtn = document.querySelector('#signinBtn');
const signupBtn = document.querySelector('#signupBtn');

signupBtn.addEventListener('click', function() {
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
})

signinBtn.addEventListener('click', function() {
    title.innerHTML = "Login";
    nameField.style.display = "none";
})