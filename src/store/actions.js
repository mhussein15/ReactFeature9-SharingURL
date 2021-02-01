const DELETE_PRODUCT = "DELETE_PRODUCT";

export const deleteCookie = (productID) => {
  return {
    type: DELETE_PRODUCT,
    payload: { productID },
  };
};
