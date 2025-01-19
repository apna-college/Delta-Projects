import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
let Cart = JSON.parse(localStorage.getItem('Cart'));
let orders = JSON.parse(localStorage.getItem('orders'));
let index = new URLSearchParams(window.location.search).get('index');

function order_container(){
  let order_header_html ='';
  let total_price = 0;
  orders[index].forEach((products)=>{
    let order_id = '';
    products.forEach((id)=>{
      order_id = id.orderId
      total_price += Number(id.price)
    })
    order_header_html += `
       <div class="order-container">
            
            <div class="order-header">
              <div class="order-header-left-section">
                <div class="order-date">
                  <div class="order-header-label">Order Placed:</div>
                  <div>${Dates()[3]}</div>
                </div>
                <div class="order-total">
                  <div class="order-header-label">Total:</div>
                  <div>$${total_price}</div>
                </div>
              </div>
  
              <div class="order-header-right-section">
                <div class="order-header-label">Order ID:</div>
                <div>${order_id}</div>
              </div>
            </div>
  
            <div class="order-details-grid">
  
            </div>
          </div>
    `;
  })
  document.querySelector('.orders-grid').innerHTML = order_header_html;
}


function Dates(){
  let total_date = []
  let today = dayjs();
  let today_date  = today.add(0,'days').format('dddd, MMMM D')
  let date  = today.add(8,'days').format('dddd, MMMM D')
  let date_3  = today.add(5,'days').format('dddd, MMMM D')
  let date_7  = today.add(3,'days').format('dddd, MMMM D')

  total_date.push(date,date_3,date_7,today_date)
  return total_date;
}


function order_container_items(){
  let num = 0;
    document.querySelectorAll('.order-details-grid').forEach((items)=>{
      let html = ``;
      orders[index][num].forEach((product)=>{
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
        <div class="product-image-container">
                  <img src="${product.image}">
                </div>
    
                <div class="product-details">
                  <div class="product-name">
                    ${product.name}
                  </div>
                  <div class="product-delivery-date">
                    Arriving on: <b>${date}</b>
                  </div>
                  <div class="product-quantity">
                    Quantity: ${product.quantity}
                  </div>
                  <button class="buy-again-button button-primary btn-grad">
                    <img class="buy-again-icon" src="../images/icons/buy-again.png">
                    <span class="buy-again-message">Buy it again</span>
                  </button>
                </div>
    
                <div class="product-actions">
                  <a>
                    <button class="track-package-button button-secondary" data-image=${product.id} data-shipping-id=${product.shippingId} data-index=${index} data-quantity=${product.quantity} >
                      Track package
                    </button>
                  </a>
                </div>
      `;
      })
      items.innerHTML = html;
      num++
    })
}

order_container();
order_container_items();

let quantity = 0;
Cart[index].forEach((product)=>{
  quantity += product.quantity
  document.querySelector('.cart-quantity').innerHTML = quantity;
})

document.querySelector('.cart-link').addEventListener('click',()=>{
  window.location.href = `./checkout.html?index=${index}`;
})

document.querySelector('.orders-link').addEventListener('click',()=>{
  window.location.href = `./checkout.html?index=${index}`;
})

document.querySelectorAll('.track-package-button').forEach((button)=>{
  button.addEventListener('click',()=>{
    window.location.href = `./tracking.html?product_data=${button.dataset.image}~shipping_id=${button.dataset.shippingId}~quantity=${button.dataset.quantity}~index=${button.dataset.index}`;
  })
})

document.querySelector('.header-link').addEventListener('click',()=>{
  window.location.href = `../home/home.html?index=${index}`;
})


