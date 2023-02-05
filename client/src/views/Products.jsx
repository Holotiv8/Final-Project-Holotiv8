import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllFooterPage from "../components/AllFooterPage";
import AllNavbarComponent from "../components/AllNavbarPage";
import { fetchDetailProduct } from "../stores/actionCreator/productCreator";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchDetailProduct(id));
  }, [id]);
  return (
    <div>
      <AllNavbarComponent />
      <div>
        <section>
          <div className="container-product">
            <div className="title-product">
              <h1>
                <center>My Product</center>
              </h1>
            </div>

            <div className="product_row">
              {product.map((el) => {
                return <ProductCard key={el.id} el={el} />;
              })}
            </div>

            <AllFooterPage />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
