import React, { useState } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import Register from "../component/register";
import bilal from "../images/HomepageAssets/bilal.png";
import banner from "../images/HomepageAssets/banner241.png";
import { ImBullhorn, ImMail2 } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

function UserPanel() {
    const [activePanel, setActivePanel] = useState('No active Ads');

    return (
        <>
            <Nav />
            <div className="md:w-[80%] w-[95%] mx-auto">
                <div className="flex flex-col gap-4 mt-10">
                    <h1 className="text-blue-800 font-black lg:text-5xl sm:text-3xl text-xl tracking-wider">My Dashboard</h1>
                    <h2 className="sm:text-xl text-sm">Welcome Muhammad Bilal at Cars.me!</h2>
                </div>
                <div className="flex flex-row my-8">
                    <div >
                        <img src={bilal} alt="avatar" />
                    </div>
                    <div className="ml-8 flex flex-col justify-evenly h-full mt-3">
                        <h1 className="text-blue-800 text-left mb-2 font-bold md:text-2xl text-lg">
                            Muhammad Bilal
                        </h1>
                        <p className="mt-2">Member Since 24 May 2024</p>
                        <div className="flex gap-2 mt-2">
                            <Link to="/my-profile" className="text-blue-800 hover:underline sm:text-base text-xs">Profile Details</Link>
                            <Link to="/change-password" className="border-l border-blue-800 pl-2 text-blue-800 hover:underline sm:text-base text-xs">Change Passwords</Link>
                        </div>
                    </div>
                </div>
                <div className="sm:flex max-h-330px h-full  mb-28">
                    <div className="text-blue-800 justify-center md:w-full sm:block flex sm:max-w-[300px]">
                        <div className="panel-btn" onClick={() => setActivePanel('My Ads')}>
                            <div className="md:flex  items-center justify-center" >
                                <div className="md:w-auto w-full flex justify-center"><ImBullhorn className="md:w-7 md:h-7 sm:w-6 sm:h-6 w-5 h-5" /></div>
                                <p className="font-semibold w-full md:text-left text-center text-nowrap md:text-xl sm:text-lg text-xs md:ml-6">My Ads</p>
                            </div>
                        </div>
                        <div className="panel-btn" onClick={() => setActivePanel('My Favourite Ads')}>
                            <div className="md:flex  items-center justify-center">
                                <div className="md:w-auto w-full flex justify-center"><FaHeart className="md:w-7 md:h-7 sm:w-6 sm:h-6 w-5 h-5" /></div>
                                <p className="font-semibold w-full md:text-left text-center text-nowrap md:text-xl sm:text-lg text-xs md:ml-6">My Favourite Ads</p>
                            </div>
                        </div>
                        <div className="panel-btn" onClick={() => setActivePanel('My Notifications')}>
                            <div className="md:flex  items-center justify-center">
                                <div className="md:w-auto w-full flex justify-center"><IoNotifications className="md:w-7 md:h-7 sm:w-6 sm:h-6 w-5 h-5" /></div>
                                <p className="font-semibold w-full md:text-left text-center text-nowrap md:text-xl sm:text-lg text-xs md:ml-6">My Notifications</p>
                            </div>
                        </div>
                        <div className="panel-btn" onClick={() => setActivePanel('My Messages')}>
                            <div className="w-[90%] md:flex  items-center justify-center" >
                                <div className="md:w-auto w-full flex justify-center"><ImMail2 className="md:w-7 md:h-7 sm:w-6 sm:h-6 w-5 h-5" /></div>
                                <p className="font-semibold w-full md:text-left text-center text-nowrap md:text-xl sm:text-lg text-xs md:ml-6">My Messeges</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="grid grid-cols-3">
                            <div className="border border-cyan-600 p-4 text-blue-800 hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:text-white">
                                <div className="flex items-center justify-center" style={{ maxWidth: "300px" }}>
                                    <p className="font-normal md:text-xl text-lg flex items-center sm:text-base text-xs">Active <span className="text-red-600">(0)</span></p>
                                </div>
                            </div>
                            <div className="border border-cyan-600 p-4 text-blue-800 hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:text-white">
                                <div className="flex items-center justify-center" style={{ maxWidth: "300px" }}>
                                    <p className="font-normal md:text-xl text-lg flex items-center sm:text-base text-xs">Pending <span className="text-red-600">(0)</span></p>
                                </div>
                            </div>
                            <div className="border border-cyan-600 p-4 text-blue-800 hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:text-white">
                                <div className="flex items-center justify-center" style={{ maxWidth: "300px" }}>
                                    <p className="font-normal md:text-xl text-lg flex items-center sm:text-base text-xs">Removed <span className="text-red-600">(0)</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full border border-cyan-600 relative min-h-[300px]" style={{ maxHeight: "600px" }}>
                            {activePanel === 'My Ads' && (
                                <div className="text-blue-800 text-center w-full h-full flex justify-center inset-0 absolute items-center">No active Ads</div>
                            )}
                            {activePanel === 'My Favourite Ads' && (
                                <div className="text-blue-800 text-center w-full h-full flex justify-center inset-0 absolute items-center">No favorite Ads</div>
                            )}
                            {activePanel === 'My Notifications' && (
                                <div className="text-blue-800 text-center w-full h-full flex justify-center inset-0 absolute items-center">No notifications</div>
                            )}
                            {activePanel === 'My Messages' && (
                                <div className="text-blue-800 text-center w-full h-full flex justify-center inset-0 absolute items-center">No messages</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Register />
            <div className="flex w-[90%] mx-auto justify-center py-5 my-5">
                <img src={banner} />
            </div>
            <Footer />
        </>
    )
}
export default UserPanel;