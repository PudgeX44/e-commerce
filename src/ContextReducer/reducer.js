import { data } from "../data";

export const initialState = {
  data: [...data],
  featured: data.filter((item) => item.type === "featured"),
  bestSeller: data.filter((item) => item.type === "bestSeller"),
  cart: [],
  wishlist: [],
  searched: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cart.length === 0) {
        return { ...state, cart: [...state.cart, action.payload] };
      } else {
        let checkCart = state.cart.map((item) =>
          item.id === action.payload.id ? true : false
        );
        if (checkCart.includes(true)) {
          alert("This item is already in the cart");
        } else {
          return { ...state, cart: [...state.cart, action.payload] };
        }
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "ADD_AMOUNT":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            item.amount += 1;
          }
          return item;
        }),
      };
    case "DEC_AMOUNT":
      let index = state.cart.map((item) => item.id).indexOf(action.payload);
      let amountIndex = state.cart[index].amount;
      if (amountIndex <= 1) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload) {
              item.amount -= 1;
            }
            return item;
          }),
        };
      }
    case "TOGGLE_WISHLIST":
      if (!action.payload.inWishlist) {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
          data: state.data.map((item) => {
            if (item.id === action.payload.id) {
              item.inWishlist = true;
            }
            return item;
          }),
          featured: state.featured.map((item) => {
            if (item.id === action.payload.id) {
              item.inWishlist = true;
            }
            return item;
          }),
          bestSeller: state.bestSeller.map((item) => {
            if (item.id === action.payload.id) {
              item.inWishlist = true;
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item.id !== action.payload.id
          ),
          data: state.data.map((item) => {
            if (item.id === action.payload.id) {
              item.inWishlist = false;
            }
            return item;
          }),
          featured: state.featured.map((item) => {
            if (item.id === action.payload.id) {
              item.inWishlist = false;
            }
            return item;
          }),
          bestSeller: state.bestSeller.map((item) => {
            if (item.id === action.payload.id) {
              item.inWishlist = false;
            }
            return item;
          }),
        };
      }
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
        data: state.data.map((item) => {
          if (item.id === action.payload) {
            item.inWishlist = false;
          }
          return item;
        }),
      };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SEARCH":
      return {
        ...state,
        searched: state.data.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
      };
    default:
      return state;
  }
};
export default reducer;
