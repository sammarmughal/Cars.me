import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/App.css";
import Home from "./pages/home";
import CarsDetail from "./pages/carsDetailPage";
import Cars from "./pages/cars";
import SellYourCar from "./pages/sellYourCar";
import NewCars from "./pages/newCars";
import ClassicCars from "./pages/classicCars";
import UsedCars from "./pages/usedCars";
import HowItWorks from "./pages/howItWorks";
import Blog from "./pages/blog";
import BlogInternal from "./pages/blogInternal";
import Brands from "./pages/brands";
import BrandInternal from "./pages/brandInternal";
import MyProfile from "./pages/my-profile";
import MyDashboard from "./pages/my-dashboard";
import ChangePassword from "./pages/changePassword";
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/carDetail" element={<CarsDetail />} />
          <Route exact path="/cars" element={<Cars />} />
          <Route exact path="/NewCars" element={<NewCars />} />
          <Route exact path="/UsedCars" element={<UsedCars />} />
          <Route exact path="/ClassicCars" element={<ClassicCars />} />
          <Route exact path="/HowItWorks" element={<HowItWorks />} />
          <Route exact path="/sellYourCar" element={<SellYourCar />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog-internal" element={<BlogInternal />} />
          <Route exact path="/brands-internal" element={<BrandInternal />} />
          <Route exact path="/brands" element={<Brands />} />
          <Route
            exact
            path="/my-profile"
            element={<MyProfile/>}
          />
          <Route
            exact
            path="/my-dashboard"
            element={<MyDashboard/>}
          />
          <Route
            exact
            path="/change-password"
            element={<ChangePassword/>}
          />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
