
let url = new URLSearchParams(window.location.search).get('product_data')
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
let orders = JSON.parse(localStorage.getItem('orders'));

let index = Number(url.split("~")[3].split("=")[1])
let shipping_id = Number(url.split("~")[1].split("=")[1])
let product_id = url.split("~")[0]
let product_quantity = Number(url.split("~")[2].split("=")[1])


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

function matcing_product(){
    let data = {

    }
    orders[index].forEach(element => {
        element.forEach((product)=>{
            if(product_id === product.id){
                data.matcing_product = product
            }
        })
    });
    if (shipping_id ==0) {
        data.date = Dates()[0]
      } else if(shipping_id == 4.99) {
        data.date = Dates()[1]
      }
      else{
        data.date = Dates()[2]
      }
    return data;
}

console.log(matcing_product())


document.querySelector('.main').innerHTML = `
    <div class="order-tracking">
        <a class="back-to-orders-link link-primary">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on <b>${matcing_product().date}</b>
        </div>

        <div class="product-info">
          Product Name : <b>${matcing_product().matcing_product.name}</b>
        </div>

        <div class="product-info">
          Product Quantity : <b>${product_quantity}</b>
        </div>

        <img class="product-image" src="${matcing_product().matcing_product.image}">

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
`;

document.querySelector('.cart-link').addEventListener('click',()=>{
    window.location.href = `./checkout.html?index=${index}`;
})

document.querySelector('.orders-link').addEventListener('click',()=>{
    window.location.href = `./orders.html?index=${index}`;
})

document.querySelector('.header-link').addEventListener('click',()=>{
    window.location.href = `../home/home.html?index=${index}`;
})

document.querySelector('.back-to-orders-link').addEventListener('click',()=>{
  window.location.href = `./orders.html?index=${index}`;
})