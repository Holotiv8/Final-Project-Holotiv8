import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const HomePage= () => {
    const [roomCode, setRoomCode]= useState('')
    const navigate= useNavigate()
    const handleFormSubmit= (e) => {
        // e.preventDefault()
        // navigate(`/room/${roomCode}`)
        navigate(`/room`)
    }
    const handleAudience= () => {
        navigate('/room?roomID=VtlVf&role=Audience')
      }
    return (
        <div className='home-page'>
            {/* <form onSubmit={handleFormSubmit} className="form">
                <div>
                    <label htmlFor="">Enter Room Code</label>
                    <input value={roomCode} onChange={e => setRoomCode(e.target.value)} type="text" required placeholder="Enter Room Code" />
                </div>
                <button type="submit">Enter Room</button>
            </form> */}
                <button onClick={handleFormSubmit}>Admin</button>
                <button onClick={handleAudience}>Audience</button>
        </div>
    )
}

export default HomePage