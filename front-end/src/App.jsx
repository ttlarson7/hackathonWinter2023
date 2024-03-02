import { useState, createContext } from 'react'

import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import { SignOutButton, SignInButton, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react"

import Home from './routes/Home'
import Landing from './routes/Landing'
import Login from './routes/Login';
import CharacterPage from './routes/CharacterPage';
export const CharacterContext = createContext(null);

function App() {

  const [characters, setCharacters] = useState([{ name: "Test", class: 'Wizard', race: "Elf", subrace: "High-elf", level: 1, background: "Acolyte", alignment: "Chaotic Good", languages: ["primordial", "goblin"], description: "He is very tall", stats: [10, 10, 10, 10, 10, 10], abilities: "He can do everything mid" },
  { name: "Test", class: 'Wizard', race: "Elf", subrace: "High-elf", level: 1, background: "Acolyte", alignment: "Chaotic Good", languages: ["primordial", "goblin"], description:"He is very tall", stats:[10,10,10,10,10,10], abilities: "He can do everything mid" }]);

  return (
    <CharacterContext.Provider value={{
      characters, 
      setCharacters}}>
    <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
            path="/home"
            element={
              <>
                <SignedIn>
                  <Home />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
        />
        <Route path="/character/:id" element={
          <><SignedIn>
          <CharacterPage />
        </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
            </SignedOut>
          </>
          }
        />
    </Routes>
    </CharacterContext.Provider>
  )
}

export default App
