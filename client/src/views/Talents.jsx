import React, { Component, useEffect, useState } from "react";

import Footer from "../components/AllFooterPage";
import AllNavbarComponent from "../components/AllNavbarPage";

const Talents = () => {
  const [idols, setIdols] = useState([]);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/idols")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIdols(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/idols/branches")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBranches(data);
      });
  }, []);

  return (
    <>
      <AllNavbarComponent />

      <div className="flex flex-col min-h-screen">
        <section>
          <div className="title-name">
            <h1>Our Talents</h1>
          </div>
        </section>

        <section>
          <div class=" flex items-center rounded-md shadow-sm justify-center mt-[50px] mb-[50px]">
            {branches.map((el) => {
              return (
                <button
                  key={el.id}
                  class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
                >
                  <span>{el.from}</span>
                </button>
              );
            })}
          </div>
          <div className="wrapper">
            {idols.map((el) => {
              return (
                <div className="card-talents" key={el.id}>
                  <img src={el.profileImage} />
                  <div className="content-talents">
                    <div className="row-talents">
                      <div className="detail-talents">
                        <span>{el.name}</span>
                        <p>
                          “Hey, {el.fanName}! How are you all doing? It's me,{" "}
                          {el.name}”
                        </p>
                      </div>
                      <div className="buttons-talents">
                        <a>
                          <img
                            src="https://www.freeiconspng.com/thumbs/details-icon/view-details--icon--download-free-icons-0.jpg"
                            style={{
                              width: "50px",
                              cursor: "pointer",
                              float: "left",
                            }}
                          />
                        </a>
                        <a>
                          <img
                            src="https://icon-library.com/images/love-icon-png/love-icon-png-9.jpg"
                            style={{
                              width: "30px",
                              cursor: "pointer",
                              marginTop: "10px",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Talents;
