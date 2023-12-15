// import homebg from "../Images/home.webp";
// import { Link } from "react-router-dom";
// import Resside from "./Resside";
import React from "react";
import { Featurecards } from "./Featurecards";
import Testimonials from "./Testimonials";
import background from "../Images/background.png"
import Footer from "./Footer";
function Home() {
    return (
      // <div className="flex justify-center mt-72 w-96 rounded-md h-48 items-center text-center ml-96 bg-slate-300">
      <div className=" bg-gradient-to-br from-blue-400 to-rose-300">
        <img src={background} alt="background-img"/>
        <Featurecards/>
        <Testimonials/>
        <Footer/>
        
      </div>
    );
  }
  export default Home;
  
  
  