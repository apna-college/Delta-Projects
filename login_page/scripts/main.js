import { pageData, slideButtons, slide_num } from "./slide.js";
import { savetoUser, userCreate, userData } from "../data/userData.js";
import { savetoAdmin, adminCreate, adminData } from "../data/adminData.js";
import { savetoOwner, ownerCreate, ownerData } from "../data/ownerData.js";
import { Login } from "../data/login.js";

let html = '';

export function loadPage(pageData){
    html = `
    <div class="Login_account">
        <div class="logo"><img class="logo_image" src="../images/M_h_logo.png" alt=""></div>
        <div class="content">
            <h1 class="login_h1">${pageData.h1}</h1>
            <p class="Login_para">${pageData.para}</p>
            <div class="social">
                <div class="social_logo">
                    <a href="#"><img src="../images/facebook.jpg" alt="facebook"></a>
                </div>
                <div class="social_logo">
                    <a href="#"><img src="../images/google+.png" alt="google"></a>
                </div>
                <div class="social_logo">
                    <a href="#"><img src="../images/linkdin.png" alt="linkdin"></a>
                </div>
            </div>
            <div class="or"><img src="../images/or_image.png" alt=""></div>
            <div class="inputs">
                <input type="text" class="js_input_username" placeholder=${pageData.p1 || 'Username'}>
                <input type="password" class="js_input_password" placeholder=${pageData.p3 || 'password'}>
                <input type="text" placeholder=${pageData.p2 || 'none'} class="username js_input_email">
                </div>
                <button class="btn-grad">${pageData.button}</button>
        </div>
        </div>
        <div class="right_box">
            <h1 class="right_box_h1">${pageData.box_h1}</h1>
            <p class="right_box_para">${pageData.box_para}</p>
            <button class="btn_right_button">${pageData.box_button}</button>
            <button class="btn_right_button admin_button">${pageData.box_button_admin}</button>
            <button class="btn_right_button owner_button">Owner Login Here</button>
        </div>
    `;
    document.querySelector('.main').innerHTML = html;
    
    slideButtons();
    
    if(slide_num == 0) { 
        Login();
    }
    
    if(slide_num == 1) { 
        userCreate(); 
    }
    
    if(slide_num == 2) { 
        ownerCreate(); 
    }
    
    if(slide_num == 3) { 
        adminCreate(); 
    }
}

loadPage(pageData);

savetoUser();
savetoAdmin();
savetoOwner();

export function message(message) { 
    document.querySelector('.alert_h1').innerHTML = message || "Welcome to M.H. Avenue , Here you can discover new products with effective prices";
    setTimeout(() => { 
        document.querySelector('.alert_h1').innerHTML = "Welcome to M.H. Avenue , Here you can discover new products with effective prices"; 
    }, 4000); 
}

message();
