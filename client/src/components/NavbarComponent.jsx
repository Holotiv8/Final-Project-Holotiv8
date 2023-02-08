import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../stores/actionCreator/usersCreator";
import { FaBookmark, FaCamera, FaCompactDisc, FaPlay } from "react-icons/fa";
import { toast } from "react-toastify";

const NavbarComponent = () => {
  const { pathname } = useLocation();
  const dispatcher = useDispatch();
  const movePage = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    dispatcher(logout());
    movePage("/");
    toast.success('Successfully Logout')
  };

  const activeStlye = {
    color: "rgb(86, 153, 225)",
  };
  /// PAYMENT ///

  const [snapToken, setSnapToken] = useState("");

  useEffect(() => {
    const fetchSnapToken = async () => {
      try {
        if (localStorage.getItem("access_token") && localStorage.getItem("isSubscribed") == "false") {
          const response = await fetch("http://localhost:3000/payments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              access_token: localStorage.getItem("access_token"),
            },
            body: JSON.stringify({
              amount: 60000, // Replace with actual amount
              order_id: "your-order-id", // Replace with actual order ID
            }),
          });
          const { token } = await response.json();
          setSnapToken(token);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchSnapToken();
  }, [localStorage.getItem("isSubscribed")]);

  const updateStatus = async () => {
    try {
      await fetch("http://localhost:3000/users/subscribe", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });

      localStorage.setItem("isSubscribed", true);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayment = () => {
    if (!snapToken) {
      return;
    }
    window.snap.pay(snapToken, {
      onSuccess: (result) => {
        setShowModal(false);
        updateStatus();
        navigate("/membership");
        console.log("Transaction success:", result);
      },
      onPending: (result) => {
        console.log("Transaction pending:", result);
      },
      onError: (result) => {
        console.error("Transaction error:", result);
      },
    });
  };

  const ScrollbarHide = () => {
    return (
      <style>
        {`
          #price::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    );
  };

  return (
    <section id="Navbar" className="font-Montserrat">
      <div className="flex justify-between py-3 items-center bg-white">
        <Link to="/">
          <img
            className="w-14 drop-shadow-lg"
            src="https://ik.imagekit.io/bintangtopup/finalproject/nihonologo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675326925315"
            alt="logo"
          />
        </Link>
        {localStorage.getItem("access_token") ? (
          <div className="flex text-sm gap-5 text-gray-400 font-semibold">
            <Link
              to="/talents"
              className="hover:text-blue-500"
              style={pathname === "/talents" ? activeStlye : {}}
            >
              Talent
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-500"
              style={pathname === "/about" ? activeStlye : {}}
            >
              About
            </Link>
            <Link
              to="/favorites"
              className="hover:text-blue-500"
              style={pathname === "/favorites" ? activeStlye : {}}
            >
              Favorites
            </Link>
            <Link
              to="/products"
              className="hover:text-blue-500"
              style={pathname === "/products" ? activeStlye : {}}
            >
              Merch
            </Link>
            {localStorage.getItem("isSubscribed") === "true" ? (
              <Link to="/membership" className="hover:text-blue-500">
                Membership
              </Link>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="flex text-sm gap-5 text-gray-400 font-semibold">
            <Link
              to="/talents"
              className="hover:text-blue-500"
              style={pathname === "/talents" ? activeStlye : {}}
            >
              Talent
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-500"
              style={pathname === "/about" ? activeStlye : {}}
            >
              About
            </Link>
            <Link
              to="/products"
              className="hover:text-blue-500"
              style={pathname === "/products" ? activeStlye : {}}
            >
              Merch
            </Link>
          </div>
        )}
        {localStorage.getItem("access_token") ? (
          <div className="flex gap-4">
            {localStorage.getItem("isSubscribed") === "false" ? (
              <a
                onClick={() => setShowModal(true)}
                className="bg-blue-500 rounded-lg px-5 py-1.5 text-sm text-white cursor-pointer"
              >
                Subscribe
              </a>
            ) : (
              ""
            )}
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

        <ScrollbarHide />

        {showModal ? (
          <>
            <div
              id="price"
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Benefit</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div> */}
                  {/*body*/}
                  <div className="relative flex gap-3 p-6 flex-auto">
                    <div className="w-8/12 grid grid-cols-2 gap-4">
                      <div className="rounded-xl p-4 bg-white drop-shadow-md flex flex-col gap-3">
                        <div className="text-white w-7 h-7 flex justify-center items-center rounded-md bg-blue-500">
                          <FaCamera />
                        </div>
                        <div className="font-medium">
                          Watch live stream talents
                        </div>
                        <div className="text-gray-400 w-8/12 text-sm">
                          You can watch live streaming with our best talents
                        </div>
                      </div>
                      <div className="rounded-xl p-4 bg-white drop-shadow-md flex flex-col gap-3">
                        <div className="text-white w-7 h-7 flex justify-center items-center rounded-md bg-blue-500">
                          <FaCompactDisc />
                        </div>
                        <div className="font-medium">
                          Listen to music our talent
                        </div>
                        <div className="text-gray-400 w-8/12 text-sm">
                          you can listen to a lot of original music
                        </div>
                      </div>
                      <div className="rounded-xl p-4 bg-white drop-shadow-md flex flex-col gap-3">
                        <div className="text-white w-7 h-7 flex justify-center items-center rounded-md bg-blue-500">
                          <FaPlay />
                        </div>
                        <div className="font-medium">
                          Watching videos our talents
                        </div>
                        <div className="text-gray-400 w-8/12 text-sm">
                          You can enjoy lots of your favorite talent videos
                        </div>
                      </div>
                      <div className="rounded-xl p-4 bg-white drop-shadow-md flex flex-col gap-3">
                        <div className="text-white w-7 h-7 flex justify-center items-center rounded-md bg-blue-500">
                          <FaBookmark />
                        </div>
                        <div className="font-medium">
                          Add favorite our talents
                        </div>
                        <div className="text-gray-400 w-8/12 text-sm">
                          You can add talent to favorites
                        </div>
                      </div>
                    </div>
                    <div className="w-4/12 rounded-xl p-4 bg-gradient-to-b from-sky-400 via-sky-400 to-white shadow-xl  ">
                      <div className="font-bold text-xl">Price</div>
                      <img
                        className="w-36 translate-x-6 drop-shadow-2xl"
                        src="https://ik.imagekit.io/Holotiv8/Final_Project/Detail/kobo_kanaeru_detail.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675091176285"
                        alt=""
                      />
                      <div className="text-2xl font-semibold mt-6 ">
                        Rp.59.<span className="text-base">999</span>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                    <button
                      onClick={handlePayment}
                      className="font-bold text-sm"
                    >
                      PAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default NavbarComponent;
