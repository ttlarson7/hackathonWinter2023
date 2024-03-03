import React from 'react';
import faerunImage from '../assets/faerun.jpg';

import Example1 from '../assets/Example1.jpg';
import Example2 from '../assets/Example2.jpg';
import Example3 from '../assets/Example3.jpg';
import "../index.css";
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
export default function Landing() {
  return (
      <div>
          <Navbar page={1} />
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${faerunImage})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
                      <h1 className="opacity-100 mb-20 animate-text bg-gradient-to-r from-quad via-primary to-quad bg-clip-text text-transparent text-9xl font-black animate-slow">Realm Roster</h1>
                      
            <p className="mb-5 mt-5 text-white text-3xl font-bold">The perfect place to let your imagination run wild</p>
          </div>
        </div>
          </div>
          <div className="hero min-h-screen bg-background">
          <div className="hero min-h-screen bg-background">
                  <div className="hero-content flex flex-col lg:flex-row justify-center items-center">
                      <div className="flex flex-col items-center">
                          <div className="flex space-x-4 ">
                          <div className="max-w-52 h-64 ">
                                <img src={`${Example1}`} className="object-contain h-full " />
                            </div>
                                <div className="max-w-52 h-64">
                                <img src={`${Example2}`} className="object-contain h-full" />
                            </div>
                          </div>
                          <div>
                          <div className="max-w-52 h-64">
                                <img src={`${Example3}`} className="object-contain h-full" />
                            </div>
                          </div>
                      </div>
                      <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-primary">Build your next DND Character</h1>
                    <p className="py-6">We all hate having to get a new character sheet for everytime we get TPKed. Realm Roster is the one stop shop for all your character needs!</p>
                    </div>
            </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-tertiary">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <svg fill="#ff0000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 260 260" enable-background="new 0 0 260 260" xml:space="preserve" stroke="#ff0000">

          <g id="SVGRepo_bgCarrier" stroke-width="0"/>

          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

          <g id="SVGRepo_iconCarrier"> <path d="M199.02,231.09c-13.25-57.48-90.49-86.23-108.58-107.12c-9.3-10.74-6.97-22.15-1.16-28.29c6.24-6.58,18.13-7.88,27-2.09 c7.76,5.05,22.86,19.06,26.25,24.23c3.39,5.16,3.35,9.43,5.17,12.9c2.07,3.9,6.75,5.98,13.53,3.95c6.28-1.87,9.75-4.35,9.75-4.35 s-6.56-0.25-9.16-3.94c0,0-9.1-19.95-12.36-28.11c10.43,2.77,17.05,5.97,21.68,8.89c0.57,4.44-1.32,12.09-1.4,12.43 c0.21-0.12,3.58-2.11,8.59-7.1c0.25,0.21,0.5,0.41,0.74,0.6c1.77,1.41-1.49,12.56-1.49,12.56s6.12-4.11,10.8-9.67 c4.05-4.79,7.46-10.87,7.46-10.87s-13.25-5.6-19.36-15.3c-6.13-9.69-0.79-20.21-0.79-20.21s-10.22-3.28-18.78-15.62 c-9-12.98-5.52-28.93-5.52-28.93c-7.32,2.94-13.74,17.5-13.74,17.5s-18.49-9.87-42.51-6.8C73.47,35.69,53.33,22.55,44.97,1.8 c0,0-6.47,28.39,18.04,46.26c-1.33,0.9-2.66,1.85-3.99,2.87c-11.96,6.81-27.15,6.41-38.85-1.79c0,0,0.62,4.26,2.9,9.38 c2.28,5.11,6.21,11.09,12.84,14.53c0.71,0.37,1.41,0.67,2.1,0.93c-1.38,2.2-2.66,4.48-3.81,6.82C27.67,91.76,14.56,97.3,2,94.02 c0,0,6.59,12.03,18.41,13.5c2.73,0.34,5.11-0.07,7.15-0.88c-0.1,4.98,0.15,9.64,0.71,14.06c-0.3,9.68-6.83,18.27-16.35,20.99h-0.01 c0,0,9.18,5.46,17.68,1.78c1.66-0.72,2.94-1.7,3.93-2.79c6.98,16.86,19.64,30.46,35.78,45.97c4.33,4.17,9.19,8.63,14.12,13.28 c48.5,2.8,85.22,24.51,116.32,57.87C200.72,250.56,201.44,241.58,199.02,231.09z M147.91,70.11l13.72,13.65l-21.9-7.9L147.91,70.11z M181.003,133.297c0,0,6.706,6.836,16.005,8.195c-0.628,3.718-1.577,5.572-1.577,5.572s15.96,12.85,35.508,4.572 c-0.902,10.276-13.643,14.81-13.643,14.81S230.983,183.407,258,173c-14.657,19.075-36.539,13.759-49.848,6.944 C196.19,173.819,180.788,155.727,181.003,133.297z"/> </g>

          </svg>
          <div>
            <h1 className="opacity-100 mb-20 animate-text bg-gradient-to-r from-quad via-primary to-quad bg-clip-text text-transparent text-5xl font-bold">Join now and allow your imagination to be unleashed!</h1>
            <Link to="/home" className="btn bg-gradient-to-r from-tertiary to-primary hover:to-primary hover:to-tertiary text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
