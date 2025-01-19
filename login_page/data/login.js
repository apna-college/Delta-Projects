import { userData } from './userData.js';
import { adminData } from './adminData.js';
import { message } from '../scripts/main.js';

export function Login(){
    const username = document.querySelector('.js_input_username');
    const password = document.querySelector('.js_input_password');

    let total_data = userData.length + adminData.length;

    document.querySelector('.btn-grad').addEventListener('click',() => {
        let v = 0;
        for(let i=0; i<total_data; i++){
            // debugger
            if(i < userData.length){
                console.log(userData[i])
                // user login check
                if(username.value === userData[i].name && password.value == userData[i].password){
                    message('Login User Successfully')
                    username.value = ''; password.value = '';
                    v = 1;
                    setTimeout(() => {
                        window.location.href = `../home/home.html?index=${i}`;
                    }, 2000);
                    break;
                }
            }

            if(i < adminData.length){
                // admin login check
                if(username.value === adminData[i].name && password.value == adminData[i].password){
                    message('Login Admin Successfully')
                    username.value = ''; password.value = '';
                    v = 1;
                    setTimeout(() => {
                        window.location.href = `../../admin_panel/admin.html?index=${i}`;
                    }, 2000);
                    break;
                }
            }
        }
        if(v==0){
            message('! Incorrect Please fill Details Carefully');
            username.value = ''; password.value = '';
        }
    });
}
