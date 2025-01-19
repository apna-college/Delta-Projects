let adminData = JSON.parse(localStorage.getItem("adminData"));
let productsArray = JSON.parse(localStorage.getItem("productsArray"));
let index = new URLSearchParams(window.location.search).get("index");

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

Fullpageload();

function Fullpageload() {
  let html = `
    <div class="box1">
        <div class="logo"><img src="../images/M_h_logo.png" class="img_logo"></div>
        <div class="logo_h1"><h1>Welcome ${adminData[index].name}</h1></div>
    </div>

    <div class="box2">
        <h1 class="box2_h1">Admin Panel</h1>
        <div class="ancher_tags">
            <div class="home">Home</div>
            <p class="products">Products</p>
            <p class="orders">Orders</p>
        </div>
        <button class="Logout js_button_logout">Logout</button>
    </div>

    <div class="home_page">
    </div>
    `;

  document.querySelector("body").innerHTML = html;
}

function loadHome() {
  let home_html = `
    <h1>DASHBOARD</h1>
    <div class="total_boxes">
        <div class="total_pendings boxes"><h1>$122/-</h1><button class="Logout">total pendings</button></div>
        <div class="completedpayment boxes"><h1>$0/-</h1><button class="Logout">completed payments</button></div>
        <div class="orderplaced boxes"><h1>1</h1><button class="Logout">order placed</button></div>
        <div class="totalproducds boxes"><h1>8</h1><button class="Logout">products added</button></div>
    </div>
    `;

  document.querySelector(".home_page").innerHTML = home_html;
  document.querySelector(".home").addEventListener("click", () => {
    loadHome();
  });
}

function loadPage() {
  let add_product_html = "";
  let products_html = "";
  add_product_html = `
            <div class="add_products">
                <input type="text" name="" class="Name inputs" placeholder="Product Name">
                <input type="text" class="Price inputs" placeholder="Product Price">
                <select name="" id="catagories">
                    <option value="">--Select Product Categories--</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Games">Games</option>
                    <option value="Electronics">Electronics</option>
                </select>
                <input type="file" name="choose" id="files">
                <button class="add_products_button Logout">Add Products</button>
            </div>
            <div class="products_grid">
            </div>
        `;
  productsArray[index].forEach((data) => {
    products_html += `
                <div class="products_boxes">
                    <img src="${data.image}" alt="" class="boxes_images">
                    <div class="Product_details">
                        <p class="P_p">Name : ${data.name}</p>
                        <p class="P_p">Price : ${data.price}</p>
                    </div>
                    <div class="Product_buttons">
                        <button class="delete Logout">DELETE</button>
                        <button class="update Logout">UPDATE</button>
                    </div>
                </div>
            `;
  });
  document.querySelector(".home_page").innerHTML = add_product_html;
  document.querySelector(".products_grid").innerHTML = products_html;
  getProductDetail();
  loadProducts();
}

function loadProducts() {
  document.querySelector(".products").addEventListener("click", () => {
    loadPage();
  });
}

function getProductDetail() {
  let id = makeid(20);
  document
    .querySelector(".add_products_button")
    .addEventListener("click", () => {
      let name = document.querySelector(".Name").value;

      let price = document.querySelector(".Price").value;
      let select = document.querySelector("#catagories");
      let select_catagorie = select.options[select.selectedIndex].text;
      let image = "mm";

      function imageData() {
        let img = document.querySelector("#files");
        let files = img.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(files);

        reader.addEventListener("load", () => {
          image = reader.result;
        });
      }

      imageData();
      setTimeout(() => {
        productsArray[index].push({
          id: id,
          catagory: select_catagorie,
          image: `${image}`,
          name: name,
          price: price,
          shippingId: 0,
          tax: 0,
        });
        localStorage.setItem("productsArray", JSON.stringify(productsArray));
        loadPage();
      }, 200);
    });
}
document.querySelector(".js_button_logout").addEventListener("click", () => {
  alert("Logout");
  window.location.href = "../../login_page/login_page.html";
});

loadHome();
loadProducts();
