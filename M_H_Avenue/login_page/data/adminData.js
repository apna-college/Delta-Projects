import { message } from "../scripts/main.js";

export let adminData = JSON.parse(localStorage.getItem('adminData')) || [];

let productsArray = JSON.parse(localStorage.getItem('productsArray')) || [];


export function savetoAdmin() {
    localStorage.setItem('adminData', JSON.stringify(adminData));
    localStorage.setItem('productsArray', JSON.stringify(productsArray));
}

export function adminCreate() {
    const username = document.querySelector('.js_input_username');
    const password = document.querySelector('.js_input_password');
    const email = document.querySelector('.js_input_email');

    document.querySelector('.btn-grad').addEventListener('click', () => {
        if(username.value === '' || password.value === '' || email.value === '') {
            message('Please fill all columns');
            username.value = '';
            password.value = '';
            email.value = '';
        } else {
            adminData.push({
                name: username.value,
                email: email.value,
                password: password.value
            });

            productsArray.push([]);

            savetoAdmin();
            username.value = '';
            password.value = '';
            email.value = '';
            message("Admin Account Created successfully");
        }
    });
}
