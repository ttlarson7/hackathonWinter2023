import { useState } from 'react'
import './App.css'
import 'daisyui/dist/full.css';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Landing from './routes/Landing'
import Home from './routes/Home'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {

  return (
    <Routes>
      <Route path="/" element={<SignedOut><Landing /></SignedOut>} />
      <Route path="/home" element={<SignedIn><Home /></SignedIn>} />
    </Routes>
  )
}

export default App
