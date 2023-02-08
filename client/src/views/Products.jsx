import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllFooterHomePage from "../components/AllFooterPage"
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

  // console.log(product[0]?.Idol.name,'<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
  return (
    <div className="font-display">
      <AllNavbarComponent />
      <div>
        <section>
          <div className="container-product bg-slate-800">
            <div className="title-product">
              <img className="rounded-full translate-x-[310%] translate-y-[10%]" width={150} src={product[0]?.Idol.profileImage} alt="" />
              <h1>
                <center className="font-display text-3xl">{product[0]?.Idol.name}'s Products</center>
              </h1>
            </div>

            <div className="product_row font-display">
              {product.map((el) => {
                return <ProductCard key={el.id} el={el} />;
              })}
            </div>
              <div className="my-16">
               <AllFooterHomePage />
              </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
