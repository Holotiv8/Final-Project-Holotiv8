import { useEffect, useState } from "react";
import AllFooterPage from "../components/AllFooterPage";
import AllNavbarComponent from "../components/AllNavbarPage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

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
              {products.map((el) => {
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
                      <div className="shop-product">
                        <a href="">
                          <img src="https://www.pngitem.com/pimgs/m/208-2086269_instagram-shopping-icon-png-transparent-png.png" />
                        </a>
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
