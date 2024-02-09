import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/home";
import CarsDetail from "./pages/carsDetailPage";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={   <Home />}/>
         <Route exact path="/carsDetail" element={<CarsDetail/> }/>
      </Routes>
    </>
  );
}

export default App;
