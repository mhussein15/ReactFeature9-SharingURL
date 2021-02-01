// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find(
    (product) => product.slug === productSlug
  );

  if (!product) {
    return <Redirect to="/" />;
  }
  return (
    <DetailWrapper>
      <Link to="/products">
        <p>Back to Products</p>
      </Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default ProductDetail;
