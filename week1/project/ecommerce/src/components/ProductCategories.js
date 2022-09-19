import categories from "../fake-data/all-categories";

export const ProductCategories = (cb) => {
  const categoryButtons = categories.map((category, index) => {
    return (
      <button
        type="button"
        className="btn btn-secondary btn-lg data-toggle=button"
        key={index}
        category={category}
        onClick={() => cb(category)}
      >
        {category}
      </button>
    );
  });
  return categoryButtons;
};

export default ProductCategories;
