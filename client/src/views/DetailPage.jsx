import React, { Component, useEffect, useState } from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
// offline API
import { fetchDataDetailIdol } from "../stores/actionCreator/talentsCreator";
import { useParams } from "react-router-dom";
import AllNavbarComponent from "../components/AllNavbarPage";
import AllFooterPage from "../components/AllFooterPage";
import Carousel from "../components/Carousel";

const DetailPage = () => {
  const { oneIdol } = useSelector((state) => state.idols);
  const dispatcher = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const fetchOneIdol = async () => {
    try {
      await dispatcher(fetchDataDetailIdol(id));
    } catch (error) {
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };
  useEffect(() => {
    fetchOneIdol();
  }, []);

  const generateGradient = (colors) => {
    const [via, to] = colors.split(' ')
    return [
      'bg-gradient-to-b',
      'from-white',
      via,
      to
    ]
  }

  
  
  if (isLoading) {
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

  // Ternary => One Line Condition

  return (
    <>
      <AllNavbarComponent />
      <section
        id=""
        className={cx("font-display", generateGradient(oneIdol.color))}
      >
        <div
          id="header_detail"
          className="flex w-full justify-around gap-11 items-start pl-16 pr-12 py-8"
        >
          <img
            className=""
            width={280}
            height={500}
            src={oneIdol.detailImage}
            alt="talent img"
          />
          <div className="w-5/12 flex flex-col gap-3 items-start">
            <div id="name" className="text-4xl font-medium">
              {oneIdol.name}
            </div>
            <div id="name_hiragana" className="font-semibold">
              {oneIdol.illustrator}
            </div>
            <div id="description" className="text-sm text-justify w-9/12">
              {oneIdol.content}
            </div>
            <iframe
              className="w-[360px]  h-[200px] rounded-md"
              src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0"
              allow="autoplay"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>


      {/* NYALAIN BIAR GK ERROR */}
      <Carousel
        title={"VIDEOS"}
        backround={
          "bg-[url('https://cdn.discordapp.com/attachments/1062556608078544946/1071782772374503435/df03fe11-4120-4c1f-8146-cfab5fcb571b.jpg')]"
        }
        type="youtube"
        content={oneIdol.video}
        bg={
          "https://cdn.discordapp.com/attachments/1062556608078544946/1071756478727340082/IMG_2152.jpg"
        }
      />
      {oneIdol.spotifyId ? (
        <Carousel
          title={"MUSIC"}
          backround={"bg-gradient-to-r from-white via-cyan-400 to-cyan-600"}
          type="spotify"
          content={oneIdol.songs}
        />
      ) : (
        ""
      )}

      {/* <section
        id="data"
        className="py-16 bg-gradient-to-b h-screen from-sky-400 via-sky-400 to-white font-display"
      >
        <div className="flex flex-col mx-64 p-4 rounded-xl border-4 border-amber-700 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          <div className="self-center text-3xl font-medium ">DATA</div>
          <div className="flex justify-around">
            <img
              className=""
              width={250}
              src="https://hololive.hololivepro.com/wp-content/uploads/2021/04/unnamed-file-6-556x1000.png"
              alt="talent img"
            />
            <div className="items-center">
              <div>Birthday: May 15</div>
              <div>Debut Stream: September 7, 2017</div>
              <div>Height: 160 cm</div>
              <div>Fan Name: Sora-tomo (Sora’s Pals)</div>
              <div>Spotify name: AOI TSUBOMI (Sora’s Pals)</div>
            </div>
          </div>
        </div>
      </section> */}
      {/* </section> */}
      <AllFooterPage />
    </>
  );
};

export default DetailPage;
