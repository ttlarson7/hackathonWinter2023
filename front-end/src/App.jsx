import { useState, createContext } from 'react'

import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import { SignOutButton, SignInButton, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react"
import { GlobalStateProvider } from './GlobalState';
import Home from './routes/Home'
import Landing from './routes/Landing'
import CharacterSelect from './routes/CharacterSelect';


function App() {

  return (
    <GlobalStateProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<SignedIn><Home /></SignedIn>} />
        <Route path="/character" element={<CharacterSelect/>}/>
      </Routes>
    </GlobalStateProvider>
  )
}

export default App
