import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllFooterPage from "../components/AllFooterPage";
import AllNavbarComponent from "../components/AllNavbarPage";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("gaOkNich");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  return (
    <div>
      <AllNavbarComponent />
      <div>
        <section>
          <div className="container-product">
            <div className="title-product">
              <h1>
                <center>Our Product</center>
              </h1>
            </div>

            <div className="product_row">
              {product.map((el) => {
                return (
                  <div key={el.id} className="main_product">
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
