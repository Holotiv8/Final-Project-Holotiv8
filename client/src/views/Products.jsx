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
  const [loading, isloading] = useState(true);

  useEffect(() => {
    dispatcher(fetchDetailProduct(id));
    isloading(false);
  }, [id]);

  if (loading) {
    return (
      <div class="flex items-center justify-center min-h-screen">
        <div
          style={{ "border-top-color": "transparent" }}
          class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p class="ml-2">Processing...</p>
      </div>
    );
  }
  return (
    <div>
      <AllNavbarComponent />
      <div>
        <section>
          <div className="container-product">
            <div className="title-product">
              <h1>
                <center>Talent's Products</center>
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
