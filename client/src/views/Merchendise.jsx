import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllFooterPage from "../components/AllFooterPage";
import AllNavbarComponent from "../components/AllNavbarPage";
import { fetchDataProduct } from "../stores/actionCreator/productCreator";
import MerchandiseCard from "../components/MerchendiseCard";

const Merchandise = () => {
  const { idols } = useSelector((state) => state.products);
  const dispatcher = useDispatch();
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    dispatcher(fetchDataProduct());
    isLoading(false);
  }, []);

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
