import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from './Component/Nabbar'
import Home from './Component/Home'
import About from "./Component/About";
import Footer from "./Component/Footer";
import GetInTouch from "./Component/GetInTouch";
import AllComponent from "./Component/AllComponent/AllComponent";

function App() {
  return (
    <>
      <Navbar />
      <AllComponent/>
      <Footer/>
    </>
  );
}

export default App;
