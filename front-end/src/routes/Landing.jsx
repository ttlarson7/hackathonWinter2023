import React from 'react';
import faerunImage from '../assets/faerun.jpg';
import reactLogo from '../assets/react.svg';
import Example1 from '../assets/Example1.jpg';
import Example2 from '../assets/Example2.jpg';
import Example3 from '../assets/Example3.jpg';
import "../index.css";
import Navbar from './components/Navbar';
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
                      <h1 className="opacity-100 mb-20 animate-text bg-gradient-to-r from-secondary via-tertiary to-secondary bg-clip-text text-transparent text-9xl font-black animate-slow">Realm Roster</h1>
                      
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
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
            </div>
            </div>

</div>
    </div>
  );
}
