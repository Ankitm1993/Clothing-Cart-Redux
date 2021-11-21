import React from "react";

import { useState, useEffect } from "react";
import { FaSurprise } from "react-icons/fa";
import StoreItem from "./StoreItem";
import { useGlobalContext } from "./Context";
// import storeProducts from "./Data";

const StoreContainer = () => {
  const { store, total, clearStore } = useGlobalContext();

  if (store.length === 0) {
    return (
      <div className='store__Page'>
        <div className='store__container'>
          <h2>
            whoops <FaSurprise style={{ color: "red" }} /> your shopping Store
          </h2>
          <h3> is Currently Empty..! </h3>
        </div>
      </div>
    );
  }
  return (
    <div className='storeProducts__container'>
      <h3> Choose your product </h3>

      <div>
        {store.map((storeItem) => {
          return <StoreItem key={storeItem.id} {...storeItem} />;
        })}
      </div>
      <span>
        <hr />
        <h2>
          Total: <p> ${total} </p>
        </h2>
        <button type='btn' onClick={clearStore}>
          clear store
        </button>
      </span>
    </div>
  );
};

export default StoreContainer;
