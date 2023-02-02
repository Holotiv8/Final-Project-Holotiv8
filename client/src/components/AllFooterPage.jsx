import {
    FaTwitter,
    FaYoutube,
    FaFacebook,
  } from "react-icons/fa";

const AllFooterPage = () => {
    return(
    <section id="footer" className="pt-8 px-8">
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
                Lorem ipsum dolor sit, amet consectetur adipisicing.
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
              </div>
            </div>
            <div className="w-2/6 flex flex-col gap-4">
              <h1 className="font-semibold">Resources</h1>
              <a href="#">Lorem,ipsum</a>
              <a href="#">Lorem,ipsum</a>
              <a href="#">Lorem,ipsum</a>
              <a href="#">Lorem,ipsum</a>
            </div>
            <div className="w-2/6 flex flex-col gap-4">
              <h1 className="font-semibold">About us</h1>
              <a href="#">Lorem,ipsum</a>
              <a href="#">Lorem,ipsum</a>
              <a href="#">Lorem,ipsum</a>
              <a href="#">Lorem,ipsum</a>
            </div>
          </div>
          <div className="w-4/12 flex flex-col gap-2 mr-36">
            <div className="text-lg font-bold">Subscribe to new Newsletter</div>
            <div className="text-xs text-gray-400">What are you waiting for ? Order and our progress!</div>
            <form class="flex items-center">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div class="relative">
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="p-2.5 ml-4 text-xs text-white rounded-lg border bg-[#D61C4E] hover:bg-[#C21010]"
                >
                  Subscribe now
                </button>
              </form>
          </div>
        </div>
      </section>
    )
}
export default AllFooterPage