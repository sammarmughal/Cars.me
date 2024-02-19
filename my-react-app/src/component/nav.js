import React, { useState, useRef, useEffect } from "react";
import { MdOutlineLogin } from "react-icons/md";
import { RxPerson, RxCross2 } from "react-icons/rx";
import Logo from "../images/HomepageAssets/cars.png";
import google from "../images/HomepageAssets/google.png";
import facebook from "../images/HomepageAssets/facebook.png";
import email from "../images/HomepageAssets/email-icon.png";
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [activeNavItem, setActiveNavItem] = useState('');
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

  const handleClickLogin = () => {
    setOpen(!open);
  };
  const [signOpen, setSignOpen] = useState(false);

  const handleClickSignUp = () => {
    setSignOpen(!signOpen);
  };
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const errors = validation(formValues);
    setFormErrors(errors);
    setIsSubmit(true);
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validation = (values) => {
    const error = {};
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    if (!values.email) {
      error.email = "Email or Phone Number is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    return Object.keys(error).length === 0 ? null : error;
  };
  return (
    <>
      <nav className="">
        <section className="w-full p-2 flex justify-end items-center h-14 bg-gradient-to-b from-blue-700 to-cyan-500">
          <div className="flex items-center gap-2  lg:mx-16 sm:mx-6">
            <p className="text-white text-sm font-normal">ENG</p>
            <div
              className="border-l flex items-center border-1"
              onClick={handleClickLogin}
            >
              <MdOutlineLogin className="w-7 h-7 text-white mx-2" stroke="2" />
              <p className="text-white text-sm font-normal">Login</p>
            </div>
            <div
              className="border-l flex items-center border-1"
              onClick={handleClickSignUp}
            >
              <RxPerson className="w-7 h-7 text-white mx-2" stroke="2" />
              <p className="text-white text-sm font-normal">Register</p>
            </div>
          </div>
        </section>
        <section className="bg-white  w-full flex justify-between items-center">
          <div className="lg:ml-20 md:ml-10 sm:ml-5 flex sm:justify-start justify-between w-full sm:w-auto">
            <img className="p-3" height={115} width={155} src={Logo}></img>
            <div className="flex items-center">
                <FiMenu className="text-2xl  block sm:hidden relative w-[100%] mr-10 w-10 h-10 text-black" onClick={handleMobileMenuToggle} fill="black" />
              </div>
          </div>
          <ul className={`p-3 lg:gap-8 sm:gap-4 sm:flex nav-mobile sm:flex-row flex-col ${isMobileMenuOpen ? '' : 'hidden'} `}>
            <li className={`px-2 py-1 rounded-xl cursor-pointer text-${activeNavItem === 'home' ? 'white' : 'black'} ${activeNavItem === 'home' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('home')}>             
            <Link to="/">
               Home
            </Link>
              </li>
            <div className="relative">
            <li className={`px-2 py-1 rounded-xl text-${activeNavItem === 'cars' ? 'black' : 'white'}${activeNavItem === 'cars' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'} cursor-pointer  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() =>  setIsOpen(!isOpen)}>
              Cars{" "}
              </li>
              {isOpen && (
                <ul
                  ref={dropdownRef}
                  className="absolute   left-0 right-0 z-40 rounded-xl py-1 ml-[-6px] mt-[-px] w-32"
                  style={{ backgroundColor: "#01b7eebd" }}
                >
                  <Link to="/cars">
                    <li className="text-white px-2 py-1 hover:bg-cyan-500 cursor-pointer" onClick={() => {setActiveNavItem('cars')}}>
                      Cars
                    </li>
                  </Link>
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
              </div>

              <li className={`px-2 py-1 rounded-xl cursor-pointer text-${activeNavItem === 'brands' ? 'white' : 'black'} ${activeNavItem === 'brands' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('brands')}>               Brands
            </li>
            <li className={`px-2 py-1 rounded-xl cursor-pointer text-${activeNavItem === 'howItWorks' ? 'white' : 'black'} ${activeNavItem === 'howItWorks' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('howItWorks')}>               How It Works
            </li>
            <li className={`px-2 py-1 rounded-xl cursor-pointer text-${activeNavItem === 'blog' ? 'white' : 'black'} ${activeNavItem === 'blog' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('blog')}>               Blog
            </li>
            <div className="h-auto mt-3 block sm:hidden">
            <Link
              to="/sellYourCar"
              className="px-3 py-2  rounded-xl text-white bg-gradient-to-b from-red-700 to-orange-400"
            >
              Sell Your Car
            </Link>
          </div>
          </ul>
         
          <div className="lg:mr-20 md:mr-10 sm:mr-5 sm:block hidden">
            <Link
              to="/sellYourCar"
              className="px-3 py-2 rounded-xl text-white bg-gradient-to-b from-red-700 to-orange-400"
            >
              Sell Your Car
            </Link>
          </div>
        </section>
      </nav>
      <div ref={dialogRef}>
        <form onSubmit={handleSubmit}>
          <div className="flex z-50">
            <div
              className={`popup p-3   ${open ? "open" : ""}`}
              aria-modal="true"
            >
              <div className="overlay blue-sm" aria-hidden="true"></div>

              <div className="popup-content p-6 z-50 bg-white rounded-xl">
                <div className="w-full p-2  flex justify-end">
                  <RxCross2
                    className="text-white  bg-gradient-to-b from-blue-700 to-cyan-500 h-7 w-7"
                    onClick={handleClickLogin}
                  />
                </div>
                <div className="flex justify-center">
                  <img className="" height={115} width={155} src={Logo}></img>
                </div>
                <div className="w-full p-6">
                  <h1 className="text-blue-800 text-lg pt-6 font-bold">
                    Enter Your Phone Number Or E-mail
                  </h1>
                  <div className="block my-4 gap-4">
                    <input
                      type="email"
                      placeholder="Phone Number Or E-mail"
                      name="email"
                      className="form-control rounded-lg block w-full my-3 shadow-lg shadow-blue-500/50 p-4 text-base font-normal leading-6 text-gray-800  focus:ring ring-1 ring-blue-800 ring-offset-0  transition duration-150 ease-in-out"
                      style={{ border: "0px" }}
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <p className="text-red-500">{formErrors.email}</p>
                    )}
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control rounded-lg block w-full p-4 my-4 shadow-lg shadow-blue-500/50 text-base font-normal leading-6 text-gray-800  focus:ring ring-1 ring-blue-800 ring-offset-0  transition duration-150 ease-in-out"
                      style={{ border: "0px" }}
                      value={formValues.password}
                      onChange={handleChange}
                    />
                    {formErrors.password && (
                      <p className="text-red-500">{formErrors.password}</p>
                    )}
                  </div>
                  <Link
                    to="/"
                    className="text-left justify-start underline text-lg font-bold text-blue-800"
                  >
                    Forgotten Password?
                  </Link>
                  <button
                    className="form-control rounded-lg block w-full p-4 my-4 text-white text-lg font-black leading-6 bg-blue-600  transition duration-150 ease-in-out"
                    style={{ border: "0px" }}
                  >
                    Log In
                  </button>
                  <p className="text-left justify-start flex text-lg font-normal text-blue-800">
                    You Have An Account yet?{" "}
                    <span
                      onClick={handleClickSignUp}
                      className="text-lg underline font-bold"
                    >
                      {" "}
                      Sign Up Here
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div ref={dialogRef}>
        <div className="flex z-50">
          <div
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
                <p className="text-slate-500 flex w-full py-1 underline text-left text-lg pt-3">
                  +971 <span className="px-2">|</span>{" "}
                  <input
                    type="tel"
                    className="underline focus:outline-none focus:shadow-lg"
                  />
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
                  <Link
                    to="/"
                    className="flex gap-8  justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
                  >
                    <div className="w-4/6 flex justify-between items-center">
                      <img src={google} className="h-8 w-8 " />
                      <p className="text-blue-800 font-bold text-lg">
                        Continue With Google
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/"
                    className="flex justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
                  >
                    <div className="w-4/6 flex justify-between">
                      <img src={facebook} className="h-8 w-8 " />
                      <p className="text-blue-800 font-bold text-lg">
                        Continue With Facebook
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/"
                    className="flex justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
                  >
                    <div className="w-4/6 flex justify-between items-center">
                      <img src={email} className="h-6 w-8 " />
                      <p className="text-blue-800 font-bold text-lg">
                        Continue With E-mail
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="text-left justify-start text-lg font-normal text-blue-800">
                  You Have An Account yet?{" "}
                  <span
                    onClick={handleClickLogin}
                    className="text-lg underline font-bold"
                  >
                    {" "}
                    Login Here
                  </span>
                </div>
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
