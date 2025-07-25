import {Cart, removeFromCart} from '../data/cart.js';
import { products } from '../data/products.js';
import { formartCurrency } from './utilis/money.js'
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOPtions } from '../data/deliveryOPtions.js'


const today = dayjs();
const deliveryDate = today.add(7, 'days');
console.log(deliveryDate.format('dddd, MMMM D'))


let cartSummaryHTML = '';

Cart.forEach((cartItem)=>{

  const productId = cartItem.productId;

   let matchingProduct = products.find((p)=>{ return p.id === productId});

  
   const deliveryOptionId = cartItem.deliveryOPtionsId;
    let deliveryOption;


    deliveryOPtions.forEach((option)=>{
      if (option.id === deliveryOptionId){
        deliveryOption = option;
      }
    });

      const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays, 'days'
    );

    const dateString = deliveryDate.format('dddd, MMMM D' );

   cartSummaryHTML += `
        <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  ${formartCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">
                      ${cartItem.quantity}
                    </span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-quantity-link" data-product-id = ${matchingProduct.id}>
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                 ${deliveryOPtionsHTML(matchingProduct, cartItem)}
              </div>
            </div>
          </div>
   `;
});

function deliveryOPtionsHTML(matchingProduct, cartItem) {

  let html = '';

  deliveryOPtions.forEach((deliveryOption)=>{
    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays, 'days'
    );

    const dateString = deliveryDate.format('dddd, MMMM D' );
    
    const priceString = deliveryOption.priceCents === 0 ?
      'FREE'
      : `${formartCurrency(deliveryOption.priceCents)}-`;

      const isChecked =  deliveryOption.id === cartItem.deliveryOPtionsId;


   html +=   `
                <div class="delivery-option">
                  <input type="radio" ${isChecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                       ${priceString} Shipping
                    </div>
                  </div>
          </div>
          
                
      `
  });

  return html
}

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


document.querySelectorAll('.js-delete-quantity-link')
.forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId = link.dataset.productId;
      removeFromCart(productId);
      
      const container = document.querySelector(`.js-cart-item-container-${productId}`);

      container.remove();
    });
});