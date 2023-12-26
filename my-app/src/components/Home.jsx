
import React from "react";
import { Featurecards } from "./Featurecards";
import Testimonials from "./Testimonials";
// import background from "../Images/background.png";
import Initial from "./Initial";
import Initialpag from "./Initialpag";
import Confet from "./Confet";
import Footer from "./Footer";
function Home() {
    return (
     <div className=" bg-[#ffa781] ">
    {/* // <div className=" bg-gradient-to-br from-blue-400 to-rose-300"> */}
        {/* <img src={background} alt="background-img"/> */}
        <Confet/>
        <Initial/>
        <Initialpag/>
        <Featurecards/>
        <Testimonials/>
        <Footer/>
        
 
      </div>
    );
  }
  export default Home;
  
  
  