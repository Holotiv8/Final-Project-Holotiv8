import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeLiveStreaming = () => {
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
      <div className="content-live-stream">
        <h1>Live Streaming Now</h1>
        <p>
          Welcome to my world. Thank you for subscribing and following this
          live stream! I hope you guys will enjoy it. Everthing is gonna be okay. 
        </p>
        <div className="home-page">
          {/* <form onSubmit={handleFormSubmit} className="form">
                  <div>
                      <label htmlFor="">Enter Room Code</label>
                      <input value={roomCode} onChange={e => setRoomCode(e.target.value)} type="text" required placeholder="Enter Room Code" />
                  </div>
                  <button type="submit">Enter Room</button>
              </form> */}
          <button onClick={handleFormSubmit}>
            <span></span>Admin
          </button>
          <button onClick={handleAudience}>
            <span></span>Audience
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeLiveStreaming;
