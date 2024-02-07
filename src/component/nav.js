import React, { useState, useRef, useEffect } from "react";
import { MdOutlineLogin } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import Logo from "../images/HomepageAssets/cars.png"
function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <nav className="">
                <section className="w-full p-2 flex justify-end items-center h-14 bg-gradient-to-b from-blue-700 to-cyan-500">
                    <div className="flex gap-2 mx-16">
                        <p className="text-white text-lg font-normal">ENG</p>
                        <div className="border-l flex border-1">
                            <MdOutlineLogin className="w-7 h-7 text-white mx-2" stroke="2" />
                            <p className="text-white text-lg font-normal">Login</p>
                        </div>
                        <div className="border-l flex border-1">
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
                        <li className="text-white px-2 py-1 bg-gradient-to-b from-blue-700 to-cyan-500 rounded-xl">Home</li>
                        <li className="text-black px-2 py-1 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl  active:bg-cyan-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Cars {isOpen && (
                            <ul ref={dropdownRef} className="absolute z-40 rounded-xl py-1 ml-[-6px] mt-[-18px] w-32" style={{backgroundColor: "#01b7eebd"}}>
                                <li className="text-white px-2 py-1 hover:bg-cyan-500 cursor-pointer">Cars</li>
                                <li className="text-white px-2 py-1 border-b border-white pb-1 mx-3 hover:bg-cyan-500 cursor-pointer">New Cars</li>
                                <li className="text-white px-2 py-1 border-b border-white pb-1 mx-3 hover:bg-cyan-500 cursor-pointer">Used Cars</li>
                                <li className="text-white px-2 py-1 border-b border-white pb-1 mx-3 hover:bg-cyan-500 cursor-pointer">Classic Cars</li>
                            </ul>
                        )}</li>
                        <li className="text-black px-2 py-1 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl">Brands</li>
                        <li className="text-black px-2 py-1 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl">How It Works</li>
                        <li className="text-black px-2 py-1 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 hover:rounded-xl">Blog</li>
                    </ul>


                    <div className="mr-20">
                        <a className="px-3 py-2 rounded-xl text-white bg-gradient-to-b from-red-700 to-orange-400">Sell Your Car</a>
                    </div>
                </section>
            </nav>
        </>
    );
}
export default Nav;
