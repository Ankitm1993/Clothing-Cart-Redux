const reducer = (state, action) => {
  if (action.type === "CLEAR_STORE") {
    return { ...state, store: [] };
  }

  if (action.type === "REMOVE_PRODUCT") {
    return {
      ...state,
      store: state.store.filter(
        (storeProduct) => storeProduct.id !== action.payload
      ),
    };
  }

  if (action.type === "INCREASE_PRODUCT") {
    let tempStore = state.store.map((storeProduct) => {
      if (storeProduct.id === action.payload) {
        return { ...storeProduct, quantity: storeProduct.quantity + 1 };
      }
      return storeProduct;
    });
    return { ...state, store: tempStore };
  }

  if (action.type === "DECREASE_PRODUCT") {
    let tempStore = state.store
      .map((storeProduct) => {
        if (storeProduct.id === action.payload) {
          return { ...storeProduct, quantity: storeProduct.quantity - 1 };
        }
        return storeProduct;
      })
      .filter((storeProduct) => storeProduct.quantity !== 0);
    return { ...state, store: tempStore };
  }

  if (action.type === "UPDATE_TOTALPRODUCTS") {
    let { total, quantity } = state.store.reduce(
      (storeTotal, storeItem) => {
        const { price, quantity } = storeItem;
        storeTotal.quantity += quantity;

        const productTotal = price * quantity;
        storeTotal.total += productTotal;
        return storeTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, quantity };
  }
};

export default reducer;
