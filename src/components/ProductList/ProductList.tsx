import ProductCard from "../ProductCard/ProductCard";
import productListData from "./productListData";
import "./ProductList.scss";

const ProductList = () => {
  const productElements = productListData.map((item) => {
    return <ProductCard key={item.title} data={item} />;
  });
  return (
    <section className="product-list">
      <div className="product-list__container container">
        <h3 className="product-list__title">WHAT ELSE?</h3>
        <div className="product-list__list">{productElements}</div>
      </div>
    </section>
  );
};

export default ProductList;
