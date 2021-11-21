import React, { useState, useEffect, useContext, useReducer } from "react";
import storeProducts from "./Data";

import reducer from "./reducer";
const StoreContext = React.createContext();

const initialState = {
  store: storeProducts,
  loading: false,
  total: 0,
  quantity: 0,
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearStore = () => {
    dispatch({ type: "CLEAR_STORE" });
  };

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  const increaseProduct = (id) => {
    dispatch({ type: "INCREASE_PRODUCT", payload: id });
  };

  const decreaseProduct = (id) => {
    dispatch({ type: "DECREASE_PRODUCT", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_TOTALPRODUCTS" });
  }, [state.store]);
  return (
    <StoreContext.Provider
      value={{
        ...state,
        clearStore,
        removeProduct,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(StoreContext);
};

export { StoreContext, StoreProvider };
