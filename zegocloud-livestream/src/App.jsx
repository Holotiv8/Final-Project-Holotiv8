import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import HomePage from '../pages/home'
import RoomPage from '../pages/room'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/room/' element={<RoomPage/>} />
        {/* <Route path='/room/:roomId' element={<RoomPage/>} /> */}
      </Routes>
    </div>
  )
}

export default App
