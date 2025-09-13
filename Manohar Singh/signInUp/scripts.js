function toggleForm(formType) {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    
    if (formType === 'signIn') {
        signInForm.classList.add('active');
        signUpForm.classList.remove('active');
        signInBtn.classList.add('active');
        signUpBtn.classList.remove('active');
    } else if (formType === 'signUp') {
        signUpForm.classList.add('active');
        signInForm.classList.remove('active');
        signUpBtn.classList.add('active');
        signInBtn.classList.remove('active');
    }
}
