let Cart = JSON.parse(localStorage.getItem("Cart"));
let productsArray = JSON.parse(localStorage.getItem("productsArray"));
let index = new URLSearchParams(window.location.search).get("index");
let userData = JSON.parse(localStorage.getItem("userData"));

// login check
if (index == null) {
  alert("Login first");
  window.location.href = "../login_page/login_page.html";
}

if (productsArray.length == 0) {
  productsArray.push([]);
}

// both nav bar
function nav1_2_and_Sildebar() {
  let html = `
    <div class="nav" id="back_to_top">
        <div class="logo"><img src="../images/M_h_logo.png" alt="Amazon logo" class="amazon_logo"></div>
        <div class="location">
            <div class="location_logo">
                <span class="material-symbols-outlined">
                    location_on
                </span>
            </div>
            <p class="location_contant">Deliver to <span class="india">India</span></p>
        </div>
        <div class="Search_bar">
            <div class="select_cont">
                <select name="" id="select">
                    <option value="" class="nav_options">All</option>
                    <option value="" class="nav_options">india</option>
                    <option value="" class="nav_options">india</option>
                    <option value="" class="nav_options">india</option>
                    <option value="" class="nav_options">india</option>
                    <option value="" class="nav_options">india</option>
                    <option value="" class="nav_options">india</option>
                    <option value="" class="nav_options">india</option>
                    <option value="" class="nav_options">india</option>
                    <option value="" class="nav_options">india</option>
                    <option value="" class="nav_options">india</option>
                    <option value="" class="nav_options">india</option>
                </select>
                <div class="select_icon">
                    <span class="material-symbols-outlined">
                        arrow_drop_down
                    </span>
                </div>
            </div>
            <input type="text" placeholder="Search M.H Avenue" class="Search_bar_search">
            <div class="search_logo">
                <span class="material-symbols-outlined">
                    search
                </span>
            </div>
        </div>
        <div class="language">
            <i class="material-symbols-outlined">
                flag_2
            </i>
            <p class="language_p">
                EN
            </p>
            <span class="material-symbols-outlined">
                arrow_drop_down
            </span>
        </div>
        <div class="language_contant">
            <p class="Change_language">Change Language <a href="#">Learn more</a></p>
        </div>
        <div class="blur"></div>
        <div class="sign_in">
            <p class="sign_in_p1">Hello, sign in</p>
            <p class="sign_in_p2">Account & Lists</p>
            <span class="material-symbols-outlined">
                    arrow_drop_down
                     </span>
    </div>
    <div class="sign_in_content">
        <button class="sign_in_content_button">Sign in</button>
        <span>New Customer? <a href="#">Start here</a></span>
        <hr>
        <div class="sign_in_content_main">
            <div class="your_list">
                <h3>Your List</h3>
                <a href="#">Create a List</a>
                <a href="#">Find a List or Registry</a>
            </div>
            <hr class="hr2">
        </div>
    </div>
    <div class="sign_in_blur"></div>
    <div class="returns">
        <p class="return_1">Returns</p>
        <p class="return_2">& Orders</p>
    </div>
    <div class="cart js_cart">
        <p class="cart_number">0</p>
        <img src="../images/icons/cart-icon.png" class="cart_image">
        <p class="cart_content">Cart</p>
        </div>
    </div>
    <div class="nav2">
        <ul>
            <div class="btn_one">
                <label for="side_bar"><span class="material-symbols-outlined">menu</span><p>All</p></label>
            </div>
                <li><a href="#">Today's Deal</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Registry</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Sell</a></li>
        </ul>
    <div class="user_content">
        <p>User Details :</p>
        <p class="name">Name : ${userData[index].name}</p>
        <p class="Email">Email : ${userData[index].email}</p>
    </div>
    <span class="material-symbols-outlined img_logout">
        logout
    </span>
    </div>
    <input type="checkbox" id="side_bar">
    <div class="side_bar_main">
        <div class="side_bar_sign">
            <span class="material-symbols-outlined">person</span>
            <p class="side_sign_p">Hello, sign in</p>
            <label for="side_bar">
                <i class="material-symbols-outlined">close</i>
            </label>
        </div>
    <!-- Digital Content & Device -->
    <div class="contant_side">
        <h3 class="side_h3">Digital Content & Device</h3>
        <ul>
            <li>Avenue Music <span class="material-symbols-outlined">chevron_right</span></li>
            <li>Kindle E-readers & books <span class="material-symbols-outlined">chevron_right</span></li>
            <li>Avenue Appstore <span class="material-symbols-outlined">chevron_right</span></li>
        </ul>
    </div>
    <hr>
    <!-- Shop By Department -->

    <div class="contant_side">
        <h3 class="side_h3">Shop By Department</h3>
        <ul>
            <li>Electronics <span class="material-symbols-outlined">chevron_right</span></li>
            <li>Computer <span class="material-symbols-outlined">chevron_right</span></li>
            <li>Smart home <span class="material-symbols-outlined">chevron_right</span></li>
            <li>Arts & Crafts<span class="material-symbols-outlined">chevron_right</span></li>
            <li>See All <span class="material-symbols-outlined">chevron_right</span></li>
        </ul>
    </div>
    <hr>
    <!-- Program and Features -->
    <div class="contant_side">
        <h3 class="side_h3">Program and Features</h3>
        <ul>
            <li>Gift Cart <span class="material-symbols-outlined">chevron_right</span></li>
            <li>Shop by Internet <span class="material-symbols-outlined">chevron_right</span></li>
            <li>Avenue Live <span class="material-symbols-outlined">chevron_right</span></li>
            <li>International Shopping <span class="material-symbols-outlined">chevron_right</span></li>
            <li>Sell all <span class="material-symbols-outlined">chevron_right</span></li>
        </ul>
    </div>
    <hr>
    <!-- Help and Settings -->
    <div class="contant_side">
        <h3 class="side_h3">Help and Settings</h3>
        <ul>
            <li>Your Account <span class="material-symbols-outlined">chevron_right</span></li>
            <li>English<span class="material-symbols-outlined">chevron_right</span></li>
            <li>Indic<span class="material-symbols-outlined">chevron_right</span></li>
            <li>Customer Services<span class="material-symbols-outlined">chevron_right</span></li>
            <li>Sign in<span class="material-symbols-outlined">chevron_right</span></li>
        </ul>
    </div>
    <hr>
    </div>
`;
  document.querySelector(".tops").innerHTML = html;
  Homepage();
  Cart_number(Cart[index]);

  document.querySelector(".js_cart").addEventListener("click", () => {
    window.location.href = `../Cart/checkout.html?index=${index}`;
  });
  document.querySelector(".logo").addEventListener("click", () => {
    window.location.href = `../home/home.html?index=${index}`;
  });

  document.querySelector(".img_logout").addEventListener("click",()=>{
    let a = confirm("Are you sure you want to logout?");
        a?(window.location.href = "../login_page/login_page.html") : null;
});
 
}

