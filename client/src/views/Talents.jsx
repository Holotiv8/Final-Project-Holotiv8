import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "../components/AllFooterPage";
import AllNavbarComponent from "../components/AllNavbarPage";
import {
  addFavorite,
  fetchDataBranches,
  fetchDataTalents,
} from "../stores/actionCreator/talentsCreator";
import TalentCard from "../components/TalentCard";

const Talents = () => {
  const [active, setActive] = useState("Hololive Indonesia");
  const [activeId, setActiveId] = useState(1);
  const { idols, branches } = useSelector((state) => state.idols);
  const dispatcher = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatcher(fetchDataTalents());
  }, []);

  useEffect(() => {
    dispatcher(fetchDataBranches());
  }, []);

  function handleAddFavorite(IdolId) {
    dispatcher(addFavorite(IdolId));
    navigate("/favorites");
  }

  function handleActive(value, valueId) {
    setActive(value);
    setActiveId(valueId);
    console.log(active);
  }

  const activeStyle = { backgroundColor: "rgb(86, 153, 225)", color: "white" };

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
                  onClick={() => handleActive(el.from, el.id)}
                  style={active === el.from ? activeStyle : {}}
                  class="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
                >
                  <span>{el.from}</span>
                </button>
              );
            })}
          </div>
          <div className="wrapper">
            {idols
              .filter((el) => el.BranchId === activeId)
              .map((el) => {
                return <TalentCard key={el.id} el={el} />;
              })}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Talents;
