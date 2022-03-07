import React from "react";
import "./Wishlist.css";
import WishlistProduct from "./WishlistProduct";
import { useStateValue } from "../ContextReducer/Context";

function Wishlist() {
  const [{ wishlist }, dispatch] = useStateValue();
  return (
    <div className="wishlist">
      <h3>Your Wishlist:</h3>
      <div className="wishlist-container">
        {wishlist.length === 0 && <p>No items in wishlist</p>}
        {wishlist.map((item) => {
          return <WishlistProduct key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Wishlist;
