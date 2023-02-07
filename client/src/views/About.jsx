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
          <div
            class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300"
          >
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032577008"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                   Mamang Rival
                  </p>
                </div>
                <p class="text-gray-500 text-sm">9 Januari 2022, 14:08 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, a consequatur perferendis dolore accusantium consectetur ab delectus earum iste incidunt.
            </p>
          </div>

          <div
            class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300"
          >
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032578577"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                    mamang brian
                  </p>
                </div>
                <p class="text-gray-500 text-sm">10 Januari 2023, 10:09 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi velit ipsam fuga quia, ad repudiandae placeat tempore molestiae rem recusandae doloribus!
            </p>
          </div>

          <div
            class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300"
          >
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032577634"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                  mamang
                  </p>
                </div>
                <p class="text-gray-500 text-sm">1 Januari 2023, 20:12 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil sit ut porro at explicabo maxime odio qui provident ducimus!
            </p>
          </div>


          {/* review */}

          <div
            class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300"
          >
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032577008"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                   Mamang Rival
                  </p>
                </div>
                <p class="text-gray-500 text-sm">9 Januari 2022, 14:08 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, a consequatur perferendis dolore accusantium consectetur ab delectus earum iste incidunt.
            </p>
          </div>

          <div
            class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300"
          >
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032578577"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                    mamang brian
                  </p>
                </div>
                <p class="text-gray-500 text-sm">10 Januari 2023, 10:09 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi velit ipsam fuga quia, ad repudiandae placeat tempore molestiae rem recusandae doloribus!
            </p>
          </div>

          <div
            class="mx-4 relative gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300"
          >
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032577634"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                  mamang
                  </p>
                </div>
                <p class="text-gray-500 text-sm">1 Januari 2023, 20:12 PM</p>
              </div>
            </div>
            <p class="mt-2 text-blue-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil sit ut porro at explicabo maxime odio qui provident ducimus!
            </p>
          </div>
        </div>
      </section>

      <AllFooterPage />
    </section>
  );
};

export default About;
