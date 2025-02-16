import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/Background.png';

const Landingpage = () => {
  const navigate = useNavigate();
  return (
    <section
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <div className="container bg-slate-100 rounded-md shadow-xl shadow-slate-100/50  size-auto mt-18 flex flex-col items-center px-4 py-8 md:py-16 md:px-8 lg:px-16 xl:max-w-3xl mx-auto">
        <img
          className="object-cover object-left-top  w-22 h-24"
          src="src\images\BIT LOGO.png"
        ></img>
        <h1 className=" text-center text-indigo-900 sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-none sm:leading-tight">
          BANNARI AMMAN INSTITUTE
        </h1>
        <h1 className=" text-center text-indigo-900 sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-none sm:leading-tight">
          OF TECHNOLOGY
        </h1>
        <p className="px-4 sm:px-8 mt-6 sm:mt-8 mb-4 text-base sm:text-lg md:text-xl text-indigo-800 font-sans font-bold">
          RESOURCE BOOKING PORTAL
        </p>
        <hr className="border-indigo-800 w-full mb-4"></hr>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-indigo-900 text-sm font-bold leading-none sm:leading-tight">
            SIGN IN WITH YOUR BIT ACCOUNT AS
          </h1>
          <div className="flex flex-wrap justify-center mt-4">
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center border bg-indigo-800 text-white hover:bg-indigo-900 px-6 sm:px-8 py-3 m-2 text-base sm:text-lg font-semibold rounded dark:text-gray-50"
            >
              <img
                src="src\images\ADMIN.png"
                alt="Admin Icon"
                className="w-6 h-6 mr-2"
              />
              ADMIN
            </button>
            <h1 className="text-center mt-6 text-indigo-900 text-sm text-opacity-35  font-bold leading-none sm:leading-tight">
              -OR-
            </h1>
            <button
              onClick={() => navigate('/user')}
              className="flex items-center bg-indigo-800 text-white hover:bg-indigo-900 px-6 sm:px-8 py-3 m-2 text-base sm:text-lg border font-semibold rounded dark:border-gray-300"
            >
              <img
                src="src\images\USER.png"
                alt="User Icon"
                className="w-6 h-6 mr-2"
              />
              USER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landingpage;
