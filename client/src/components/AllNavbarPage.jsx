import { Link } from "react-router-dom"

const AllNavbarComponent = () => {
    return (
        <section id="Navbar" className="px-10">
        <div className="flex justify-between py-3 items-center bg-white">
        <Link to="/">
          <img
            className="w-14 drop-shadow-lg"
            src="https://ik.imagekit.io/bintangtopup/finalproject/nihonologo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675326925315"
            alt="logo"
          />
          </Link>
          <div className="flex text-sm gap-5 text-gray-400 font-medium">
            <Link to="#" className="text-blue-500">
              Top
            </Link>
            <Link to="#" className="hover:text-blue-500">
              News
            </Link>
            <Link to="#" className="hover:text-blue-500">
              Talent
            </Link>
            <Link to="#" className="hover:text-blue-500">
              Schedule
            </Link>
            <Link to="#" className="hover:text-blue-500">
              Events
            </Link>
            <Link to="#" className="hover:text-blue-500">
              Videos
            </Link>
            <Link to="#" className="hover:text-blue-500">
              Music
            </Link>
            <Link to="#" className="hover:text-blue-500">
              Merch
            </Link>
            <Link to="#" className="hover:text-blue-500">
              Special
            </Link>
          </div>
          <div className="">
            <button className="bg-[#E64848] rounded-lg px-5 py-1.5 text-white">
              Login
            </button>
          </div>
        </div>
      </section>
    )
}

export default AllNavbarComponent