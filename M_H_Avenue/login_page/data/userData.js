import { message } from '../scripts/main.js';

export let userData = JSON.parse(localStorage.getItem('userData')) || [];
let Cart = JSON.parse(localStorage.getItem('Cart')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];

export function savetoUser() {
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('Cart', JSON.stringify(Cart));
    localStorage.setItem('orders', JSON.stringify(orders));
}

export function userCreate() {
    const username = document.querySelector('.js_input_username');
    const password = document.querySelector('.js_input_password');
    const email = document.querySelector('.js_input_email');
    document.querySelector('.btn-grad').addEventListener('click', () => {
        if (username.value === '' || password.value === '' || email.value === '') {
            message('Please fill all columns');
            email.value = '';
            password.value = '';
            username.value = '';
        } else {
            userData.push({
                name: username.value,
                email: email.value,
                password: password.value
            });
            Cart.push([

            ]);
            orders.push([

            ]);
            savetoUser();
            username.value = ''; password.value = ''; email.value = '';
            message('User Account Created successfully');
        }
    });
}
