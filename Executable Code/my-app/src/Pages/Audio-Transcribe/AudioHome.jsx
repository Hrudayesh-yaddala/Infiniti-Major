
import React, { useState } from "react";

import Audioinit from "./audio1";
import Audio2 from "./audio2";
import Audio3 from "./Audio3";
import Audio4 from "./Audio4";
import Audio5 from "./Audio5";
// import Footer from "../../components/Footer";
import Footer from "../HomePage/Footer";
const Audioconv = () => {


  return(
    <div className="bg-[#ffa781]">
      <Audioinit/>
      <Audio2/>
      <Audio3/>
      <Audio4/>
      <Audio5/>
      <Footer/>
      
    </div>
  )
};

export default Audioconv;