// update cart quantity
function Cart_number() {
  let cart_number = 0;
  Cart[index].forEach((data) => {
    cart_number += data.quantity;
  });
  document.querySelector(".cart_number").innerHTML = cart_number;
}

// generate home page
function Homepage() {
  let html = `
    <div class="slide_wrapper">
        <div class="slide">
            <img src="../images/slide/slide 3.jpg" id="slide1" class="slide_images">
        </div>
        <div class="slide_nav">
        </div>
    </div>
    <div class="main_content1">
        <p>You are on M.H Avenue.com. You can also shop on M.H Avennu India for millions of products with fast local delivery. <a href="https://www.amazon.com/">Click here to go to M.H Avenue.in</a></p>
    </div>
    <div class="flex1">
        <div class="flex1_1" id="Games">
            <h2>Gaming accessories</h2>
            <img src="../images/home_page_images/games.png" alt="">
            <a href="#" class="Games">See more</a>
        </div>
        <div class="flex1_1" id="Electronics">
            <h2>Refresh your space</h2>
            <img src="../images/home_page_images/electronis.png" alt="">
            <a href="#" class="Electronies">See more</a>
        </div>
        <div class="flex1_1" id="Clothes">
            <h2>Shop deals in Fashion</h2>
            <img src="../images/home_page_images/clothes.png" alt="" id="Clothes">
            <a href="#" class="Clothes">See all deals</a>
        </div>
        <div class="flex1_1" id="PCs">
            <h2>Deals in PCs</h2>
            <img src="../images/home_page_images/pc.jpg" alt="">
            <a href="#">Shop now</a>
        </div>
    </div>
    <div class="flex2">
        <div class="flex1_1" id="under_25">
            <h2>Toys under $25</h2>
            <img src="../images/home_page_images/under25.png" alt="">
            <a href="#">Shop now</a>
        </div>
        <div class="flex1_1" id="Fashion_acc">
            <h2>Fashion trends you like</h2>
            <img src="../images/home_page_images/fashion.png" alt="">
            <a href="#">Explore more</a>
        </div>
        <div class="flex1_1" id="Beauty">
            <h2>Beauty steals under $25</h2>
            <img src="../images/home_page_images/clothes men.jpg" alt="">
            <a href="#">Shop now</a>
        </div>
        <div class="flex1_1" id="Home">
            <h2>Home decoration under $50</h2>
            <img src="../images/home_page_images/home deco.png" alt="">
            <a href="#">Shop now</a>
        </div>
</div>
<div class="main_signin">
    <p>See personalized recommendations</p>
    <button>Sign in</button>
    <span>New Customer? <a href="#">Start here</a></span>
</div>

<div class="top_bookmark">
    <a href="#back_to_top">Back to Top</a>
</div>

<div class="links">
    <h1 class="contact">Contacts Details</h1>
    <div class="facebook">
        <img src="../images/facebook.jpg" alt="" class="contact_images">
        <h1 class="contact_h1">Facebook.com</h1>
    </div>
    <div class="facebook">
        <img src="../images/google+.png" alt="" class="contact_images">
        <h1 class="contact_h1">Google.com</h1>
    </div>
    <div class="facebook">
        <img src="../images/linkdin.png" alt="" class="contact_images">
        <h1 class="contact_h1">Linkdin.com</h1>
    </div>
    <h1 class="contact">Maaz Hanfi</h1>
</div>

`;
  document.querySelector(".main").innerHTML = html;
  arrayproducts();
  slideimages();
}

