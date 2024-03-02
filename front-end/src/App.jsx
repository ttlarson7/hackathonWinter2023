import { useState } from 'react'
import './App.css'
import 'daisyui/dist/full.css';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Landing from './routes/Landing'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}

export default App
