import "./ProductCard.scss";

interface ProductCardInterface {
  data: {
    title: string;
    image: string;
    brand: string;
    description: string;
    price: number;
  };
}

const ProductCard = ({ data }: ProductCardInterface) => {
  const { title, image, brand, description, price } = data;
  return (
    <div className="product-card">
      <div className="product-card__container">
        <span className="product-card__title">{title}</span>
        <div className="product-card__image-block">
          <div className="product-card__image-container">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="product-card__about">
          <div className="product-card__brand">{brand}</div>
          <div className="product-card__description">{description}</div>
          <div className="product-card__price">{`${price}€`}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
