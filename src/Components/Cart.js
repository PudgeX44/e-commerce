import React from "react";
import "./Cart.css";
import CartProduct from "./CartProduct";
import { useStateValue } from "../ContextReducer/Context";
import { useNavigate } from "react-router-dom";

function Cart() {
  let navigate = useNavigate();
  const [{ cart, user }, dispatch] = useStateValue();
  const addPrice = (cart) => {
    let total = 0;
    cart.map((item) => {
      total = (total * 1000 + item.price * item.amount * 1000) / 1000;
    });
    return total.toFixed(2);
  };
  const checkOut = () => {
    if (cart.length !== 0) {
      navigate("/checkout");
      dispatch({ type: "CLEAR_CART" });
    }
  };
  return (
    <div className="cart">
      <div className="cart-left">
        <h2>Hello, {user?.email}!</h2>
        <h3>Your cart:</h3>
        {cart.length === 0 && <p>Your cart is currently empty</p>}
        {cart.map((item) => {
          return <CartProduct key={item.id} {...item} />;
        })}
      </div>
      <div className="cart-right">
        <h3>{cart.length} items in cart</h3>
        <h3>Total: ${addPrice(cart)}</h3>
        <button className="checkoutButton" onClick={checkOut}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
