import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/home";
import CarsDetail from "./pages/carsDetailPage";
import Cars from "./pages/cars";
import SellYourCar from "./pages/sellYourCar";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
         <Route exact path="/carDetail/:car_name/:id" element={<CarsDetail /> }/>
         <Route exact path="/cars" element={<Cars />}/>
         <Route exact path="/sellYourCar" element={<SellYourCar/>}/>
      </Routes>
    </>
  );
}

export default App;
