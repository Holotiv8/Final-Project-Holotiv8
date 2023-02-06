import {
  FaMapMarkerAlt,
  FaRegBookmark,
  FaArrowUp,
  FaCamera,
  FaCompactDisc,
  FaPlay,
  FaTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import NavbarComponent from "../components/NavbarComponent";
import FooterHomePage from "../components/FooterHomePage";

const HomePage = () => {
  return (
    <div className="w-full px-10 font-display">
      <NavbarComponent />

      <section id="main_banner" className="mt-16 mb-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm w-6/12 text-blue-500">
              <FaMapMarkerAlt />
              <span className="font-bold"> Jakarta, Indonesia</span>
            </div>
            <div className="text-5xl font-bold w-10/12">
              <span className="text-blue-500">Virtualy</span> Connected{" "}
              <span className="text-blue-500">lorem</span> lorem lorem in{" "}
              <span className="text-blue-500">Japan!</span>
            </div>
            <div className="text-gray-400 w-8/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, sapiente.
            </div>
            <div className="flex gap-2">
              <a href="#">
                <img
                  className="w-7 rounded-full"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/ayunda_risu_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090978835"
                  alt="telent_img"
                />
              </a>
              <a href="#">
                <img
                  className="w-7 rounded-full"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/pavolia_reine_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090978026"
                  alt="telent_img"
                />
              </a>
              <a href="#">
                <img
                  className="w-7 rounded-full"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/robocosan_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973462"
                  alt="telent_img"
                />
              </a>
              <a href="#">
                <img
                  className="w-7 rounded-full border-solid border-2 border-red-500"
                  src="https://hololive.hololivepro.com/wp-content/uploads/2022/03/3_%E3%81%93%E3%81%BC%E3%83%BB%E3%81%8B%E3%81%AA%E3%81%88%E3%82%8B.png"
                  alt="telent_img"
                />
              </a>
            </div>
            <div>
              <button className="bg-[#D61C4E] hover:bg-[#C21010] mt-4 rounded-lg px-4 py-2 text-white text-sm">
                Read More
              </button>
            </div>
          </div>
          {/* <div className="w-6/12 bg-sky-500"> */}
          <img
            className="rounded-t-full w-96 h-[450px]"
            src="https://i.pinimg.com/474x/25/ff/c9/25ffc98ee513d011c3187598d87d0794.jpg"
            alt="banner_img"
          />
          {/* </div> */}
        </div>
      </section>

      <section id="company" className="my-36">
        <div className="flex justify-around">
          <img
            className="w-44 grayscale hover:grayscale-0 "
            src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/1369026/97421_520704.png"
            alt=""
          />
          <img
            className="w-32 grayscale hover:grayscale-0"
            src="https://ik.imagekit.io/bintangtopup/finalproject/company_logo/logo_vshojo-removebg-preview.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675318023290"
            alt=""
          />
          <img
            className="w-40 grayscale hover:grayscale-0"
            src="https://www.nijisanji.jp/logo/nijisanji_logo_en.svg"
            alt=""
          />
          <img
            className="w-40 grayscale hover:grayscale-0"
            src="https://fanclub.nijisanji.jp/_nuxt/img/nijisanji-fanclub.ecf5147.svg"
            alt=""
          />
        </div>
      </section>

      <section id="service" className="my-16">
        <div className="flex justify-between">
          <div className="flex flex-col w-4/12 gap-6">
            <div className=" text-4xl font-bold">
              <span className="text-blue-500">How does our</span>
              <br />
              service work!
            </div>
            <div className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              cum. Lorem ipsum dolor
            </div>

            <div>
              <button className="bg-[#D61C4E] hover:bg-[#C21010]  mt-4 rounded-lg px-4 py-2 text-white text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-6/12 grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4 bg-white drop-shadow-md flex flex-col gap-3">
              <div className="text-white w-7 h-7 flex justify-center items-center rounded-md bg-blue-500">
                <FaCamera />
              </div>
              <div className="font-medium">Book a destination</div>
              <div className="text-gray-400 w-8/12 text-sm">
                Order in advance, don't warry, it not complicated
              </div>
            </div>
            <div className="rounded-xl p-4 bg-white drop-shadow-md flex flex-col gap-3">
              <div className="text-white w-7 h-7 flex justify-center items-center rounded-md bg-blue-500">
                <FaCompactDisc />
              </div>
              <div className="font-medium">Book a destination</div>
              <div className="text-gray-400 w-8/12 text-sm">
                Order in advance, don't warry, it not complicated
              </div>
            </div>
            <div className="rounded-xl p-4 bg-white drop-shadow-md flex flex-col gap-3">
              <div className="text-white w-7 h-7 flex justify-center items-center rounded-md bg-blue-500">
                <FaPlay />
              </div>
              <div className="font-medium">Book a destination</div>
              <div className="text-gray-400 w-8/12 text-sm">
                Order in advance, don't warry, it not complicated
              </div>
            </div>
            <div className="rounded-xl p-4 bg-white drop-shadow-md flex flex-col gap-3">
              <div className="text-white w-7 h-7 flex justify-center items-center rounded-md bg-blue-500">
                <FaRegBookmark />
              </div>
              <div className="font-medium">Book a destination</div>
              <div className="text-gray-400 w-8/12 text-sm">
                Order in advance, don't warry, it not complicated
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galeri">
        <p className="font-bold text-3xl text-center items-center my-16">
          <span className="text-blue-500">Features</span> that we provide for
          you
        </p>
        <div className="flex justify-between items-center my-8">
          <div className="flex items-end gap-3 w-8/12">
            <img
              className="rounded-t-full w-56 h-[400px] shadow-2xl object-cover"
              src="https://i.pinimg.com/750x/96/21/31/962131870a0472c9c2174c4a531e25ee.jpg"
              alt="img1"
            />
            <img
              className="rounded-t-full w-56 h-[300px] shadow-2xl object-cover"
              src="https://i.pinimg.com/564x/81/77/e5/8177e5f6370d3f398247b454294abcc6.jpg"
              alt=""
            />
            <img
              className="rounded-t-full w-56 h-[500px] shadow-2xl object-cover"
              src="https://ik.imagekit.io/bintangtopup/finalproject/img3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675303321781"
              alt=""
            />
          </div>
          <div className="flex flex-col w-5/12 gap-6">
            <div className=" text-3xl font-bold">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              cum. Lorem ipsum dolor Lorem ipsum dolor sit. Lorem ipsum dolor
              sit amet consectetur.
            </div>

            <div>
              <button className="bg-[#D61C4E] hover:bg-[#C21010] mt-4 rounded-lg px-4 py-2 text-white text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="question" className="my-16">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-5">
            <div className="text-4xl font-bold">
              Have a <span className="text-blue-500">Question ?</span>
              <br />
              look here <span className="text-yellow-400">🗲</span>
            </div>
            <div className="flex gap-6">
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div class="relative w-full">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="search your question"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="p-2.5 ml-4 text-sm font-medium text-white bg-[#D61C4E] hover:bg-[#C21010] rounded-lg "
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
            <a className="flex items-center text-center gap-2 text-base font-medium text-[#E64848] hover:underline">
              See more question <FaArrowUp className="rotate-45" />
            </a>
          </div>
          <div className="w-6/12 flex flex-col gap-6">
            <div className="flex flex-col gap-2 bg-white rounded-xl shadow-md p-2">
              <p className="font-medium">Lorem ipsum dolor sit amet.</p>
              <div className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium ipsam dolores possimus voluptate ab similique.
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded-xl shadow-md p-2">
              <p className="font-medium">Lorem ipsum dolor sit amet.</p>
              <div className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium ipsam dolores possimus voluptate ab similique.
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded-xl shadow-md p-2">
              <p className="font-medium">Lorem ipsum dolor sit amet.</p>
              <div className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium ipsam dolores possimus voluptate ab similique.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footernya belum fix */}
      <FooterHomePage />
    </div>
  );
};

export default HomePage;
