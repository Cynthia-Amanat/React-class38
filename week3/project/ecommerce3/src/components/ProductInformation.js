import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import FavoriteProductsIcon from "./FavIcon";

const ProductInformation = () => {
  let { productId } = useParams();
  const {
    data: product,
    isloading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${productId}`);

  return isloading ? (
    <>
      <h2>Loading...</h2>
    </>
  ) : error ? (
    <>
      <h2>{error}</h2>
    </>
  ) : (
    <div className="card mb-3">
      <FavoriteProductsIcon product={product} />
      <h4> Product Information</h4>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.image}
            className="img-fluid rounded-start"
            alt={product.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <small className="text-muted">${product.price}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
