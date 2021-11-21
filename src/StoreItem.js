import React from "react";
import { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const StoreItem = ({ id, title, img, price, quantity }) => {
  const { removeProduct, increaseProduct, decreaseProduct } =
    useGlobalContext();
  return (
    <>
      <div className='storeItem__container'>
        <header>
          <img src={img} alt='' />
          <h3> {title} </h3>
          <p> 🌟 🌟 🌟 </p>
        </header>
        <section className='storeItem__price'>
          <h2>Price </h2>
          <h3> ${price} </h3>
        </section>
        <article className='storeItem__quantity '>
          <h2> Quantity </h2>

          <AiOutlineMinus
            style={{
              backgroundColor: "E8E8E8",
              borderRadius: "7px",
              marginTop: "1.9rem",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => decreaseProduct(id)}
          />
          <h3> {quantity} </h3>
          <AiOutlinePlus
            style={{
              backgroundColor: "lightgray",
              borderRadius: "5px",
              marginLeft: "5.3rem",
              position: "relative",
              top: "-3.25rem",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => increaseProduct(id)}
          />
        </article>
        <footer>
          <button
            type='btn'
            className='storeItem__button'
            onClick={() => removeProduct(id)}
          >
            remove product
          </button>
        </footer>
      </div>
    </>
  );
};

export default StoreItem;
