const ProductCard = ({ el }) => {
  return (
    <div className="main_product">
      <div className="pro_image">
        <div className="images_product">
          <img src={el.mainImg} />
        </div>
      </div>

      <div className="content-product">
        <div className="product-name">
          <span>{el.name}</span>
        </div>
        <div className="price-product">
          <span>Rp.{el.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
