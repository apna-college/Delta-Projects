let userData = JSON.parse(localStorage.getItem("userData"));
let adminData = JSON.parse(localStorage.getItem("adminData"));
let ownerData = JSON.parse(localStorage.getItem("ownerData"));
let productsArray = JSON.parse(localStorage.getItem("productsArray"));
let Cart = JSON.parse(localStorage.getItem("Cart"));
let order = JSON.parse(localStorage.getItem("orders"));

function loadUser() {
    let userHTML = "";
    let user_id = 0;
    userData.forEach((userData) => {
        userHTML += `
        <div class="user_data">
            <div class="Profile_pic"></div>
            <p>Username : ${userData.name}</p>
            <p>${userData.email}</p>
            <button data-user-number="${user_id}" class="js_button_user">Delete Account</button>
        </div>`;
        user_id++;
    });
    document.querySelector(".user_account").innerHTML = userHTML;
    document.querySelector(".user_count").innerHTML = userData.length;

    document.querySelectorAll(".js_button_user").forEach((buttons) => {
        buttons.addEventListener("click", () => {
            let ask = prompt("Please type [YES] for confirmation");
            if (ask == "YES") {
                userData.splice(Number(buttons.dataset.userNumber), 1);
                Cart.splice(Number(buttons.dataset.userNumber), 1);
                loadUser();
                order = [];
                localStorage.setItem("orders", JSON.stringify(order));
                localStorage.setItem("userData", JSON.stringify(userData));
                localStorage.setItem("Cart", JSON.stringify(Cart));
            } else {
                alert("Please type YES in capital letters for Delete");
            }
        });
    });
}

function loadAdmin() {
    let adminHTML = "";
    let admin_id = 0;
    adminData.forEach((adminData) => {
        adminHTML += `
        <div class="user_data">
            <div class="Profile_pic"></div>
            <p>Username : ${adminData.name}</p>
            <p>${adminData.email}</p>
            <button data-admin-number="${admin_id}" class="js_button_admin">Delete Account</button>
        </div>`;
        admin_id++;
    });
    document.querySelector(".admin_account").innerHTML = adminHTML;
    document.querySelector(".admin_count").innerHTML = adminData.length;

    document.querySelectorAll(".js_button_admin").forEach((buttons) => {
        buttons.addEventListener("click", () => {
            let ask = prompt("Please type [YES] for confirmation");

            if (ask == "YES") {
                adminData.splice(Number(buttons.dataset.adminNumber), 1);
                productsArray.splice(Number(buttons.dataset.adminNumber), 1);
                loadAdmin();
                localStorage.setItem("adminData", JSON.stringify(adminData));
                localStorage.setItem("productsArray", JSON.stringify(productsArray));
            } else {
                alert("Please type yes in capital letter for Delete");
            }
        });
    });
}
            
            // owner Function {
            function loadOwner() {
                let ownerHTML = "";
                ownerData.forEach((ownerData) => {
                    ownerHTML += `
                    <div class="logo_box">
                        <div class="logo"></div>
                        <div class="welcome"><h1 class="logo_h1">Welcome ${ownerData.name}</h1></div>
                    </div>
                    <div class="box1_details">
                        <p>Name: ${ownerData.name}</p>
                        <p>Email: ${ownerData.email}</p>
                        <button class="Logout_owner">Logout</button>
                    </div>
                    `;
                });
                document.querySelector(".box1").innerHTML = ownerHTML;
            
                document.querySelector(".Logout_owner").addEventListener("click", () => {
                    alert("Logout");
                    window.location.href = "../login_page/login_page.html";
                });
            }
            
            loadOwner();
            loadUser();
            loadAdmin();
            
