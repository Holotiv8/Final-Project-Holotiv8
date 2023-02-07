import React, { Component, useEffect, useState } from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
// offline API
// import { fetchDataDetailIdol } from "../stores/actionCreator/talentsCreator";
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
      <div className="flex items-center justify-center min-h-screen">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
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
      {/* <Carousel
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
      )} */}

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
