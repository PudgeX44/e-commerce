import React, { useState } from "react";
import "./CartProduct.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useStateValue } from "../ContextReducer/Context";

function CartProduct({ id, image, title, price, rating, amount }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const addAmount = () => {
    dispatch({ type: "ADD_AMOUNT", payload: id });
  };
  const decAmount = () => {
    dispatch({ type: "DEC_AMOUNT", payload: id });
  };
  return (
    <div className="cart-product">
      <div className="product">
        <img className="product-image" src={image} alt={title} />
        <div className="product-info">
          <div className="product-infoTop">
            <p>{title}</p>
          </div>
          <div className="product-infoBottom">
            <div className="product-rating">
              {Array(rating)
                .fill()
                .map((_, i) => {
                  return <p key={i}>⭐</p>;
                })}
            </div>
            <p className="product-price">${price}</p>
          </div>
        </div>
      </div>
      <div className="cart-amount">
        <AiOutlineMinusCircle onClick={decAmount} />
        <p>{amount}</p>
        <AiOutlinePlusCircle onClick={addAmount} />
        <button className="cart-remove-button" onClick={removeItem}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
