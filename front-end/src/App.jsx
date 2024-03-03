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
// {
//   name: "Test",
//   class: 'Wizard',
//   url: '../../assets/elf.png',
//   race: "Elf",
//   subrace: "High-elf",
//   level: 1,
//   background: "Acolyte",
//   alignment: "Chaotic Good",
//   languages: ["primordial", "goblin"],
//   description: "He is very tall",
//   stats: [10, 10, 10, 10, 10, 10],
//   abilities: "He can do everything mid"
// },
// {
//   name: "Test",
//   class: 'Wizard',
//   url: '../../assets/elf.png',
//   race: "Elf",
//   subrace: "High-elf",
//   level: 1,
//   background: "Acolyte",
//   alignment: "Chaotic Good",
//   languages: ["primordial", "goblin"],
//   description: "He is very tall",
//   stats: [10, 10, 10, 10, 10, 10],
//   abilities: "He can do everything mid"
// }

function App() {
  // Define your state variables here

  const [characters, setCharacters] = useState([]);

  const [globalName, setGlobalName] = useState('');
  const [globalRace, setGlobalRace] = useState('');
  const [globalClass, setGlobalClass] = useState('');
  const [globalAlignment, setGlobalAlignment] = useState('');
  const [globalBackground, setGlobalBackground] = useState('');
  const [globalDescription, setGlobalDescription] = useState('');
  const [globalLanguages, setGlobalLanguages] = useState('');
  const [globalTraits, setGlobalTraits] = useState([""]);
  const [globalTraitsDescription, setGlobalTraitsDescription] = useState([""]);
  const [globalAbilities, setGlobalAbilities] = useState([{
          speed: "",
          age: "",
          size: "",
          sizeDescription: "",
          traits: ["None"],
            traitsDescription: ["None"],
  },
  {
    hitDie: "0d0",
    proficiencies: [""],
savingThrows: [""],
    levelDescriptions: {},
startingEquipment: [""]
}
  ]);
  const [globalStats, setGlobalStats] = useState([1]);

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
      setGlobalDescription,
      globalName,
      setGlobalName,
      globalLanguages,
      setGlobalLanguages,
      globalAbilities,
      setGlobalAbilities,
      globalStats,
      setGlobalStats,
      globalTraits,
      setGlobalTraits,
      globalTraitsDescription,
      setGlobalTraitsDescription
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
