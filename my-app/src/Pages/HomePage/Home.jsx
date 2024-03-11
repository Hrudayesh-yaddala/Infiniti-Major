
import {React,useState} from "react";
import { Featurecards } from "../../components/Featurecards";
import Testimonials from "./Testimonials";
import toast from "react-hot-toast";
import Initial from "./Initial";
import Initialpag from "./Initialpag";
// import VideoIntroduce from "./VideoIntroduce";
import Industries from "./Industries";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";
import Productivity from "./Productivity";

import Features from "./Features";
function Home() {
  const location=useLocation();

  var toastDisplayed=true;

  useEffect(() => {
    if (toastDisplayed&& location.state && location.state.message && location.state.firstname) {
        toast.success(`${location.state.message}. Welcome, ${location.state.firstname}!`);
        // setToastDisplayed(false);
        toastDisplayed=false;

    }
}, [location.state]);

 

    return (
     <div className=" bg-[#ffa781] ">
    {/* // <div className=" bg-gradient-to-br from-blue-400 to-rose-300"> */}
        {/* <img src={background} alt="background-img"/> */}
        
        <Initial/>
        <Initialpag/>
        {/* <VideoIntroduce/> */}
        {/* <Industries/> */}
        <Productivity/>
        <Features/>
        {/* <Featurecards/> */}
        <Testimonials/>
        <Footer/>
        
 
      </div>
    );
  }
  export default Home;
  
  
  