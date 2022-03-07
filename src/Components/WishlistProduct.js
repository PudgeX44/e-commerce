import React from "react";
import "./WishlistProduct.css";
import { BiShoppingBag } from "react-icons/bi";
import { useStateValue } from "../ContextReducer/Context";

function WishlistProduct({ id, image, title, price, rating }) {
  const [state, dispatch] = useStateValue();
  const removeWishlist = () => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };
  return (
    <div className="wishlist-product">
      <div className="product">
        <img className="product-image" src={image} alt={title} />
        <div className="product-info">
          <div className="product-infoTop">
            <p>{title}</p>
            <BiShoppingBag className="product-icon" />
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
            <button className="remove-wishlist-button" onClick={removeWishlist}>
              Remove from Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistProduct;
