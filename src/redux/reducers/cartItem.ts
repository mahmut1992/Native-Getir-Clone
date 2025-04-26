import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./constants";

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingIndex = state.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingIndex >= 0) {
        // Ürün varsa miktarını artır
        const updatedCart = [...state];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity:
            updatedCart[existingIndex].quantity + action.payload.quantity,
        };
        return updatedCart;
      } else {
        // Yeni ürün
        return [...state, { ...action.payload }];
      }

    case REMOVE_FROM_CART:
      const itemIndex = state.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (itemIndex !== -1) {
        const updatedCart = [...state];
        const currentItem = updatedCart[itemIndex];

        if (currentItem.quantity > 1) {
          updatedCart[itemIndex] = {
            ...currentItem,
            quantity: currentItem.quantity - 1,
          };
          return updatedCart;
        } else {
          return updatedCart.filter(
            (item) => item.product.id !== action.payload.id
          );
        }
      }
      return state;

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};

export default cartItems;
