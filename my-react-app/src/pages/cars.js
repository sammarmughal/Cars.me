import React, { useState, useRef } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import CarCard from "../component/usedCarCard";
import CustomerReviews from "../component/CustomerReviews";
import Logo from "../images/HomepageAssets/logo.png";
import banner from "../images/CarsDetailPageAssets/BANNER.png";
import { IoIosArrowUp } from "react-icons/io";
import Register from "../component/register";
const CollapsePanel = ({ title, options, index, openIndex, setOpenIndex }) => {
  const handleCollapseToggle = () => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };

  return (
    <div className="bg-white sm:w-auto w-full border-b border-sky-200">
      <div className="p-4 flex  sm:w-auto w-full items-center justify-between">
        <p className="font-semibold text-sm">{title}</p>
        <IoIosArrowUp
          stroke={2}
          className={`w-6 h-6 ${openIndex === index ? 'transform rotate-180' : ''}`}
          onClick={handleCollapseToggle}
        />
      </div>
      <div className={`${openIndex === index ? 'block' : 'hidden'} transition duration-300 px-4 pb-3`}>
        {options.map((option, optionIndex) => (
          <div key={optionIndex} className="flex items-center my-2">
            <input
              type="radio"
              id={`brandf${index}-${optionIndex}`}
              className="text-red-600 bg-inherit rounded-lg"
              value={option.value}
            />
            <label className="mt-0 ml-2 text-blue-800" htmlFor={`brandf${index}-${optionIndex}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const Cars = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const handlePriceFromChange = (event) => {
    setPriceFrom(event.target.value);
  };

  const handlePriceToChange = (event) => {
    setPriceTo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const collapsePanels = [
    {
      title: 'Select Your City',
      options: [
        { label: 'Dubai', value: 'Dubai' },
        { label: 'Electronic Parts', value: 'Electronic Parts' },
        { label: 'Engine Parts', value: 'Engine Parts' },
        { label: 'Transmission', value: 'Transmission' },
        { label: 'Body Parts', value: 'Body Parts' }
      ]
    },
    {
      title: 'Model',
      options: [
        { label: 'Suspension', value: 'Suspension' },
        { label: 'Electronic Parts', value: 'Electronic Parts' },
        { label: 'Engine Parts', value: 'Engine Parts' },
        { label: 'Transmission', value: 'Transmission' },
        { label: 'Body Parts', value: 'Body Parts' }
      ]
    },
    {
      title: 'Make',
      options: [
        { label: 'Toyota Prius', value: 'Toyota Prius' },
        { label: 'Toyota Supra', value: 'Toyota Supra' },
        { label: 'Toyota Corolla', value: 'Toyota Corolla' },
        { label: 'Toyota Grande', value: 'Toyota Grande' }
      ]
    },
    {
      title: 'Price Range',
      options: [],
      form: (
        <form onSubmit={handleSubmit} className="range-filter clearfix">
          <input
            className="rng-hintify tt-hint"
            maxLength="10"
            type="text"
            value={priceFrom}
            onChange={handlePriceFromChange}
            placeholder="From"
            autoComplete="off"
            spellCheck="false"
            dir="auto"
          />
          <input
            className="rng-hintify tt-input"
            maxLength="10"
            type="text"
            value={priceTo}
            onChange={handlePriceToChange}
            placeholder="To"
            autoComplete="off"
            spellCheck="false"
            dir="auto"
          />
          <input
            className="btn btn-primary pull-left"
            data-alias="pr"
            data-max-text="More"
            data-min-text="Less"
            data-name="price range"
            id="pr-go"
            name="commit"
            type="submit"
            value="Go"
          />
        </form>
      )
    },
    {
      title: 'Year',
      options: [
        { label: 'Toyota Prius', value: 'Toyota Prius' },
        { label: 'Toyota Supra', value: 'Toyota Supra' },
        { label: 'Toyota Corolla', value: 'Toyota Corolla' },
        { label: 'Toyota Grande', value: 'Toyota Grande' },
        { label: 'Toyota Prado TX', value: 'Toyota Prado TX' }
      ]
    },
    {
      title: 'Max Mileage (Km)',
      options: [
        { label: 'Toyota Prius', value: 'Toyota Prius' },
        { label: 'Toyota Supra', value: 'Toyota Supra' },
        { label: 'Toyota Corolla', value: 'Toyota Corolla' },
        { label: 'Toyota Grande', value: 'Toyota Grande' },
        { label: 'Toyota Prado TX', value: 'Toyota Prado TX' }
      ]
    },
    {
      title: 'Transmission Type',
      options: [
        { label: 'Automatic', value: 'Automatic' },
        { label: 'Manual', value: 'Manual' }
      ]
    },
    {
      title: 'Body Type',
      options: [
        { label: 'Sedan', value: 'Sedan' },
        { label: 'SUV', value: 'SUV' },
        { label: 'Van', value: 'Van' }
      ]
    },
    {
      title: 'Engine Type',
      options: [
        { label: 'Petrol', value: 'Petrol' },
        { label: 'Diesel', value: 'Diesel' },
        { label: 'Hybrid', value: 'Hybrid' }
      ]
    },
    {
      title: 'Color',
      options: [
        { label: 'Black', value: 'Black' },
        { label: 'White', value: 'White' },
        { label: 'Grey', value: 'Grey' },
        { label: 'Blue', value: 'Blue' },
        { label: 'Red', value: 'Red' },
        { label: 'Yellow', value: 'Yellow' }
      ]
    }
  ];

  const handleCollapseToggle = (index) => {
    setOpenIndex(index);
  };

  const [open, setOpen] = useState(false);

  const dialogRef = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>

      <Nav />
      <section className="bg-sky-100">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex justify-center opacity-50 pt-6">
            <img src={Logo} className="w-1/5" height={300} width={350} />
          </div>
          <h1 className="text-blue-800 py-5  lg:text-4xl sm:text-3xl text-xl  text-center font-bold">
            Discover the Perfect Ride for You
          </h1>
          <div className="flex justify-center mx-auto md:w-6/12 sm:w-3/4 w-10/12 py-8">
            <input
              type="text"
              placeholder="Search by Keyword (e.g. Toyota Cars)"
              className="form-control rounded-l-lg block w-full p-2 sm:py-4 py-2 md:text-lg sm:text-sm text-xs font-normal px-4 bg-white leading-6 text-gray-800 focus:outline-none  focus:ring hover:ring focus:ring-blue-300 ring-offset-0  transition duration-150 ease-in-out"
              style={{ border: "0px" }}
            />
            <button
              aria-label="Subscribe"
              className="inline-block font-normal leading-6 ml-[-4px] select-none border-transparent py-2 px-4 sm:text-lg text-sm  transition duration-150 ease-in-out bg-gradient-blue font-semibold text-base"
            >
              {""}
              Search
            </button>
          </div>
        </div>
      </section>
      <div className="flex justify-center mx-auto sm:w-2/3 w-11/12 py-5 my-5">
        <img src={banner} />
      </div>
      <div className="flex lg:w-[90%] w-[95%] max-w-[1800px] mx-auto">
        <div
          className="top-0 lg:block hidden rounded-2xl mb-7 text-blue-800 justify-center mx-3 shadow-xl  bg-sky-100 2xl:w-full xl:w-[334px]"
          style={{ maxHeight: "2500px", maxWidth: "320px" }}
        >
          <div className="bg-white border-b border-sky-200 p-4 flex items-center ">
            <p className="font-semibold text-sm">Search by Filters</p>
          </div>
          <div>
      {collapsePanels && collapsePanels.map((panel, index) => (
        <CollapsePanel
          key={index}
          index={index}
          title={panel.title}
          options={panel.options ? panel.options : []}
          form={panel.form ? panel.form : null}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
        </div>
        <div className="w-full lg:ml-3">
          <div className="flex text-blue-800 w-full  justify-between  rounded-xl items-center shadow-xl  bg-sky-100 p-2">
            <div className="flex items-center" onClick={handleClick}>
              <p className="px-3 text-xs lg:text-base">Sort by:</p>
              <div className="bg-white p-1 rounded-xl">
                {" "}
                <label className="text-left whitespace-nowrap p-2  text-justify text-xs lg:text-base">
                  Recently added
                </label>
                <select
                  id="selectInput"
                  className="bg-transparent focus:outline-none h-7 w-7"
                  type="hidden"
                  name="date"
                ></select>
              </div>
            </div>
            <div>
              <p className="text-blue-800">1 - 16 0f 2974</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 py-6 gap-6">
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
            <div className="mx-auto"><CarCard /></div>
          </div>
        </div>
        <div className="lg:hidden block ">
          <div
            ref={dialogRef}
            className={`popup top-0 rounded-2xl mb-7 text-blue-800 justify-center mx-auto shadow-xl  bg-sky-100  sm:w-[400px] w-[300px] ${open ? "open" : ""}`}
            style={{ maxHeight: "2500px" }}
            aria-modal="true"
            onKeyDown={() => setOpen(false)}
          >
            <div
              className="overlay"
              aria-hidden="true"
              onClick={handleClick}
            ></div>
            <div className="popup-content lg:hidden block mx-auto justify-center w-full">
              <div className="bg-white w-full justify-around p-4 flex items-center ">
                <p className="font-semibold text-sm">Search by Filters</p>
              </div>
              <div className="bg-white w-full p-4 items-center">
                {collapsePanels.map((panel, index) => (
                  <CollapsePanel
                    key={index}
                    index={index}
                    title={panel.title}
                    options={panel.options}
                    openIndex={openIndex}
                    setOpenIndex={handleCollapseToggle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Register />
      <CustomerReviews />
      <Footer />
    </>
  );
};
export default Cars;
