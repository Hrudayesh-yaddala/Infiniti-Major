
import profilelogo from "../Images/profilelogo.webp";
import NavImage from '../Images/nav.webp'
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const AplHeader = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle the dropdown
  const toggleDropdown = (i) => {
    if(i == 0)
      setIsDropdownOpen(!isDropdownOpen);
    else if(i == 1)
      setIsDropdownOpen1(!isDropdownOpen1)
    else if(i == 2)
      setIsDropdownOpen2(!isDropdownOpen2)
    else if(i == 3)
      setIsDropdownOpen3(!isDropdownOpen3)
    else if(i == 4)
      setIsDropdownOpen4(!isDropdownOpen4)
  };

  // Function to close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      setIsDropdownOpen1(false);
      setIsDropdownOpen2(false);
      setIsDropdownOpen3(false);
      setIsDropdownOpen4(false);
    }
  };

  // Add event listener to handle clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstname");
    localStorage.removeItem("toastDisplayed");
    toast.success("You have been logged out !");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <header className=" bg-stone-950">
      <nav className="px-4 lg:px-4">
        <div className="flex items-center justify-between h-16">
          {/* <h1 className="ml-4">DocNLP</h1> */}
          <Link to={'/home'}>
          <img className="h-14 w-20 rounded-md" src={NavImage} alt="DocNlplogo"/>
          </Link>
          {/* <img src="../images/hamburger-menu.svg"/> */}
          <div className="pr-10 flex space-x-6 justify-center">
            {/* <Link  to={'/audio-transcribe'} className="text-black text-lg  hover:bg-[#5b0e2d] hover:text-white rounded-md p-2 cursor-pointer font-medium">Audio conversion</Link> */}
            {/* <Link to={'/hand-to-edit'} className=" text-lg :bg-[#5b0e2d] bg-[#5b0e2d] text-white rounded-md p-2 cursor-pointer font-medium">Text conversion</Link> */}
            {/* <Link to={'/language-translate'}  className="text-black text-lg hover:bg-[#5b0e2d] hover:text-white rounded-md p-2 cursor-pointer font-medium">Language Translation</Link> */}
            
            <button
              type="button"
              className="mr-7 text-sm bg- rounded-full md:mr-0  items-right flex items-center relative"
              id="user-menu-button"
              aria-expanded={isDropdownOpen1}
              onClick={() => toggleDropdown(1)}
            >
              <div className="text-lg text-white ml-2 flex items-center   hover:bg-[#f48a5d] hover:text-black rounded-md p-2 cursor-pointer font-medium transition duration-500">
                  Audio Conversion
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
              </div>

              {isDropdownOpen1 && (
                <div
                  className="z-60 absolute top-full left-0 lg:ml-2.5 md:-ml-4 mt-2 md:w-44 lg:w-42 bg-white rounded-lg duration-700 opacity-100"
                  id="user-dropdown"
                  ref={dropdownRef}
                  style={{boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', opacity:"1", transform:"translate(0) scale(1)", visibility:"visible"}}
                >
                  <ul className="text-center space-y-4 p-4">
                    <li>
                      
                      <Link to={"/text-to-speech"}className=" text-md text-gray-700 font-semibold p-2 rounded-md hover:bg-[#5b0e2d] rounded-4xl hover:text-white">Text to Audio</Link>
                    </li>
                    <li>
                      
                      <Link to={"/audio-transcribe"} className=" text-md text-gray-700 font-semibold p-2 rounded-md hover:bg-[#5b0e2d] hover:text-white">Audio to Text</Link>
                    </li>
                    {/* <br/>                    */}
                  </ul>
                </div>
              )}

            </button>

            <button
              type="button"
              className="mr-7 text-sm bg- rounded-full md:mr-0  items-right flex items-center relative"
              id="user-menu-button"
              aria-expanded={isDropdownOpen2}
              onClick={() => toggleDropdown(2)}
            >
              <div className="text-lg text-white ml-2 flex items-center hover:bg-[#f48a5d] hover:text-black rounded-md p-2 cursor-pointer font-medium transition delay-100">
                  Text Conversion
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
              </div>

              {isDropdownOpen2 && (
                <div
                  className="z-60 absolute top-full left-0 md:-ml-8 lg:-ml-2.5 mt-2 w-52 bg-white rounded-lg duration-700 opacity-100"
                  id="user-dropdown"
                  ref={dropdownRef}
                  style={{boxShadow:"0px 8px 16px 0px rgba(0,0,0,0.2)"}}
                >
                  <ul className="text-center space-y-4 p-4">
                    <li>
                      
                      <Link to={"/hand-to-edit"}className=" text-md text-gray-700 font-semibold p-2 rounded-md hover:bg-[#5b0e2d] rounded-4xl hover:text-white">Handwritten to Editable</Link>
                    </li>
                    <li>
                      
                      <Link to={"/home"} className=" text-md text-gray-700 font-semibold p-2 rounded-md hover:bg-[#5b0e2d] hover:text-white">Editable to Handwritten</Link>
                    </li>
                    {/* <br/>                    */}
                  </ul>
                </div>
              )}

            </button>

            <button
              type="button"
              className="mr-7 text-sm bg- rounded-full md:mr-0  items-right flex items-center relative"
              id="user-menu-button"
              aria-expanded={isDropdownOpen3}
              onClick={() => toggleDropdown(3)}
            >
              <div className="text-lg text-white ml-2 flex items-center hover:bg-[#f48a5d] hover:text-black rounded-md p-2 cursor-pointer font-medium transition delay-100">
                  Text Craft
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
              </div>

              {isDropdownOpen3 && (
                <div
                  className="z-60 absolute top-full left-0 md:-ml-14 lg:-ml-9 mt-2 w-52 bg-white rounded-lg duration-700 opacity-100"
                  id="user-dropdown"
                  ref={dropdownRef}
                  style={{boxShadow:"0px 8px 16px 0px rgba(0,0,0,0.2)"}}
                >
                  <ul className="text-center space-y-4 p-4">
                    <li>
                      
                      <Link to={"/language-translate"}className=" text-md text-gray-700 font-semibold p-2 rounded-md hover:bg-[#5b0e2d] rounded-4xl hover:text-white">Language Translation</Link>
                    </li>
                    <li>
                      
                      <Link to={"/summarization"} className=" text-md text-gray-700 font-semibold p-2 rounded-md hover:bg-[#5b0e2d] hover:text-white">Text Summarization</Link>
                    </li>
                    <li>
                      
                      <Link to={"/home"} className=" text-md text-gray-700 font-semibold p-2 rounded-md hover:bg-[#5b0e2d] hover:text-white">Paraphraser</Link>
                    </li>
                    {/* <br/>                    */}
                  </ul>
                </div>
              )}

            </button>

            <Link  to={'/home'} className="text-white text-lg hover:bg-[#f48a5d] hover:text-black rounded-md p-2 cursor-pointer font-medium">Mathematical Expression</Link>

            
            <button
              type="button"
              className="mr-7 text-sm bg- rounded-full md:mr-0  items-right flex items-center"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              onClick={() => toggleDropdown(0)}
            >
            
              <img
                className="w-8 h-8 rounded-full"
                src={profilelogo}
                alt="userphoto"
              />
              {/* Dropdown menu */}
              <div className="text-lg text-white ml-2 flex items-center">
                  Hi, {localStorage.getItem("firstname")}
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
              </div>
              {isDropdownOpen && (
                <div
                  className="z-60 absolute mt-56 mr-56 w-32 bg-white rounded-lg duration-700"
                  id="user-dropdown"
                  ref={dropdownRef}
                  style={{boxShadow:"0px 8px 16px 0px rgba(0,0,0,0.2)"}}

                >
                  <ul className="text-center space-y-4 p-4">
                    <li>
                      
                      <Link to={"/home"}className=" text-md text-gray-700 font-semibold p-2 rounded-md hover:bg-[#5b0e2d] rounded-4xl hover:text-white">My Profile</Link>
                    </li>
                    <li>
                      
                      <Link to={"/home"} className=" text-md text-gray-700 font-semibold p-2 rounded-md hover:bg-[#5b0e2d] hover:text-white">Dashboard</Link>
                    </li>
                    <li>
                      
                      <Link to={"/home"} className=" text-md text-gray-700 font-semibold p-2 rounded-md hover:bg-[#5b0e2d] hover:text-white">Settings</Link>
                    </li>
                    <li>
                      
                    </li>

                    <Link className=" pb-2 text-md font-bold text-black p-2  cursor-pointer hover:bg-[#5b0e2d] hover:text-white rounded-md" onClick={handleLogout}>Sign out</Link>
                    <br/>                   
                  </ul>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default AplHeader;




