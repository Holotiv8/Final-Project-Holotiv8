import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../stores/actionCreator/usersCreator";
const NavbarComponent = () => {
  const dispatcher = useDispatch();
  const movePage = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    dispatcher(logout());
    movePage("/");
  };
  return (
    <section id="Navbar">
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
          <Link to="/talents" className="hover:text-blue-500">
            Talent
          </Link>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/favorites" className="hover:text-blue-500">
            Favorites
          </Link>
          <Link to="#" className="hover:text-blue-500">
            Videos
          </Link>
          <Link to="#" className="hover:text-blue-500">
            Music
          </Link>
          <Link to="/products" className="hover:text-blue-500">
            Merch
          </Link>
          <Link to="#" className="hover:text-blue-500">
            Special
          </Link>
        </div>
        {localStorage.getItem("access_token") ? (
          <div className=" flex gap-4">
            <a
              onClick={handleLogout}
              className="bg-[#D61C4E] rounded-lg px-5 py-1.5 text-sm text-white cursor-pointer"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className=" flex gap-4">
            <Link
              to="/login"
              className="bg-[#D61C4E] rounded-lg px-5 py-1.5 text-sm text-white cursor-pointer"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default NavbarComponent;
