import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <section>
        <div className="product-nav">
          <div className="product-img-nav">
            <img src="https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdoaXRlJTIwdCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
          </div>
          <div className="product-listing-nav">
            <p className="info-nav">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </section>
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
        </div>
      </section>
    </div>
  );
};

export default Products;
