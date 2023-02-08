import {
    FaTwitter,
    FaYoutube,
    FaFacebook,
    FaWhatsapp
  } from "react-icons/fa";

const FooterHomePage = () => {
    return(
        <section id="footer" className="pt-8 pb-8 font-display">
      <div className="py-[1px] px-12 rounded-full bg-blue-300 mb-9"></div>
        <div className="flex items-start justify-between">
          <div className="w-6/12 text-xs flex items-center">
            <div className="w-2/6 flex flex-col gap-6">
              <img
                className="w-14 drop-shadow-lg"
                src="https://ik.imagekit.io/bintangtopup/finalproject/nihonologo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675326925315"
                alt="logo"
              />
              <div className="">
                Pondok Indah, Jakarta 12310 <br /> © 2023 Nihon No Live.
              </div>
              <div className="flex gap-4 text-lg">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <div className="w-2/6 ml-14 flex flex-col gap-4">
              <h1 className="font-semibold">Services</h1>
              <a href="#">Members</a>
              <a href="#">Live Stream</a>
              <a href="#">Video</a>
              <a href="#">Music</a>
            </div>
            <div className="w-2/6 flex flex-col gap-4">
              <h1 className="font-semibold">About us</h1>
              <a href="#">Blog</a>
              <a href="#">Twitter</a>
              <a href="#">Youtube</a>
              <a href="#">Whatsapp</a>
            </div>
          </div>
          <div className="w-4/12 flex flex-col gap-2 mr-36">
            <div className="text-lg font-bold">Get the latest information</div>
            <div className="text-xs text-gray-400">We will send you the latest information via the email you sent</div>
            <form class="flex items-center">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div class="relative">
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="youremail@email.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="p-2.5 ml-4 text-xs text-white rounded-lg border bg-[#D61C4E] hover:bg-[#C21010]"
                >
                  send email
                </button>
              </form>
          </div>
        </div>
      </section>
    )
}
export default FooterHomePage