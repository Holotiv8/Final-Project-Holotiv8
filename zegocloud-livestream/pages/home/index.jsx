import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    // e.preventDefault()
    // navigate(`/room/${roomCode}`)
    navigate(`/room`);
  };
  const handleAudience = () => {
    navigate("/room?roomID=VtlVf&role=Audience");
  };
  return (
    <section className="main-live">
      <div className="navbar-live">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Talents</a>
          </li>
          <li>
            <a>Favorites</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>

      <div className="content-live-stream">
        <h1>Live Streaming Now</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="home-page">
          {/* <form onSubmit={handleFormSubmit} className="form">
                  <div>
                      <label htmlFor="">Enter Room Code</label>
                      <input value={roomCode} onChange={e => setRoomCode(e.target.value)} type="text" required placeholder="Enter Room Code" />
                  </div>
                  <button type="submit">Enter Room</button>
              </form> */}
          <button onClick={handleFormSubmit}><span></span>Admin</button>
          <button onClick={handleAudience}><span></span>Audience</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
