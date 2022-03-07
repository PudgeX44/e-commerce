import React from "react";
import "./Search.css";
import Product from "./Product";
import { useStateValue } from "../ContextReducer/Context";

function Search() {
  const [{ searched }] = useStateValue();
  return (
    <div className="search">
      <h3>Search Results:</h3>
      <div className="search-container">
        {searched.length === 0 && <p>No items matched your search</p>}
        {searched.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Search;
