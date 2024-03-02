import { useState, createContext } from 'react'

import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import { SignOutButton, SignInButton, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react"

import Home from './routes/Home'
import Landing from './routes/Landing'



function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<SignedIn><Home /></SignedIn>} />
    </Routes>
  )
}

export default App
