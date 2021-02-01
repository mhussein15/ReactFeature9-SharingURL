import ProductData from "../products";

const initialState = {
  products: ProductData,
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

    default:
      return state;
  }
};

export default reducer;
