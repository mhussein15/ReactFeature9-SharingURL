import ProductData from "../products";

const initialState = {
  products: ProductData,
  lastID: 3,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT":
      const filteredProduct = state.products.filter(
        (product) => product.id !== action.payload.productID
      );
      return {
        ...state,
        products: filteredProduct,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
        lastID: state.lastID + 1,
      };
    default:
      return state;
  }
};

export default reducer;
