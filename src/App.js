// Styling
import {
  Description,
  GlobalStyle,
  ShopImage,
  ThemeButton,
  Title,
} from "./styles";
import React, { useState } from "react";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
// Data
import products from "./products";
import { Route, Switch } from "react-router";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [product, setProduct] = useState(null);
  const [_products, setProducts] = useState(products);

  const deleteProduct = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== +productId
    );
    setProducts(updatedProducts);
    setProduct(null);
  };

  const selectProduct = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    setProduct(selectedProduct);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const setView = () =>
    product ? (
      <ProductDetail
        product={product}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    ) : (
      <Route path="/products">
        <ProductList
          products={_products}
          deleteProduct={deleteProduct}
          selectProduct={selectProduct}
        />
      </Route>
    );

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList
            products={_products}
            deleteProduct={deleteProduct}
            selectProduct={selectProduct}
          />
        </Route>
        <Route path="/productdetail">
          <ProductDetail
            product={product}
            deleteProduct={deleteProduct}
            selectProduct={selectProduct}
          />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