// calling generateproduct here
function arrayproducts() {
  let products = [];

  document.querySelectorAll(".flex1_1").forEach((data) => {
    data.addEventListener("click", (event) => {
      let matching;
      matching =
        event.target.parentElement.parentElement.id ||
        event.target.parentElement.id ||
        event.target.id;
      productsArray.forEach((data) => {
        data.forEach((data) => {
          if (data.catagory == matching) {
            products.push(data);
          }
        });
        GenerateProducts(products);
      });
    });
  });
}

nav1_2_and_Sildebar();

// click to show specific product
function GenerateProducts(products) {
  let html = "";
  let product_grid = `<div class="products_grid"></div>`;
  let not_found = `<div class="notFound"><h1 class="notFound_h1">No Product Found</h1></div>`;
  products.forEach((datas) => {
    html += `
        <div class="products_boxes">
            <img src="${datas.image}" alt="Product Image" class="boxes_images">
            <div class="Product_details">
                <p class="p_p">Name : ${datas.name}</p>
                <p class="p_p">Price : ${datas.price}</p>
            </div>
            <div class="Product_buttons">
                <button class="add_to_cart Logout" data-product-id="${datas.id}">Add to Cart</button>
            </div>
        </div>
        `;
  });

  document.querySelector(".main").innerHTML = product_grid;
  document.querySelector(".products_grid").innerHTML = html || not_found;
  add_to_cart();
}

// click to add product in the cart
function add_to_cart() {
  productsArray.forEach((data1) => {
    data1.forEach((data2) => {
      data2.quantity = 1;
    });
    localStorage.setItem("productsArray", JSON.stringify(productsArray));
  });
  document.querySelectorAll(".add_to_cart").forEach((Add) => {
    Add.addEventListener("click", () => {
      let check = false;
      let matching;
      Cart[index].forEach((product) => {
        if (Add.dataset.productId == product.id) {
          check = true;
          matching = product;
        }
      });

      if (check == true) {
        matching.quantity += 1;
        localStorage.setItem("Cart", JSON.stringify(Cart));
        Cart_number();
      } else {
        productsArray.forEach((data) => {
          data.forEach((data2) => {
            if (Add.dataset.productId == data2.id) {
              matching = data2;
            }
          });
        });
        Cart[index].push(matching);
        localStorage.setItem("Cart", JSON.stringify(Cart));
        Cart_number();
      }
    });
  });
}

// home page image silder
function slideimages() {
  let reset = false;
  let num = 1;
  let a = document.querySelector(".slide_images");
  setInterval(() => {
    a.src = `../images/slide/slide ${num}.jpg`;
    num++;
    if (num == 5) {
      num = 1;
    }
  }, 3000);
}

// go to orders page
document.querySelector('.returns').addEventListener('click',()=>{
  window.location.href = `../Cart/orders.html?index=${index}`;
})