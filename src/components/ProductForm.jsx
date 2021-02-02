import { addProduct } from "../store/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import slugify from "slugify";

export default function ProductForm() {
  const history = useHistory();
  const lastID = useSelector((state) => state.lastID);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    id: lastID + 1,
    name: "",
    description: "",
    price: "",
    image:""
  });

  const handleChange = (event) =>
    setProduct({ ...product, [event.target.name]: event.target.value });

  const resetForm = () =>
    setProduct({
      name: "",
      description: "",
      price: "",
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addProduct({ ...product, slug: slugify(product.name, { lower: true }) })
    );
    resetForm();
    history.push("/products");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="btn btn-outline-info ">Name</span>
          </div>
          <input
            required
            className="form-control"
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="btn btn-outline-info">Description</span>
          </div>
          <input
            className="form-control"
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="btn btn-outline-info">Price</span>
          </div>
          <input
            className="form-control"
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="btn btn-outline-info">Image</span>
          </div>
          <input
            className="form-control"
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <input className="btn btn-info" type="submit" />
        </div>
      </form>
    </div>
  );
}
