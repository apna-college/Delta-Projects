import { message } from "../scripts/main.js";

export let ownerData = JSON.parse(localStorage.getItem('ownerData'));

if(!ownerData) {
    ownerData = [
        {
            name: 'Maaz123',
            email: 'mohammadmaaz0799@gmail.com',
            password: 'Maaz@123',
        }
    ];
}

export function savetoOwner() {
    localStorage.setItem('ownerData', JSON.stringify(ownerData));
}

export function ownerCreate() {
    let v = 0;
    const username = document.querySelector('.js_input_username');
    const password = document.querySelector('.js_input_password');
    const email = document.querySelector('.js_input_email');

    document.querySelector('.btn-grad').addEventListener('click', () => {
        if (username.value === '' || password.value === '' || email.value === '') {
            message('Please fill all columns');
            username.value = ''; 
            password.value = ''; 
            email.value = '';
        } else {
            // Owner login check
            if (username.value === ownerData[0].name && password.value == ownerData[0].password && email.value === ownerData[0].email) {
                message('Login Successfully Welcome Owner');
                username.value = ''; 
                password.value = ''; 
                email.value = ''; 
                v = 1;
                setTimeout(() => {
                    window.location.href = "../../owner_panel/owner.html";
                }, 5000);
            }
            if (v == 0) {
                message("Incorrect details");
                username.value = ''; 
                password.value = ''; 
                email.value = '';
            }
        }
    });
}
