const ShowProducts = ({ products }) => {
  return (
    <>
      {products.map(({ title, image, id, price }) => (
        <div className="card" key={id}>
          <img src={image} className="card-img-top" alt={title} />
          <h5 className="card-title">{title}</h5>
          <span>Price: ${price}</span>
        </div>
      ))}
    </>
  );
};

export default ShowProducts;
