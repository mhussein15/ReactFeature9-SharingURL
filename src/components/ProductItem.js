// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { ProductWrapper } from "../styles";
import { Link, NavLink } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;
  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img
          alt={product.name}
          src={product.image}
        />
      </Link>

      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton
        productId={product.id}
      />
    </ProductWrapper>
  );
};

export default ProductItem;
