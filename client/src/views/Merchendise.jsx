import React, { Component, useEffect, useState } from "react";
import AllFooterPage from "../components/AllFooterPage";
import AllNavbarComponent from "../components/AllNavbarPage";

const Merchandise = () => {
  const [idols, setIdols] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/idols")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIdols(data);
      });
  }, []);
  return (
    <section>
      <AllNavbarComponent />
      <div className="row-merch">
        {idols.map((el) => {
          return (
            <div key={el.id} className="card-merch color1">
              <img src={el.detailImage} />
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
