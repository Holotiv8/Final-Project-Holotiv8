import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AllFooterPage from "../components/AllFooterPage";
import AllNavbarComponent from "../components/AllNavbarPage";
import { fetchDataProduct } from "../stores/actionCreator/productCreator";

const Merchandise = () => {
  const { idols } = useSelector((state) => state.products);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchDataProduct());
  }, []);
  return (
    <section>
      <AllNavbarComponent />
      <div className="row-merch">
        {idols.map((el) => {
          return (
            <div key={el.id} className="card-merch color1">
              <Link to={`/products/${el.id}`}>
                <img src={el.detailImage} />
              </Link>

              <div className="textright-merch">
                <h3>{el.name}</h3>
                <h4>
                  From {el.fanName}! Please click my image to see my product
                </h4>
              </div>
            </div>
          );
        })}
      </div>

      <AllFooterPage />
    </section>
  );
};

export default Merchandise;
