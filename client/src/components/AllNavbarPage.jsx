import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../stores/actionCreator/usersCreator";

const AllNavbarComponent = () => {
  const dispatcher = useDispatch();
  const movePage = useNavigate();
  const [showModal, setShowModal] = useState(false)
  const handleLogout = (event) => {
    event.preventDefault();
    dispatcher(logout());
    movePage("/");
  };

/// PAYMENT ///

  const [snapToken, setSnapToken] = useState('');

  useEffect(() => {
    const fetchSnapToken = async () => {
      try {
        const response = await fetch('http://localhost:3000/payments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'access_token' : localStorage.getItem("access_token")
          },
          body: JSON.stringify({
            amount: 60000, // Replace with actual amount
            order_id: 'your-order-id', // Replace with actual order ID
          }),
        });
        const { token } = await response.json();
        setSnapToken(token);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSnapToken();    
  }, [localStorage.getItem("isSubscribed")]);

  const updateStatus = async () => {
    try {
       await fetch('http://localhost:3000/users/subscribe', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'access_token' : localStorage.getItem("access_token")
        }
      });
      
        localStorage.setItem("isSubscribed", true)
    } catch (error) {
      console.error(error);
    }
  }

  const handlePayment = () => {
    if (!snapToken) {
      return;
    }
    window.snap.pay(snapToken, {
      onSuccess: (result) => {
        setShowModal(false)
        updateStatus()
        movePage('/about')
        console.log('Transaction success:', result);
      },
      onPending: (result) => {
        console.log('Transaction pending:', result);
      },
      onError: (result) => {
        console.error('Transaction error:', result);
      },
    });
  };


  return (
    <section id="Navbar" className="px-10 font-Montserrat">
      <div className="flex justify-between py-3 items-center bg-white">
        <Link to="/">
          <img
            className="w-14 drop-shadow-lg"
            src="https://ik.imagekit.io/bintangtopup/finalproject/nihonologo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675326925315"
            alt="logo"
          />
        </Link>
        <div className="flex text-sm gap-5 text-gray-400 font-semibold">
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
          
          <div className="flex gap-4">
          {console.log(localStorage.getItem("isSubscribed"),"ini loaclllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")}
            {localStorage.getItem("isSubscribed") === "false" ? (
                <a
                onClick={() => setShowModal(true)}
                className="bg-blue-500 rounded-lg px-5 py-1.5 text-sm text-white cursor-pointer"
              >
                Subscribe
              </a>
            ) : ""
            }
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

{showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Benefit
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
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
                  <button onClick={handlePayment}>Pay</button>
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

export default AllNavbarComponent;
