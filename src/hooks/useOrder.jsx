import React, { createContext, useReducer, useContext, useState } from "react";

const OrderContext = createContext();

const initialState = {
  products: [],
  pospointId: "restaurant1",
  ordernote: "",
};

function orderReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      console.log("Adding product:", action.payload);
      const exists = state.products.find((p) => p.id === action.payload.id);
      let updatedProducts;

      if (exists) {
        updatedProducts = state.products.map((p) =>
          p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        updatedProducts = [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ];
      }
      return { ...state, products: updatedProducts };
    }
    case "UPDATE_PRODUCT_QUANTITY": {
      const updatedProducts = state.products.map((p) =>
        p.id === action.payload.id
          ? { ...p, quantity: Math.max(1, p.quantity + action.payload.amount) }
          : p
      );
      return { ...state, products: updatedProducts };
    }

    case "REMOVE_PRODUCT": {
      const updatedProducts = state.products.filter(
        (p) => p.id !== action.payload.id
      );
      return { ...state, products: updatedProducts };
    }

    case "UPDATE_NOTE":
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload.id ? { ...p, note: action.payload.note } : p
        ),
      };

    case "SET_ORDER_NOTE":
      return { ...state, ordernote: action.payload };

    case "CLEAR_ORDER":
      return { ...initialState, id: Date.now() };

    default:
      return state;
  }
}
export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const [searchQuery, setSearchQuery] = useState("");

  const value = {
    order: state,
    addProduct: (product) =>
      dispatch({ type: "ADD_PRODUCT", payload: product }),
    removeProduct: (id) =>
      dispatch({ type: "REMOVE_PRODUCT", payload: { id } }),
    updateProductQuantity: (id, amount) =>
      dispatch({ type: "UPDATE_PRODUCT_QUANTITY", payload: { id, amount } }),
    updateNote: (id, note) =>
      dispatch({ type: "UPDATE_NOTE", payload: { id, note } }),
    setOrderNote: (note) => dispatch({ type: "SET_ORDER_NOTE", payload: note }),
    clearOrder: () => dispatch({ type: "CLEAR_ORDER" }),
    searchQuery,
    setSearchQuery,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
