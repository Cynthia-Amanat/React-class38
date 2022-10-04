import { Link } from "react-router-dom";
import FavoriteProductsIcon from "./FavIcon";
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <Link to={`/products/${product.id}`} key={product.id}>
        <img src={product.image} className="card-img-top" alt={product.title} />
        <h3 className="card-title">{product.title}</h3>
        <span> ${product.price}</span>
      </Link>
      <FavoriteProductsIcon product={product} />
    </div>
  );
};

export default ProductCard;
