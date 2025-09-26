import { renderOrderSummary} from './checkout/orderSummary.js';
import {Cart, removeFromCart, updateDeliveryOption} from '../../data/cart.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import  '../data/cart-class.js';
renderOrderSummary();
renderPaymentSummary();
