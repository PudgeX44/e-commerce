import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { useStateValue } from "../ContextReducer/Context";

function Home() {
  const [{ data, featured, bestSeller }] = useStateValue();
  const [indexFeatured, setIndexFeatured] = useState(0);
  const [indexBestSeller, setIndexBestSeller] = useState(0);
  //For Featured
  useEffect(() => {
    const lastIndex = featured.length - 1;
    if (indexFeatured < 0) {
      setIndexFeatured(lastIndex);
    } else if (indexFeatured > featured.length - 1) {
      setIndexFeatured(0);
    }
  }, [indexFeatured, featured]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndexFeatured(indexFeatured + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [indexFeatured]);
  //For Best Seller
  useEffect(() => {
    const lastIndex = bestSeller.length - 1;
    if (indexBestSeller < 0) {
      setIndexBestSeller(lastIndex);
    } else if (indexBestSeller > bestSeller.length - 1) {
      setIndexBestSeller(0);
    }
  }, [indexBestSeller, bestSeller]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndexBestSeller(indexBestSeller + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [indexBestSeller]);
  return (
    <div className="home">
      <img
        className="home-picture"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OQcrmmQRGB14eFRELU1dL4NUAQL0ZphdJw&usqp=CAU"
        alt="shoes"
      />
      <div className="home-display">
        <div className="home-featured">
          <h3>Featured Products</h3>
          {featured.map((item, itemIndex) => {
            let position = "nextNextProduct";
            if (itemIndex === indexFeatured) {
              position = "activeProduct";
            }
            if (
              itemIndex === indexFeatured + 1 ||
              (indexFeatured === featured.length - 1 && itemIndex === 0)
            ) {
              position = "nextProduct";
            }
            if (
              itemIndex === indexFeatured - 1 ||
              (indexFeatured === 0 && itemIndex === featured.length - 1)
            ) {
              position = "prevProduct";
            }
            return (
              <div className={`home-featured-productDiv ${position}`}>
                <Product key={item.id} {...item} />
              </div>
            );
          })}
          <div className="home-arrows">
            <MdArrowBackIosNew
              onClick={() => setIndexFeatured(indexFeatured - 1)}
            />
            <MdArrowForwardIos
              onClick={() => setIndexFeatured(indexFeatured + 1)}
            />
          </div>
        </div>
        <div className="home-best-sellers">
          <h3>Best Seller Products</h3>
          {bestSeller.map((item, itemIndex) => {
            let position = "nextNextProduct";
            if (itemIndex === indexBestSeller) {
              position = "activeProduct";
            }
            if (
              itemIndex === indexBestSeller + 1 ||
              (indexBestSeller === bestSeller.length - 1 && itemIndex === 0)
            ) {
              position = "nextProduct";
            }
            if (
              itemIndex === indexBestSeller - 1 ||
              (indexBestSeller === 0 && itemIndex === bestSeller.length - 1)
            ) {
              position = "prevProduct";
            }
            return (
              <div className={`home-bestSellers-productDiv ${position}`}>
                <Product key={item.id} {...item} />
              </div>
            );
          })}
          <div className="bestSeller-arrows">
            <MdArrowBackIosNew
              onClick={() => setIndexBestSeller(indexBestSeller - 1)}
            />
            <MdArrowForwardIos
              onClick={() => setIndexBestSeller(indexBestSeller + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
