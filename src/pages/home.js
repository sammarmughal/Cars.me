import React from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import Mainimg from "../images/HomepageAssets/wp6685548-group-of-cars-wallpapers.png";
import fromIcon from "../images/HomepageAssets/Aed.png";
import mapIcon from "../images/HomepageAssets/Page-1.png";
import wheelIcon from "../images/HomepageAssets/primary.png";
import TrnsmissionIcon from "../images/HomepageAssets/GearLiver.png";
import aboutCar from "../images/HomepageAssets/NoPath-Copy(4).png";
import Logo from "../images/HomepageAssets/cars.png";
import addImg from "../images/HomepageAssets/Group243.png";
import cardCar from "../images/HomepageAssets/NoPath-Copy1.png";
import cardCar2 from "../images/HomepageAssets/NoPath-Copy2.png";
import car from "../images/HomepageAssets/car.png";
import blueCar from "../images/HomepageAssets/wide-rear-wheel-car-svgrepo-com.png";
import effortless from "../images/HomepageAssets/real-estate-property-svgrepo-com.png";
import speaker from "../images/HomepageAssets//marketing-mail-svgrepo-com.png";
import box from "../images/HomepageAssets/Page-2.png";
import support from "../images/HomepageAssets/support-svgrepo-com.png";
import insights from "../images/HomepageAssets/brand-buzzfeed-svgrepo-com.png";
import banner from "../images/HomepageAssets/banner241.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";
import CarCard from "../component/usedCarCard";
import CustomerReviews from "../component/CustomerReviews";
function Home() {
    const Card = (props) => {
        return (
            <>
                <div className="bg-white hover:shadow-inner rounded-2xl shadow-lg shadow-blue-500/50">
                    <img className="rounded-2xl" src={props.src}></img>
                    <div className="p-4">
                        <h1 className="text-blue-700 text-left mb-2 font-bold text-2xl">{props.title}</h1>
                        <div className="flex gap-2">
                            <FaStar className="text-amber-500" />
                            <FaStar className="text-amber-500" />
                            <FaStar className="text-amber-500" />
                            <FaStar className="text-amber-500" />
                            <FaRegStar className="text-slate-500" />

                        </div>
                    </div>
                    <div className="mb-2 p-4 flex justify-between">
                        <a className="px-4 py-1 rounded-xl text-white bg-gradient-to-b from-blue-700 to-cyan-500">Shop Now</a>
                        <FaRegHeart className="text-blue-700 w-8 h-8" />
                    </div>
                </div>
            </>
        )
    };
    const SellerBenefits = (props) => {
        return (
            <>
                <div className="bg-white hover:shadow-lg border border-slate-400 rounded-xl p-4">
                    <div className="flex justify-center mt-[-28px] h-20">
                        <img src={props.src} className="flex justify-center w-1/4" height={props.height} width={props.width} style={{ marginTop: "-4rem" }}></img>
                    </div>
                    <h1 className="text-2xl text-blue-800 mt-4 py-2 font-bold">{props.title}</h1>
                    <p className="text-center text-blue-800 py-2">{props.description}</p>
                </div>
            </>
        )
    };

    return (
        <>
            <Nav />
            <section className="relative d-flex justify-center items-center">
                <div className="relative">
                    <img className=" w-full h-full" src={Mainimg} />
                    <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white">
                        <h1 className="text-white text-center text-lg">Maximize Your Car's Value with Minimal Effort</h1>
                        <h1 className="text-white text-center font-bold text-4xl">Buy and Sell Cars For Free</h1>
                        <div className="mt-8">
                            <a className="px-10 py-3 rounded-xl text-white bg-gradient-to-b from-blue-700 to-cyan-500">Sell Your Car</a>
                        </div>
                    </div>
                </div>
                <div className="absolute z-10 inset-0 bg-black bg-opacity-50 "></div>
            </section>
            <div className="bg-sky-100	px-20">
                <section className="w-[60%] shadow-xl shadow-blue-500/50 bg-white z-30 rounded-xl mx-auto relative" style={{ height: "calc(50% + 12rem)", marginTop: "-10rem" }}>
                    <div className="pt-8 flex justify-center gap-2">
                        <a className="px-4 py-1 rounded-full text-white bg-gradient-to-b from-blue-700 to-cyan-500">New</a>
                        <a className="px-4  py-1 rounded-full text-blue-700 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-cyan-500 ">Used</a>
                    </div>
                    <h1 className="text-blue-700 py-3  text-3xl text-center font-bold">Discover the Perfect Ride for You</h1>
                    <div className="p-3 mx-8 grid grid-cols-3 gap-3">
                        <div className="border-1 border border-cyan-500  flex justify-between rounded-xl ">
                            <div className="flex items-center p-2">
                                <img src={fromIcon} className="" />
                                <p className="pl-4 text-slate-700">From</p>
                            </div>
                            <div className="flex items-center p-2">
                                <IoIosArrowDown className="h-8 w-8 text-blue-700" />
                            </div>
                        </div>
                        <div className="border-1 border border-cyan-500  flex justify-between rounded-xl ">
                            <div className="flex items-center p-2">
                                <img src={fromIcon} className="" />
                                <p className="pl-4 text-slate-700">To</p>
                            </div>
                            <div className="flex items-center p-2">
                                <IoIosArrowDown className="h-8 w-8 text-blue-700" />
                            </div>
                        </div>
                        <div className="border-1 border border-cyan-500  flex justify-between rounded-xl ">
                            <div className="flex items-center p-2">
                                <img src={mapIcon} className="" />
                                <p className="pl-4 text-slate-700">Select Country</p>
                            </div>
                            <div className="flex items-center p-2">
                                <IoIosArrowDown className="h-8 w-8 text-blue-700" />
                            </div>
                        </div>
                        <div className="border-1 border border-cyan-500  flex justify-between rounded-xl ">
                            <div className="flex items-center p-2">
                                <img src={wheelIcon} className="" />
                                <p className="pl-4 text-slate-700">Select Brand</p>
                            </div>
                            <div className="flex items-center p-2">
                                <IoIosArrowDown className="h-8 w-8 text-blue-700" />
                            </div>
                        </div>
                        <div className="border-1 border border-cyan-500  flex justify-between rounded-xl ">
                            <div className="flex items-center p-2">
                                <img src={TrnsmissionIcon} width={35} height={35} className="h-8" />
                                <p className="pl-4 text-slate-700 text-nowrap">Transmission Type</p>
                            </div>
                            <div className="flex items-center p-2">
                                <IoIosArrowDown className="h-8 w-8 text-blue-700" />
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-blue-700 to-cyan-500 flex itms-center justify-center text-white rounded-xl ">
                            <a className="text-center flex items-center text-2xl">Find Car</a>

                        </div>
                    </div>

                </section>
                <section>
                    <h1 className="text-blue-700 border-l-4 font-bold pl-4 border-blue-700 text-3xl mt-10 text-left">About Cars.Me</h1>
                    <div className="flex gap-6">
                        <p className="w-[60%] text-left pt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="w-[50%] relative">
                            <img src={aboutCar} className="w-3/4" />
                            <img src={Logo} className="absolute z-10 top-0 w-20 mx-auto flex justify-center pt-4" style={{ left: '40%', transform: 'translateX(-50%)' }} />
                        </div>
                    </div>
                    <div className="pt-6">
                        <img src={addImg} className="" />
                    </div>
                </section>

            </div>
            <section className="my-6 w-11/12 mx-auto">
                <div className="flex justify-center items-center">
                    <h1 className="text-blue-700 border-l-4 border-blue-700 pl-4 text-4xl text-center font-bold">Popular Categories of Vehicles</h1>
                </div>
                <div className="flex flex-wrap gap-8 mx-10 w-full my-8">
                    <a className="px-4 py-1 rounded-xl text-white bg-gradient-to-b from-blue-700 to-cyan-500">Sedan</a>
                    <a className="px-4  py-1 rounded-xl text-blue-700 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">Coupe</a>
                    <a className="px-4  py-1 rounded-xl text-blue-700 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">SUV</a>
                    <a className="px-4  py-1 rounded-xl text-blue-700 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">Wagon</a>
                    <a className="px-4  py-1 rounded-xl text-blue-700 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">Convertable</a>
                    <a className="px-4  py-1 rounded-xl text-blue-700 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">Hatchback</a>
                    <a className="px-4  py-1 rounded-xl text-blue-700 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">Crossover</a>
                    <a className="px-4  py-1 rounded-xl text-blue-700 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">Minivan</a>
                    <a className="px-4  py-1 rounded-xl text-blue-700 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">Pickup Truck</a>
                    <a className="px-4  py-1 rounded-xl text-blue-700 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">Electric</a>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    <Card src={cardCar} title="Honda Civic 2024" />
                    <Card src={cardCar2} title="Toyota Camry 2023" />
                    <Card src={cardCar} title="Honda Civic 2024" />
                    <Card src={cardCar2} title="Toyota Camry 2023" />
                    <Card src={cardCar} title="Honda Civic 2024" />
                    <Card src={cardCar2} title="Toyota Camry 2023" />
                    <Card src={cardCar} title="Honda Civic 2024" />
                    <Card src={cardCar2} title="Toyota Camry 20234" />

                </div>
                <div className="flex justify-center my-10">
                    <a className="px-4 py-2 rounded-lg text-white bg-gradient-to-b from-blue-700 to-cyan-500">View More Sedan Cars</a>

                </div>
            </section>
            <div className="bg-sky-100 my-4">
                <div className="w-11/12 flex justify-between mx-auto">
                    <div>
                        <img className="p-4 mt-5" height={115} width={145} src={Logo}></img>
                        <h1 className="text-blue-800 border-l-4 font-bold pl-4 border-blue-800 text-5xl mt-10 text-left">Sell Your Car In Best Price <br /> At Cars.Me</h1>
                        <div className="flex pt-5 my-5">
                            <a className="px-4 py-2 rounded-lg text-white bg-gradient-to-b from-blue-700 to-cyan-500">Register Your Cars</a>

                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <img src={car} />
                    </div>
                </div>

            </div>
            <div className="w-11/12 mx-auto my-6">
                <div className="flex justify-center items-center">
                    <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 text-4xl text-center font-bold">Featured Used Cars</h1>
                </div>
                <div className="grid grid-cols-3 my-6 gap-5">
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                    <CarCard />
                </div>
                <div className="flex justify-center pt-5 my-5">
                    <a className="px-4 py-2 rounded-lg text-white bg-gradient-to-b from-blue-700 to-cyan-500">View All Featured Cars</a>

                </div>
            </div>
            <div className="bg-sky-100 my-4">
                <div className="w-11/12  flex-col  mx-auto">
                    <div className="flex mt-6 py-8  justify-center items-center">
                        <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 text-4xl text-center font-bold">Benefits for Sellers</h1>
                    </div>
                    <div className="grid grid-cols-3 py-20 mx-8 my-6 gap-x-5 gap-y-28">
                        <SellerBenefits src={blueCar} height={123} width={349} title="Wider Exposure" description="Sellers benefit from increased visibility on 
                        our platform, reaching a diverse audience of potential buyers and enhancing their chances of a quick sale." />
                        <SellerBenefits src={effortless} height={147} width={157} title="Effortless Listing" description="Our user-friendly platform streamlines the listing process, allowing sellers to easily and efficiently input detailed information about their cars, facilitating a seamless experience." />
                        <SellerBenefits src={speaker} title="Professional Marketing" description="Sellers enjoy the advantages of professional marketing tools, presenting their cars in an appealing manner with high-quality images and engaging descriptions, attracting serious buyers." />
                        <SellerBenefits src={box} title="Secure Transactions" description="The platform prioritizes secure transactions, providing sellers and buyers with a safe environment to conduct business, fostering trust and confidence in the selling process." />
                        <SellerBenefits src={support} title="Guidance and Support" description="Our user-friendly platform streamlines the listing process, allowing sellers to easily and efficiently input detailed information about their cars, facilitating a seamless experience." />
                        <SellerBenefits src={insights} title="Market Insights" description="Sellers have access to real-time market insights, empowering them with pricing guidance and trends, allowing for informed decisions and maximizing the chances of a successful and profitable sale." />
                    </div>
                </div>

            </div>
            <div className="w-11/12 mx-auto  my-10">
                <div className="flex justify-center py-4 items-center">
                    <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 text-4xl text-center font-bold">Customer Reviews</h1>
                </div>
                <div className="grid grid-cols-3 my-6 gap-5">
                    <CustomerReviews />
                    <CustomerReviews />
                    <CustomerReviews />
                </div>
                <div className="flex justify-center py-5 my-5">
                    <img src={banner}/>
                </div>
            </div>
            <Footer/>
        </>
    )
};
export default Home;