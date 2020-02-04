export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    // First solution
    // return cartItems.map(cartItem =>
    //   cartItem.id === cartItemToAdd.id
    //     ? { ...cartItem, quantity: cartItem.quantity + 1 }
    //     : cartItem
    // );
    // Second solution
    existingCartItem.quantity++;
    return [...cartItems];
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
