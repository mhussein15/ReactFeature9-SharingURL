const DELETE_PRODUCT = "DELETE_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

export const deleteCookie = (productID) => {
  return {
    type: DELETE_PRODUCT,
    payload: { productID },
  };
};

export const addProduct = (newProduct) => {
  return {
    type: ADD_PRODUCT,
    payload: { newProduct }, // {newPerson: newPerson}
  };
};
