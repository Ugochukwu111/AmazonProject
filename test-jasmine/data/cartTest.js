import { addToCart, Cart,loadFromStorage } from "../../data/cart.js";
console.log('cartTest.js loaded');

describe('test suite : add to cart', () => {
  it('adds an existing product to the cart', () => {

    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOPtionsId: '1',
        }
      ]);
    });
     loadFromStorage();

         addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(Cart.length).toEqual(1);
    expect(Cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); 
    expect(Cart[0].quantity).toEqual(2);
  });

   it('adds a new product to the cart', () => {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
     loadFromStorage();
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(Cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(Cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); 
    expect(Cart[0].quantity).toEqual(1);

  });
});