export let Cart = JSON.parse(localStorage.getItem('Cart'));
   if (!Cart){
 Cart = [ 
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

export function saveToStorage(){
  localStorage.setItem('Cart', JSON.stringify(Cart))
}


export function  addToCart(productId){
     let matchingItem;
   //code below chents if the quatity is in the cart
   // before , if it is ? increase the quantity if not add new obj
   Cart.forEach((cartItem)=>{
    if (productId === cartItem.productId){
      matchingItem = cartItem;

    }
   });

   if(matchingItem){
    matchingItem.quantity +=1
   }else{
     Cart.push(
    {
      productId: productId,
      quantity: 1,
      deliveryOPtionsId: '1',
    }
   );
   saveToStorage()
   };

}

export function removeFromCart(productId){
   let newCart = [];

   Cart.forEach((cartItem)=>{
       if(cartItem.productId !== productId){
         newCart.push(cartItem);
       }
   });

   Cart = newCart;

   saveToStorage();
}


export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;
   Cart.forEach((cartItem)=>{
    if (productId === cartItem.productId){
      matchingItem = cartItem;

    }
   });

   matchingItem.deliveryOPtionsId = deliveryOptionId;

   saveToStorage();
}