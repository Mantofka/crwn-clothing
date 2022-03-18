import { firestore } from "../../firebase/firebase.utils";

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existringCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existringCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const retrieveCartItem = async (userId, previousCartItems) => {
  const cartRef = firestore.doc(`cart/${userId}`);
  const snapShot = await cartRef.get();
  if (!snapShot.exists) {
    return [];
  } else {
    const newItems = [];
    const { cartItems } = snapShot.data();
    cartItems.map((item) => newItems.push(item));
    previousCartItems.map((item) => newItems.push(item));
    return newItems;
  }
};

export const updateFirebaseCart = async (userAuth, cartItems) => {
  const cartRef = firestore.doc(`cart/${userAuth}`);
  const snapShot = await cartRef.get();
  console.log(cartItems);
  if (!snapShot.exists) {
    try {
      await cartRef.set({
        cartItems,
      });
    } catch (error) {
      console.log(
        "There was an error when trying to update cart",
        error.message
      );
    }
  } else {
    cartRef.update({ cartItems });
  }
};
