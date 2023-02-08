import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiStreamOff, CiStreamOn } from "react-icons/ci";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { fectMembersVideo } from "../stores/actionCreator/talentsCreator";
import { Link } from "react-router-dom";
import AllNavbarComponent from "../components/AllNavbarPage";
import AllFooterPage from "../components/AllFooterPage";
import MemberCard from "../components/MemberCard";
const MemberPage = () => {
  const { oneIdol } = useSelector((state) => state.idols);
  const dispatcher = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const fetchOneIdol = async () => {
    try {
      await dispatcher(fectMembersVideo());
      console.log("masukkkkk");
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

  const ScrollbarHide = () => {
    return (
      <style>
        {`
          #schecdule_stream::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    );
  };

  const scrollLeft = () => {
    document.getElementById(`${type}`).scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById(`${type}`).scrollLeft += 400;
  };

  const ScrollbarHideVideo = () => {
    return (
      <style>
        {`
          #video_youtube::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    );
  };

  // COUNTOWN

  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [countdown, setCountdown] = useState(null);
  const beerTime = new Date("Feb 10, 2023 14:00:00").getTime();
  const now = new Date().getTime();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = beerTime - currentTime;

      setDays(padNum(Math.floor(distance / (1000 * 60 * 60 * 24))));
      setHours(
        padNum(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        )
      );
      setMinutes(
        padNum(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      );
      setSeconds(padNum(Math.floor((distance % (1000 * 60)) / 1000)));

      if (distance < 0) {
        clearInterval(countdown);
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      }
    }, 100);
    setCountdown(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  const padNum = (num) => {
    let zero = "";
    for (let i = 0; i < 2; i++) {
      zero += "0";
    }
    return (zero + num).slice(-2);
  };

  // COUNDOWN  END
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

  return (
    <div className="font-display">
      <AllNavbarComponent />

      {/* COUNT DOWN */}

      <section id="coundwond" className="">
        {/* <div>username, </div> */}
        <div className="flex flex-col items-center translate-x-[-1%] ">
          <h1 class="text-3xl text-blue-500 text-center mb-3 font-normal font-display">
            Hi {localStorage.getItem("username")},{" "}
            {localStorage.getItem("role") == "Admin"
              ? " your stream will start in"
              : "Live streaming will start in"}
          </h1>
          <div className="text-6xl text-center flex w-full items-center justify-center">
            <div className="w-24 mx-1 p-2 bg-gray-700 text-white rounded-lg">
              <div className="font-mono leading-none" x-text="days">
                {days}
              </div>
              <div className="font-mono uppercase text-sm leading-none">
                Days
              </div>
            </div>
            <div className="w-24 mx-1 p-2 bg-gray-700 text-white rounded-lg">
              <div className="font-mono leading-none" x-text="hours">
                {hours}
              </div>
              <div className="font-mono uppercase text-sm leading-none">
                Hours
              </div>
            </div>
            <div className="w-24 mx-1 p-2 bg-gray-700 text-white rounded-lg">
              <div className="font-mono leading-none" x-text="minutes">
                {minutes}
              </div>
              <div className="font-mono uppercase text-sm leading-none">
                Minutes
              </div>
            </div>
            <div className="w-24 mx-1 p-2 bg-gray-700 text-white rounded-lg">
              <div className="font-mono leading-none" x-text="seconds">
                {seconds}
              </div>
              <div className="font-mono uppercase text-sm leading-none">
                Seconds
              </div>
            </div>
          </div>
          {localStorage.getItem("role") == "Admin" ? (
            <Link
              to="/room"
              className="bg-[#D61C4E] rounded-lg px-6 py-1.5 mt-12 text-base text-white cursor-pointer"
            >
              Go Live
            </Link>
          ) : (
            <Link
              to="/room?roomID=VtlVf&role=Audience"
              className="bg-[#D61C4E] rounded-lg px-6 py-1.5 mt-12 text-base text-white cursor-pointer"
            >
              Watch Stream
            </Link>
          )}
        </div>
      </section>

      {/* COUNT DOWN */}

      <div id="schecdule" className="w-10/12 my-16 font-display">
        <ScrollbarHide />
        <div className="flex flex-col items-center mb-12 ml-44">
          <h2 className=" font-semibold text-5xl">Schedule</h2>
          <span className="py-0.5 mt-2 px-[105px] rounded-full bg-blue-500"></span>
        </div>
        <div
          id="schecdule_stream"
          className="bg-gray-800 relative flex flex-col mx-28 rounded-2xl drop-shadow-2xl h-[500px] w-full p-16 overflow-scroll shadow-inner"
        >
          <ol className="relative border-l border-gray-200">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  className="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/moona_hoshinova_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090978351"
                  alt="Bonnie image"
                />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white ">
                Moona Hoshinova{" "}
                <span className="bg-blue-500 text-White text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ml-3">
                  Now
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://i.ytimg.com/vi/sp-aDdSqIac/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLALjAE7P7iVdM_hBFpKpbFWuz_f5w"
                  alt=""
                />
                <div>
                  <div>
                    【Movie Night】Let's watch a movie! and talk!!!!【Moona】
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/moona_hoshinova_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090978351"
                      alt="img"
                    />
                    <div className="text-xs">Moona Hoshinova</div>
                  </div>
                  <div className="flex gap-1 rounded-sm py-[5px] px-[10px] w-[70px] bg-[#cc0000e6] text-white">
                    <CiStreamOn className="font-bold" />{" "}
                    <div className="text-xs">Live</div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  className="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/kobo_kanaeru_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090975077"
                  alt="Bonnie image"
                />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Kobo Kanaeru{" "}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://i.ytimg.com/vi/SF-_47-oCtk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhhTcgzxuC4AiJ2sxKJXZkJH2Wpg"
                  alt=""
                />
                <div>
                  <div>
                    【ORIGINAL SONG MV】Mantra Hujan - Kobo Kanaeru 【hololive
                    Indonesia 3rd Gen】
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/kobo_kanaeru_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090975077"
                      alt="img"
                    />
                    <div className="text-xs">Kobo Kanaeru</div>
                  </div>
                  <div className="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  className="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/gawr_gura_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973690"
                  alt="Bonnie image"
                />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Gawr Gura{" "}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={280}
                  src="https://i.ytimg.com/vi/yL7ndXwvBu4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDY-P9U-YLZ5yAWH-FoqZd8Reqcaw"
                  alt=""
                />
                <div>
                  <div>
                    [ORIGINAL ANIMATION] Gawr Gura - GTA V DUDE wheres my car
                    #GawrGura
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/gawr_gura_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973690"
                      alt="img"
                    />
                    <div className="text-xs">Gawr Gura</div>
                  </div>
                  <div className="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  className="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/gawr_gura_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973690"
                  alt="Bonnie image"
                />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Gawr Gura{" "}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://i.ytimg.com/vi/nCQ_zZIiGLA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaXdGzRIvmaI0ldBWSfhBdfvIp8w"
                  alt=""
                />
                <div>
                  <div>
                    Renai Circulation / Gawr Gura x Murasaki Shion (Cover)
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/gawr_gura_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973690"
                      alt="img"
                    />
                    <div className="text-xs">Gawr Gura</div>
                  </div>
                  <div className="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  className="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/amelia_watson_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973746"
                  alt="Bonnie image"
                />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Watson Amelia{" "}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://i.ytimg.com/vi/Y5t-sNYgxDg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAdnEbzlyX-pbi6UJtRBR_-oyR0Yg"
                  alt=""
                />
                <div>
                  <div>Lorem, ipsum dolor sit amet consectetur adipisicing</div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/amelia_watson_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973746"
                      alt="img"
                    />
                    <div className="text-xs">Watson Amelia</div>
                  </div>
                  <div className="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  className="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/sakura_miko_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090970471"
                  alt="Bonnie image"
                />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Sakura Miko{" "}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://img.youtube.com/vi/YrcTKMAqrNo/mqdefault.jpg"
                  alt=""
                />
                <div>
                  <div>
                    【 FCスーパーマリオブラザーズ
                    】クリアまで‼マリオの達人に俺はなる、にぇ！！！！🔥【ホロライブ/さくらみこ
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/sakura_miko_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090970471"
                      alt="img"
                    />
                    <div className="text-xs">Sakura Miko</div>
                  </div>
                  <div className="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  className="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/tokino_sora_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675005825239"
                  alt="Bonnie image"
                />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Tokino Sora{" "}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://i.ytimg.com/vi/gTBEgaN9ZlI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTTXgev27MbghIoi8ho8m168DZVg"
                  alt=""
                />
                <div>
                  <div>
                    『e-ma e-ma』歌って踊ってみた【ホロライブ / ときのそら】
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/tokino_sora_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675005825239"
                      alt="img"
                    />
                    <div className="text-xs">Tokino Sora</div>
                  </div>
                  <div className="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div id="video_member">
        <div className="flex flex-col items-center mb-12 ml-30">
          <h2 className=" font-semibold text-5xl">Exclusive videos</h2>
          <span className="py-0.5 mt-2 px-[190px] rounded-full bg-blue-500"></span>
        </div>

        <div
          id="videos_carousel"
          className="bg-[url('https://cdn.discordapp.com/attachments/1032216384941342741/1072849481101475860/IMG_2198.jpg')]"
        >
          <div className={`relative h-[320px] pt-9`}>
            <div className="absolute right-0 translate-y-[-60%] ">
              <>
                <button
                  onClick={scrollLeft}
                  className="p-2 m-2 rounded-full bg-white"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-2 m-2 rounded-full bg-white"
                >
                  <FiChevronRight />
                </button>
              </>
            </div>
            <ScrollbarHideVideo />
            <div
              id="video_youtube"
              className="carousel p-4 flex items-start justify-start self-start overflow-x-auto scroll-smooth  scrollbar-hide"
            >
              {oneIdol.map((el) => {
                return (
                  <div>
                    <MemberCard videos={el} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ttttttttttttessssssssss */}
      <AllFooterPage />
    </div>
  );
};

export default MemberPage;
