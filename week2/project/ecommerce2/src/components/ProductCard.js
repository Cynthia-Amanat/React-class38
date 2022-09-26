const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <h3 className="card-title">{product.title}</h3>
      <span>{product.price}</span>
    </div>
  );
};

export default ProductCard;
