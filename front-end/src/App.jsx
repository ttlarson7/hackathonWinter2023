import React, { useState, createContext } from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import { SignOutButton, SignInButton, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Home from './routes/Home';
import Landing from './routes/Landing';
import Login from './routes/Login';
import CharacterPage from './routes/CharacterPage';
import CharacterCreator from './routes/CharacterCreator';
// Create the context
export const GlobalStateContext = createContext();

function App() {
  // Define your state variables here
  const [characters, setCharacters] = useState([
    {
      name: "Test",
      class: 'Wizard',
      url: '../../assets/elf.png',
      race: "Elf",
      subrace: "High-elf",
      level: 1,
      background: "Acolyte",
      alignment: "Chaotic Good",
      languages: ["primordial", "goblin"],
      description: "He is very tall",
      stats: [10, 10, 10, 10, 10, 10],
      abilities: "He can do everything mid"
    },
    {
      name: "Test",
      class: 'WARRIOR',
      url: '../../assets/elf.png',
      race: "Elf",
      subrace: "High-elf",
      level: 1,
      background: "Acolyte",
      alignment: "Chaotic Good",
      languages: ["primordial", "goblin"],
      description: "He is very tall",
      stats: [10, 10, 10, 10, 10, 10],
      abilities: "He can do everything mid"
    }
  ]);

  const [globalRace, setGlobalRace] = useState('');
  const [globalClass, setGlobalClass] = useState('');
  const [globalAlignment, setGlobalAlignment] = useState('');
  const [globalBackground, setGlobalBackground] = useState('');
  const [globalDescription, setGlobalDescription] = useState('');

  return (
    <GlobalStateContext.Provider value={{
      characters,
      setCharacters,
      globalRace,
      setGlobalRace,
      globalClass,
      setGlobalClass,
      globalAlignment,
      setGlobalAlignment,
      globalBackground,
      setGlobalBackground,
      globalDescription, 
      setGlobalDescription
    }}>
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
        <Route
          path="/character/:id"
          element={
            <>
              <SignedIn>
                <CharacterPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="/characterCreator" element={
          <>
            <SignedIn>
              <CharacterCreator />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }/>
      </Routes>
    </GlobalStateContext.Provider>
  );
}

export default App;
