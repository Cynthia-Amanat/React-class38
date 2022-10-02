import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductInformation = () => {
  const [product, setProduct] = useState("");
  const [isLoading, setLoading] = useState(true);
  let { productId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productId]);
  return isLoading ? (
    <>
      <h2>Loading...</h2>
    </>
  ) : (
    <div className="card mb-3">
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
