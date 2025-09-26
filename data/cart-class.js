class Cart {
   CartItems ;
   localStorageKey ;

   constructor(localStorageKey) {
      this.localStorageKey = localStorageKey;
      this.loadFromStorage();
   }

    loadFromStorage(){
   this.CartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

   if (!this.CartItems){
    this.CartItems = [ 
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOPtionsId: '1',
        },
 
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 2,
          deliveryOPtionsId: '2',
        },
];
   }
   };
  
     saveToStorage() {
  localStorage.setItem(this.localStorageKey, JSON.stringify(this.CartItems))
};

addToCart(productId){
     let matchingItem;
   //code below chents if the quatity is in the cart
   // before , if it is ? increase the quantity if not add new obj
   this.CartItems.forEach((cartItem)=>{
    if (productId === cartItem.productId){
      matchingItem = cartItem;

    }
   });

   if(matchingItem){
    matchingItem.quantity +=1
   }else{
     this.CartItems.push(
    {
      productId: productId,
      quantity: 1,
      deliveryOPtionsId: '1',
    }
   );
   this.saveToStorage()
   };

};

 removeFromCart(productId){
   let newCart = [];

   this.CartItems.forEach((cartItem)=>{
       if(cartItem.productId !== productId){
         newCart.push(cartItem);
       }
   });

   this.CartItems = newCart;

   this.saveToStorage();
};

 updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;
   this.CartItems.forEach((cartItem)=>{
    if (productId === cartItem.productId){
      matchingItem = cartItem;
    }
   });

   matchingItem.deliveryOPtionsId = deliveryOptionId;

   this.saveToStorage();
};

}



const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');





console.log(cart , businessCart)

console.log(businessCart instanceof Cart) 