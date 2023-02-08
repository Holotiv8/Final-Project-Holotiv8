import AllFooterPage from "../components/AllFooterPage";
import AllNavbarComponent from "../components/AllNavbarPage";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="font-display">
      <AllNavbarComponent />
      <div className="loading-normal tracking-normal text-white bg-white h-screen">
        <div className="container flex flex-row justify-between items-center py-16">
          <div className="w-[32%] flex flex-col space-y-12 ml-[150px] mb-[150px]">
            <div className="text-gray-600">
              <h2 className="font-semibold text-xl uppercase mt-[150px]">
                NIHON NO LIVE GROUP
              </h2>
              <p className="font-medium text-[17px] font-serif mt-4 text-justify">
                With over 50,000,000 fans across all their channels, Nihon No
                Live Group is the all-female talent group that belongs to the
                Nihon No Live agency production.
              </p>
            </div>
            <div className="flex items-center">
              <main className="flex items-center justify-center bg-gray-100">
                <Link to={"/talents"}>
                  <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                    <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">
                      Our Talents
                    </span>
                  </button>
                </Link>
              </main>
            </div>
          </div>
          <div className="w-[650px] h-[20px] mb-[490px] mr-[50px] img-about">
            <img src="https://hololive.hololivepro.com/wp-content/themes/hololive/images/about_img.png" />
          </div>
        </div>
      </div>
      {/* 
      <div className="header-about-respon">
        <h1>Hear What Our Members Say</h1>
      </div> */}

      <section id="comment" class="mt-24">
        <div class="flex flex-col items-center mb-12">
          <h2 class="title-name font-semibold text-3xl">Review</h2>
          <span class="py-0.5 mt-2 px-20  rounded-full bg-blue-500"></span>
        </div>

        <div class="grid grid-cols-3 relative top-1/3">
          <div class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300">
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032577008"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">
                    Brian Rizki
                  </p>
                </div>
                <p class="text-gray-500 text-sm">9 Januari 2022, 14:08 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700 text-justify">
              "This Nihoners has a funny and entertaining personality, their
              interactions with viewers are enjoyable and their unique behavior
              always makes me look forward to their live streams."
            </p>
          </div>

          <div class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300">
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/bintangtopup.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673482886682"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">
                    Bintang Mochamad
                  </p>
                </div>
                <p class="text-gray-500 text-sm">10 Januari 2023, 10:09 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700 text-justify">
              "This Nihoners's on-screen presence is captivating and their
              virtual performances are always a treat to watch, their energy and
              enthusiasm bring a positive vibe to the live streams."
            </p>
          </div>

          <div class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300">
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032577634"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">
                    Argi Brambo
                  </p>
                </div>
                <p class="text-gray-500 text-sm">1 Januari 2023, 20:12 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700 text-justify">
              "This Nihoners has exceptional speaking abilities and a unique
              personality which makes their live streams always the best. Their
              interaction with viewers is also excellent and enhances the
              viewing experience."
            </p>
          </div>

          {/* review */}

          <div class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300">
            <div class="relative flex gap-4">
              <img
                src="https://i.pinimg.com/564x/40/61/35/406135d725d03e5f82b8fe20b1259eec.jpg"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">
                    Rayhan Qowi
                  </p>
                </div>
                <p class="text-gray-500 text-sm">23 Januari 2023, 14:08 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700 text-justify">
              "This Nihoners has a great sense of humor and their virtual
              performances are always entertaining. Their charming personality
              shines through in every live stream and keeps the audience
              engaged."
            </p>
          </div>

          <div class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300">
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032578577"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">
                     Ricko Wijaya
                  </p>
                </div>
                <p class="text-gray-500 text-sm">10 Maret 2022, 12:09 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700 text-justify">
              "This Nihoners's creativity and innovation in their virtual
              performances are truly impressive. They constantly bring new and
              exciting elements to their live streams, keeping the audience
              engaged and entertained."
            </p>
          </div>

          <div class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300">
            <div class="relative flex gap-4">
              <img
                src="https://i.pinimg.com/564x/0f/ae/ec/0faeece691d0f3f82e0b1ea6f554cff7.jpg"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">
                  Dian Aditya
                  </p>
                </div>
                <p class="text-gray-500 text-sm">1 Desember 2022, 07:12 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700 text-justify">
              "The Nihoners's ability to connect with their audience through
              their virtual performances is truly remarkable. Their charming and
              endearing personality, combined with their talent and creativity,
              make their live streams a must-watch."
            </p>
          </div>
        </div>
      </section>

      <AllFooterPage />
    </section>
  );
};

export default About;
