import React from "react";
import "./Product.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { useStateValue } from "../ContextReducer/Context";

function Product({ id, image, title, price, rating, amount, inWishlist }) {
  const [{ data }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        image,
        title,
        price,
        rating,
        amount,
        inWishlist,
      },
    });
  };
  const toggleWishlist = () => {
    dispatch({
      type: "TOGGLE_WISHLIST",
      payload: {
        id,
        image,
        title,
        price,
        rating,
        amount,
        inWishlist,
      },
    });
  };
  return (
    <div className="product activeProduct">
      <img className="product-image" src={image} alt={title} />
      <div className="product-info">
        <div className="product-infoTop">
          <p>{title}</p>
          {inWishlist ? (
            <AiFillHeart className="product-icon" onClick={toggleWishlist} />
          ) : (
            <AiOutlineHeart className="product-icon" onClick={toggleWishlist} />
          )}
          <BiShoppingBag className="product-icon" onClick={addToCart} />
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
  );
}
export default Product;
