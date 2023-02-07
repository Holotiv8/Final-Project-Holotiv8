import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllFooterPage from "../components/AllFooterPage";
import AllNavbarComponent from "../components/AllNavbarPage";
import { fetchDataProduct } from "../stores/actionCreator/productCreator";
import MerchandiseCard from "../components/MerchendiseCard";

const Merchandise = () => {
  const { idols } = useSelector((state) => state.products);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(fetchDataProduct());
  }, []);
  return (
    <section className="font-display">
      <AllNavbarComponent />
      <div className="row-merch">
        {idols.map((el) => {
          return <MerchandiseCard key={el.id} el={el} />;
        })}
      </div>
      <AllFooterPage />
    </section>
  );
};

export default Merchandise;
