/* eslint-disable react/no-unescaped-entities */
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Applayout from "./pages/Applayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Dropdown from "./pages/Dropdown";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dropdown" element={<Dropdown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
