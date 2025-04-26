import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../reducers/constants";

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const increaseQuantity = (payload) => {
  return {
    type: ADD_TO_CART, // Aynı action'ı kullanabiliriz çünkü aynı ürünü tekrar eklemek miktarı artırmalı
    payload,
  };
};
