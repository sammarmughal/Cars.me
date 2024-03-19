import React, { useState, useRef, useEffect } from "react";
import { MdOutlineLogin, MdOutlineCancel } from "react-icons/md";
import { RxPerson, RxCross2 } from "react-icons/rx";
import Logo from "../images/HomepageAssets/logo.png";
import google from "../images/HomepageAssets/google.png";
import { NavLink } from 'react-router-dom';
import facebook from "../images/HomepageAssets/facebook.png";
import email from "../images/HomepageAssets/email-icon.png";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import navUserLogo from "../images/UserPanel/nav-logo.png";
import { TailSpin } from "react-loader-spinner";

const LoginPopup = ({ open, onClickLogin, onClickSignup, setUserName }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(errors);
  }, [errors , message]);
  async function saveUser(e) {
    e.preventDefault();
    setLoading(true);
    setErrors({ email: "", password: "" });
    let data = { email, password };
    console.log(data)
  
    try {
      const response = await fetch("https://sandbox.cars.me/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        setMessage('Invalid Credentials');
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log("result", result);
  
      if (result.data && result.data.access_token && result.data.user) {
        localStorage.setItem('user', JSON.stringify(result.data.user));
        localStorage.setItem('access_token', result.data.access_token);
        console.log(result.data.user.name);
        setUserName(result.data.user.name);
        navigate("/my-profile");
      } else if (result.errors) {
        setErrors(result.errors);
      }
  
      if (result.message) {
        setMessage(result.message);
        console.log(message);
      }
  
      setEmail("");
      setPassword("");
      setSubmitted(false);
      setLoading(false);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setLoading(false);
    }
  }



  return (
    <>
      <div>
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </div>
      <div className={`flex absolute scroll z-50 popup p-3 ${open ? "open" : ""}`}>
        <div className="overlay blue-sm" aria-hidden="true"></div>

        <div className="popup-content p-6 z-50 bg-white rounded-xl">
          <div className="w-full p-2  flex justify-end">
            <RxCross2
              className="text-white  bg-gradient-to-b from-blue-700 to-cyan-500 h-7 w-7"
              onClick={onClickLogin}
            />
          </div>
          <div className="flex justify-center">
            <img className="" height={100} width={100} src={Logo}></img>
          </div>
          <div className="w-full sm:p-6 p-2">
            <h1 className="text-blue-800 text-lg pt-6 font-medium">
              Enter Your Phone Number Or E-mail
            </h1>
            <div className="block my-4 gap-4">
              <input
                type="email"
                value={email}
                placeholder="Phone Number Or E-mail"
                name="email"
                className="form-control focus:shodow-inner rounded-lg block w-full my-3 box-shadow p-4 text-base font-normal leading-6 text-gray-800  focus:outline-none transition duration-150 ease-in-out"
                style={{ border: "0px" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }} />
              {errors.email && (
                <span className="error text-red-500">{errors.email}</span>
              )}
              <div className="form-control flex justify-between p-4 my-4 form-control rounded-lg block w-full box-shadow text-base font-normal leading-6 text-gray-800 transition duration-150 ease-in-out">
                <input
                  type={show ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={password}
                  className="w-full focus:outline-none"
                  style={{ border: "0px" }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <button className="block" onClick={() => setShow(!show)}>
                  {show ? (
                    <div><i className="fas fa-eye text-lg"></i></div>
                  ) : (
                    <div><i className="fas fa-eye-slash text-lg"></i></div>
                  )}
                </button>

              </div>
              {errors.password && (
                <span className="error text-red-500">{errors.password}</span>
              )}
            </div>
            <Link
              to="/"
              className="text-left justify-start underline text-lg font-medium text-blue-800"
            >
              Forgotten Password?
            </Link>
            <button
              className="form-control relative rounded-lg block w-full p-4  my-4 text-white text-lg font-black leading-6 bg-blue-600  transition duration-150 ease-in-out"
              style={{ border: "0px" }}
              onClick={saveUser}
              disabled={submitted || loading}
            >
              {loading ? (
                <div className="inset-0 flex items-center justify-center bg-blue-600">
                  <TailSpin
                    visible={true}
                    height="40"
                    width="40"
                    color="#e5e7eb"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                  /></div>) : (
                "Log In"
              )}
            </button>
            {message && (
              <span className={`message ${message === "Login Successfully" ? "text-green-500" : "text-red-500"}`}>
                {message}
              </span>
            )}
            <p className="text-left justify-start flex text-lg font-normal text-blue-800">
              You Have An Account yet?{" "}
              <span
                className="font-medium cursor-pointer"
                onClick={onClickSignup}>

                {" "}
                Sign Up Here
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const SignupPopup = ({ open, onClickSignup, onClickLogin }) => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className={`flex absolute scroll z-50 popup p-3 ${open ? "open" : ""}`}>
      <div className="overlay blue-sm" aria-hidden="true"></div>

      <div className="popup-content p-6 z-50 bg-white rounded-xl">
        <div className="w-full p-2  flex justify-end">
          <RxCross2
            className="text-white  bg-gradient-to-b from-blue-700 to-cyan-500 h-7 w-7"
            onClick={onClickSignup}
          />
        </div>
        <div className="flex justify-center">
          <img className="object-contain" height={100} width={100} src={Logo}></img>
        </div>
        <div className="w-full my-4 sm:p-4 p-2">
          <div className="text-slate-500 flex w-full items-center text-left text-lg  border-0 border-b-2 border-slate-400 px-3 h-10 text-lg ">
            <p className="border-r-2 border-0 pr-3 border-slate-400"> +971</p>

            <input
              type="tel"
              placeholder="Phone Number"
              className="pl-3 focus:outline-none"
            />
          </div>
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
              className="flex gap-8  sm:justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
            >
              <div className="sm:w-1/2 w-full flex  items-center">
                <img src={google} className="h-8 w-8 " />
                <p className="text-blue-800 font-semibold text-nowrap text-lg sm:ml-10 ml-6">
                  Continue With Google
                </p>
              </div>
            </Link>
            <Link
              to="/"
              className="flex sm:justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
            >
              <div className="sm:w-1/2 w-full flex items-center">
                <img src={facebook} className="h-8 w-8 " />
                <p className="text-blue-800 font-semibold text-nowrap text-lg sm:ml-10 ml-6">
                  Continue With Facebook
                </p>
              </div>
            </Link>
            <Link
              to="/"
              className="flex sm:justify-center form-control rounded-lg block w-full my-3 p-4 text-base font-normal leading-6 text-gray-800  border border-blue-800  transition duration-150 ease-in-out"
            >
              <div className="sm:w-1/2 w-full flex items-center">
                <img src={email} className="h-6 w-8 " />
                <p className="text-blue-800 font-semibold text-nowrap text-lg sm:ml-10 ml-6">
                  Continue With E-mail
                </p>
              </div>
            </Link>
          </div>
          <div className="text-left justify-start text-lg font-normal text-blue-800">
            You Have An Account yet?{" "}
            <span
              onClick={onClickLogin} open={loginOpen} className="cursor-pointer text-lg underline font-medium"
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
  );
};
function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
      const user = JSON.parse(userInfo);
      setUserName(user.name);
      console.log(userName);
    }

  }, []);

  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const handleLoginClick = () => {
    setLoginOpen(!loginOpen);
    setSignupOpen(false);
  };

  const handleSignupClick = () => {
    setSignupOpen(!signupOpen);
    setLoginOpen(false);
  };
  function LogOut() {
    let token = localStorage.getItem('access_token');
    console.log(token)
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');

    fetch("https://sandbox.cars.me/api/logout", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        console.log(result)
        console.log('User logged out successfully');
        navigate('/');
        setIsLoggedIn(false);
        setUserName("")
      })
      .catch((error) => {
        console.error('Logout failed:', error);
        setErrors(error);
      });
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [activeNavItem, setActiveNavItem] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  const handleUloginEnter = () => {
    setIsUserMenuOpen(true);
  }
  const handleUloginLeave = () => {
    setIsUserMenuOpen(false);
  }
  useEffect(() => {
  function handleClickOutside(event) {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setIsUserMenuOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="">
        <section className="justify-center flex h-14 bg-gradient-to-b from-blue-700 to-cyan-500">
          <div className="flex max-w-[1800px] mx-auto flex justify-end w-full items-center  items-center gap-2 lg:mx-16 mx-6">
            <p className="text-white text-sm font-normal">ENG</p>
            {isLoggedIn ? (
              <>
                <div className="relative ">
                  <div className="h-14 flex items-center hover:bg-gradient-to-b hover:from-cyan-600 hover:to-blue-400 pr-10" onClick={handleUloginEnter}>
                    <div className="gap-3 px-4 flex items-center border-l border-1">
                      <img src={navUserLogo} alt="nav-logo" className="w-6 h-6" />
                      <p className="text-white text-lg font-normal">It's {userName}</p>
                    </div>
                  </div>
                  {isUserMenuOpen && (
                    <ul
                      className="absolute block bg-white  inset-x-0 z-40 sm:py-3 rounded-sm w-full"
                      ref={userMenuRef}
                      onMouseEnter={handleUloginEnter}
                      onMouseLeave={handleUloginLeave}
                    >
                      <li className="text-blue-800 px-2 py-1 border-b border-white pb-1 hover:bg-sky-100 cursor-pointer">
                        <Link to="/my-profile" onClick={(e) => { e.stopPropagation(); }}>
                          My Profile
                        </Link>
                      </li>
                      <li className="text-blue-800 px-2 py-1 border-b border-white pb-1   hover:bg-sky-100 cursor-pointer">
                        <Link to="/my-dashboard" onClick={(e) => { e.stopPropagation(); }}>
                          My Dashboard
                        </Link>
                      </li>
                      <li className="text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer">
                        <Link to="/my-dashboard" onClick={(e) => { e.stopPropagation(); }}>
                          My Ads
                        </Link>
                      </li>
                      <li className="text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer">
                        <Link to="/my-dashboard" onClick={(e) => { e.stopPropagation(); }}>
                          My Favourite Ads
                        </Link>
                      </li>
                      <li className="text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer">
                        <Link to="/my-dashboard" onClick={(e) => { e.stopPropagation(); }}>
                          My Notificatons
                        </Link>
                      </li>
                      <li className="text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer">
                        <Link to="/my-dashboard" onClick={(e) => { e.stopPropagation(); }}>
                          My Messgaes <span className="text-red-600"> (99+)</span>
                        </Link>
                      </li>
                      <li className="text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer">
                        <Link to="/change-password" onClick={(e) => { e.stopPropagation(); }}>
                          Change Password
                        </Link>
                      </li>
                      <li className="text-blue-800 px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-100 cursor-pointer" >
                        <button onClick={LogOut}>
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="border-l flex items-center border-1 cursor-pointer" onClick={handleLoginClick}>
                  <MdOutlineLogin className="w-7 h-7 text-white mx-2" stroke="2" />
                  <p className="text-white text-sm font-normal">Login</p>
                </div>
                <div className="border-l flex items-center border-1 cursor-pointer" onClick={handleSignupClick}>
                  <RxPerson className="w-7 h-7 text-white mx-2" stroke="2" />
                  <p className="text-white text-sm font-normal">Register</p>
                </div>
              </>
            )}
          </div>
        </section>
        <section className="bg-white ">
          <div className="max-w-[1800px] mx-auto  w-full flex justify-between items-center">
            <div className="lg:ml-20 md:ml-10 sm:ml-3 flex sm:justify-start justify-between w-full sm:w-auto">
              <Link to="/"> <img className="p-3 object-contain sm:w-full" height={100} width={100} src={Logo}></img></Link>
              <div className="flex items-center">
                <FiMenu className="text-2xl  block sm:hidden relative w-[100%] mr-10 w-8 h-8 text-blue-800" onClick={handleMobileMenuToggle} fill="black" />
              </div>
            </div>
            <ul className={`p-3 lg:gap-8 gap-4  sm:flex nav-mobile sm:flex-row flex-col ${isMobileMenuOpen ? '' : 'hidden'}`}>
              <div onClick={handleMobileMenuToggle} className="w-full flex sm:hidden items-end justify-end"> <MdOutlineCancel className="text-white w-7 h-7" /></div>
              <li className={`px-2 py-1 rounded-xl sm:text-black text-white cursor-pointer text-${activeNavItem === 'home' ? 'white' : 'white'} ${activeNavItem === 'home' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('home')}>
                <NavLink exact={true.toString()} to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <div className="relative">
                <div className="flex justify-between items-center">

                  <li className={`px-2 py-1  rounded-xl sm:text-black text-white text-${activeNavItem === 'cars' ? 'black' : 'white'}${activeNavItem === 'cars' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'} cursor-pointer  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => { setActiveNavItem('cars') }}>
                    <NavLink to="/cars">Cars</NavLink>
                  </li>
                  {" "} <MdOutlineArrowDropDownCircle className="text-white sm:text-gray-600 sm:w-5 sm:h-5 w-6 h-6 ml-2" onMouseEnter={handleMouseEnter} />
                </div>
                {isOpen && (
                  <ul
                    className="sm:absolute sm:block sm:bg-[#61cafbf1]  sm:left-0 sm:right-0 sm:z-40 sm:rounded-xl sm:py-3 sm:ml-[-6px] sm:mt-[-px] sm:w-32 w-full"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <li className="text-white px-2 py-1 border-b border-white pb-1 hover:bg-sky-500 cursor-pointer">
                      <Link to="/NewCars" onClick={(e) => { e.stopPropagation(); }}>
                        New Cars
                      </Link>
                    </li>
                    <li className="text-white px-2 py-1 border-b border-white pb-1   hover:bg-sky-500 cursor-pointer">
                      <Link to="/UsedCars" onClick={(e) => { e.stopPropagation(); }}>
                        Used Cars
                      </Link>
                    </li>
                    <li className="text-white px-2 py-1 whitespace-nowrap border-b border-white  pb-1   hover:bg-sky-500 cursor-pointer">
                      <Link to="/ClassicCars" onClick={(e) => { e.stopPropagation(); }}>
                        Classic Cars
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <li className={`px-2 py-1 sm:text-black text-white rounded-xl cursor-pointer text-${activeNavItem === 'brands' ? 'white' : 'black'} ${activeNavItem === 'brands' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('brands')}>
                <NavLink to="/brands">Brands
                </NavLink>
              </li>

              <li className={`px-2 py-1 sm:text-black text-white rounded-xl whitespace-nowrap cursor-pointer text-${activeNavItem === 'HowItWorks' ? 'white' : 'black'} ${activeNavItem === 'HowItWorks' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('HowItWorks')}>    <NavLink to="/HowItWorks">  How It Works
              </NavLink>
              </li>
              <li className={`px-2 py-1 sm:text-black text-white rounded-xl cursor-pointer text-${activeNavItem === 'blog' ? 'white' : 'black'} ${activeNavItem === 'blog' ? 'bg-gradient-to-b from-blue-700 to-cyan-500' : 'bg-none'}  hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl`} onClick={() => setActiveNavItem('blog')}>
                <NavLink to="/blog">
                  Blog
                </NavLink>
              </li>
              <div className="h-auto mt-3 block sm:hidden">
                <NavLink
                  to="/sellYourCar"
                  className="px-3 py-2  rounded-xl text-white bg-gradient-to-b from-red-700 to-orange-400 cursor-pointer"
                >
                  Sell Your Car
                </NavLink>
              </div>
            </ul>

            <div className="lg:mr-20 md:mr-6 sm:mr-5 sm:block hidden">
              <NavLink
                to="/sellYourCar"
                className="px-3 py-2 rounded-xl whitespace-nowrap text-white cursor-pointer bg-gradient-to-b from-red-700 to-orange-400 hover:from-orange-700 hover:to-red-400"
              >
                Sell Your Car
              </NavLink>
            </div>
          </div>
        </section>
        <div className="absolute z-50">
          <LoginPopup open={loginOpen} onClickLogin={handleLoginClick} onClickSignup={handleSignupClick} setUserName={setUserName} />
          <SignupPopup open={signupOpen} onClickSignup={handleSignupClick} onClickLogin={handleLoginClick} />
        </div>
      </nav>
    </>
  );
}
export default Nav;
