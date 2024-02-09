import React, { useState, useRef, useEffect } from "react";
import { MdOutlineLogin } from "react-icons/md";
import { RxPerson, RxCross2 } from "react-icons/rx";
import Logo from "../images/HomepageAssets/cars.png";
import google from "../images/HomepageAssets/google.png";
import facebook from "../images/HomepageAssets/facebook.png";
import email from "../images/HomepageAssets/email-icon.png";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [signOpen, setSignOpen] = useState(false);

  const handleClickSignUp = () => {
    setSignOpen(!signOpen);
  };
  return (
    <>
      <nav className="">
        <section className="w-full p-2 flex justify-end items-center h-14 bg-gradient-to-b from-blue-700 to-cyan-500">
          <div className="flex gap-2 mx-16">
            <p className="text-white text-lg font-normal">ENG</p>
            <div className="border-l flex border-1" onClick={handleClick}>
              <MdOutlineLogin className="w-7 h-7 text-white mx-2" stroke="2" />
              <p className="text-white text-lg font-normal">Login</p>
            </div>
            <div className="border-l flex border-1" onClick={handleClickSignUp}>
              <RxPerson className="w-7 h-7 text-white mx-2" stroke="2" />
              <p className="text-white text-lg font-normal">Register</p>
            </div>
          </div>
        </section>
        <section className="bg-white w-full flex justify-between items-center ">
          <div className="ml-20">
            <img className="p-4" height={115} width={155} src={Logo}></img>
          </div>
          <ul className="p-8 gap-8 flex">
            <Link to="/">
              <li className="text-white px-2 py-1 bg-gradient-to-b from-blue-700 to-cyan-500 rounded-xl">
                Home
              </li>
            </Link>
            <li
              className="text-black px-2 py-1 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl  active:bg-cyan-500 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              Cars{" "}
              {isOpen && (
                <ul
                  ref={dropdownRef}
                  className="absolute z-40 rounded-xl py-1 ml-[-6px] mt-[-18px] w-32"
                  style={{ backgroundColor: "#01b7eebd" }}
                >
                  <li className="text-white px-2 py-1 hover:bg-cyan-500 cursor-pointer">
                    Cars
                  </li>
                  <li className="text-white px-2 py-1 border-b border-white pb-1 mx-3 hover:bg-cyan-500 cursor-pointer">
                    New Cars
                  </li>
                  <li className="text-white px-2 py-1 border-b border-white pb-1 mx-3 hover:bg-cyan-500 cursor-pointer">
                    Used Cars
                  </li>
                  <li className="text-white px-2 py-1 border-b border-white pb-1 mx-3 hover:bg-cyan-500 cursor-pointer">
                    Classic Cars
                  </li>
                </ul>
              )}
            </li>
            <li className="text-black px-2 py-1 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl">
              Brands
            </li>
            <li className="text-black px-2 py-1 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl">
              How It Works
            </li>
            <li className="text-black px-2 py-1 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl">
              Blog
            </li>
          </ul>

          <div className="mr-20">
            <a href="/" className="px-3 py-2 rounded-xl text-white bg-gradient-to-b from-red-700 to-orange-400">
              Sell Your Car
            </a>
          </div>
        </section>
      </nav>
      <div ref={dialogRef}>
        <div className="flex z-50">
          <div
            onKeyDown={() => setOpen(false)}
            className={`popup p-3   ${open ? "open" : ""}`}
            aria-modal="true"
          >
            <div className="overlay blue-sm" aria-hidden="true"></div>

            <div className="popup-content p-6 z-50 bg-white rounded-xl">
              <div className="w-full p-2  flex justify-end">
                <RxCross2
                  className="text-white  bg-gradient-to-b from-blue-700 to-cyan-500 h-7 w-7"
                  onClick={handleClick}
                />
              </div>
              <div className="flex justify-center">
                <img className="" height={115} width={155} src={Logo}></img>
              </div>
              <div className="w-full p-6">
                <h1 className="text-blue-800 text-xl pt-6 font-bold">
                  Enter Your Phone Number Or E-mail
                </h1>
                <div className="block my-4 gap-4">
                  <input
                    type="text"
                    placeholder="Phone Number Or E-mail"
                    className="form-control rounded-lg block w-full my-3 shadow-lg shadow-blue-500/50 p-4 text-base font-normal leading-6 text-gray-800  focus:ring ring-1 ring-blue-800 ring-offset-0  transition duration-150 ease-in-out"
                    style={{ border: "0px" }}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control rounded-lg block w-full p-4 my-4 shadow-lg shadow-blue-500/50 text-base font-normal leading-6 text-gray-800  focus:ring ring-1 ring-blue-800 ring-offset-0  transition duration-150 ease-in-out"
                    style={{ border: "0px" }}
                  />
                </div>
                <a
                  href="/"
                  className="text-left justify-start underline text-xl font-bold text-blue-800"
                >
                  Forgotten Password?
                </a>
                <button
                  className="form-control rounded-lg block w-full p-4 my-4 text-white text-xl font-black leading-6 bg-blue-600  transition duration-150 ease-in-out"
                  style={{ border: "0px" }}
                >
                  Log In
                </button>
                <p
                  href="/"
                  className="text-left justify-start text-lg font-noraml text-blue-800"
                >
                  You Have An Account yet?{" "}
                  <a href="/" className="text-xl underline font-bold"> Sign Up Here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={dialogRef}>
        <div className="flex z-50">
          <div
            onKeyDown={() => setSignOpen(false)}
            className={`popup p-3   ${signOpen ? "open" : ""}`}
            aria-modal="true"
          >
            <div className="overlay blue-sm" aria-hidden="true"></div>

            <div className="popup-content p-6 z-50 bg-white rounded-xl">
              <div className="w-full p-2  flex justify-end">
                <RxCross2
                  className="text-white  bg-gradient-to-b from-blue-700 to-cyan-500 h-7 w-7"
                  onClick={handleClickSignUp}
                />
              </div>
              <div className="flex justify-center">
                <img className="" height={115} width={155} src={Logo}></img>
              </div>
              <div className="w-full p-4">
                <p className="text-slate-500 w-full py-1 underline text-left text-xl pt-3">
                  +971 <span className="px-2">|</span>{" "}
                  ______________________________________________
                </p>
                <button
                  className="form-control rounded-lg block w-full p-4 my-4 text-white text-lg font-black leading-6 bg-blue-600  transition duration-150 ease-in-out"
                  style={{ border: "0px" }}
                >
                  Continue With Phone Number{" "}
                </button>
                <div className="text-slate-500 flex items-center">
                  <hr className="w-1/2 border-t border-gray-400 inline-block" />
                  <span className="font-semibold mx-2">or</span>
                  <hr className="w-1/2 border-t border-gray-400 inline-block" />
                </div>
                <div>
                  <a
                    href="/"
                    className="flex gap-8  justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
                  >
                    <div className="w-4/6 flex justify-between items-center">
                      <img src={google} className="h-8 w-8 " />
                      <p className="text-blue-800 font-bold text-xl">
                        Continue With Google
                      </p>
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
                  >
                    <div className="w-4/6 flex justify-between">
                      <img src={facebook} className="h-8 w-8 " />
                      <p className="text-blue-800 font-bold text-xl">
                        Continue With Facebook
                      </p>
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
                  >
                    <div className="w-4/6 flex justify-between items-center">
                      <img src={email} className="h-6 w-8 " />
                      <p className="text-blue-800 font-bold text-xl">
                        Continue With E-mail
                      </p>
                    </div>
                  </a>
                </div>
                <a
                  href="/"
                  className="text-left justify-start text-lg font-normal text-blue-800"
                >
                  You Have An Account yet?{" "}
                  <span className="text-xl underline font-bold">
                    {" "}
                    Login Here
                  </span>
                </a>
                <p>
                  By creating an account, you agree to cars.me, Conditions of
                  Use and Privacy Notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
