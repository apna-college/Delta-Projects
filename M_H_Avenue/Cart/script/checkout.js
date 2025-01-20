import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
let Cart = JSON.parse(localStorage.getItem('Cart'));
let orders = JSON.parse(localStorage.getItem('orders'));
let index = new URLSearchParams(window.location.search).get('index');

// check in page url null or not
if(index == null){
    window.location.href = '../home/home.html';
}

// save to local storage
function Savetocart(){
    localStorage.setItem('Cart', JSON.stringify(Cart))
    localStorage.setItem('orders', JSON.stringify(orders))

}

// return Dates
function Dates(){
  let total_date = []
  let today = dayjs();
  let date  = today.add(8,'days').format('dddd, MMMM D')
  let date_3  = today.add(5,'days').format('dddd, MMMM D')
  let date_7  = today.add(3,'days').format('dddd, MMMM D')

  total_date.push(date,date_3,date_7)
  return total_date;
}

// order box genertaor
function order_summary(){
  let radio_num = 0;
  let html = ``;
  Cart[index].forEach((product)=>{

    let date = '';
    if (product.shippingId ==0) {
      date = Dates()[0]
    } else if(product.shippingId == 4.99) {
      date = Dates()[1]
    }
    else{
      date = Dates()[2]
    }

    html += `
        <div class="cart-item-container" data-product-num="${radio_num}">
            <div class="delivery-date">
              Delivery date: ${date}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${product.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${product.name}
                </div>
                <div class="product-price">
                  $${product.price}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${product.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary btn-grad">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary btn-grad">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" ${product.shippingId==0?"checked":null}
                    class="delivery-option-input"
                    data-delivery-price="0"
                    name="delivery-option-${radio_num}">
                  <div>
                    <div class="delivery-option-date">
                      ${Dates()[0]}
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" ${product.shippingId==4.99?"checked":null}
                    class="delivery-option-input"
                    data-delivery-price="4.99"
                    name="delivery-option-${radio_num}">
                  <div>
                    <div class="delivery-option-date">
                      ${Dates()[1]}
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" ${product.shippingId==9.99?"checked":null}
                    class="delivery-option-input"
                    data-delivery-price="9.99"
                    name="delivery-option-${radio_num}">
                  <div>
                    <div class="delivery-option-date">
                    ${Dates()[2]}
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
    radio_num++;
  })   
  document.querySelector('.order-summary').innerHTML = html;
  delivery_charges();
  delet_from_cart();
  update_cart_item();
  update_checkout();
}

// check cart has product or not
function cart_check(){
if (Cart[index].length ==0) {
  let html = `
    <h1 class="not_product"> No Product Added Yet!</h1>
  `;
  document.querySelector('.order-summary').innerHTML = html;
} else {
  order_summary();
}
}

payment_summary();

// payment box generator
function payment_summary(){
      let html = `
          <div class="payment-summary-title">
              Order Summary
            </div>
  
            <div class="payment-summary-row">
              <div>Items (${total_product_data().total_products}):</div>
              <div class="payment-summary-money">$${(total_product_data().total_price).toFixed(2)}</div>
            </div>
  
            <div class="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div class="payment-summary-money">$${(total_product_data().total_delivery_charges).toFixed(2)}</div>
            </div>
  
            <div class="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div class="payment-summary-money">$${(total_product_data().total_price+total_product_data().total_delivery_charges).toFixed(2)}</div>
            </div>
  
            <div class="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div class="payment-summary-money">$${((total_product_data().total_price+total_product_data().total_delivery_charges)/10).toFixed(2)}</div>
            </div>
  
            <div class="payment-summary-row total-row">
              <div>Order total:</div>
              <div class="payment-summary-money total_price">$${((total_product_data().total_price+total_product_data().total_delivery_charges)/10+total_product_data().total_price+total_product_data().total_delivery_charges).toFixed(2)}</div>
              </div>
  
            <button class="place-order-button button-primary btn-grad">
              Place your order
            </button>
      `;
  document.querySelector('.payment-summary').innerHTML = html;
  cart_check();
  place_order();
}

// return total_product_data
function total_product_data(){

  let total_Product_Data = {
    total_price : 0,
    total_delivery_charges : 0,
    total_products : 0,
  }

  Cart[index].forEach((product)=>{
    total_Product_Data.total_price += Number(product.price*product.quantity)
    total_Product_Data.total_products += product.quantity;
  })

  document.querySelectorAll('.delivery-option-input').forEach((price)=>{
    if(price.checked==true){
      total_Product_Data.total_delivery_charges += Number(price.dataset.deliveryPrice)
    }
  })
  return total_Product_Data;
}

    
// total deliver charges and radio button save
function delivery_charges(){
      let charge = 0;
      document.querySelectorAll('.delivery-option-input').forEach((price)=>{
        
      // radio number change and save
      price.addEventListener('click',()=>{
        let radio = Number(price.dataset.deliveryPrice)
        let product = Cart[index][Number(price.name.split('-')[2])]
        product.shippingId = radio;
        Savetocart();
        payment_summary();
      })
      
      // total_charge_calculate
      if(price.checked==true){
        charge += Number(price.dataset.deliveryPrice)
      }
    })
}

// update main checkout number
function update_checkout(){
  document.querySelector('.checkout_quantity').innerHTML = total_product_data().total_products;
}

// delet in cart
function delet_from_cart(){
  document.querySelectorAll('.delete-quantity-link').forEach((delet)=>{
    let product = Cart[index][(Number(delet.parentElement.parentElement.parentElement.childNodes[5].childNodes[3].childNodes[1].attributes[4].textContent
      .split('-')[2]))]
    delet.addEventListener('click',()=>{
      if(product.quantity>1){
        product.quantity -=1;
      }
      else{
        Cart[index].splice((Number(delet.parentElement.parentElement.parentElement.parentElement.dataset.productNum)) , 1);
      }
      Savetocart();
      order_summary();
      payment_summary();
      update_checkout();
    })
  })
}

// update in cart
function update_cart_item(){
  document.querySelectorAll('.update-quantity-link').forEach((update)=>{
    update.addEventListener('click',()=>{
      let product_pick = (Number(update.parentElement.parentElement.parentElement.childNodes[5].childNodes[3].childNodes[1].attributes[4].textContent
      .split('-')[2]))
        Cart[index][product_pick].quantity +=1
        Savetocart();
        order_summary();
        payment_summary();
        update_checkout();
    })
  })
}

// make order data and save to orders
function place_order(){
document.querySelector('.place-order-button').addEventListener('click',()=>{
  if(Cart[index].length === 0){
    document.querySelector('.not_product').innerHTML = `<h1 class="not_product">Please add product in Cart to proceed the orders </h1>` 
    document.querySelector('.not_product').classList.add('not_product_2');
  }
  else{
    let orderId = make_order_id(35);
    Cart[index].forEach((product)=>{
      product.orderId = orderId;
    })
    orders[index].push(Cart[index])
    Cart[index] = [];
    Savetocart();
    window.location.href = `./orders.html?index=${index}`
  }
})
}


// making order id
function make_order_id(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/?#@$%&";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

document.querySelector('.header-link').addEventListener('click',()=>{
  window.location.href = `../home/home.html?index=${index}`;
})