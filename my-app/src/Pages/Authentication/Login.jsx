
import React, { useState } from "react";
import axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Nav from "./Nav";
// import ForgetImage from "../Images/forget.webp";
// import { APICall } from "../API/APICall";
import { APICall } from "../../API/APICall";
import { TypeAnimation } from 'react-type-animation';


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);


  const load = () => {
    return (
      <div
        className={`flex justify-center items-center h-screen ${loading ? "block" : "hidden"
          }`}
      >
        <div className="bg-white p-5 rounded-lg">
          <BeatLoader loading={loading} className="text-cyan-900 text-3xl" />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  };

  const toggle = () => {
    setOpen(!open);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Fill all details");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post(
      APICall+'/login',
        formData,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.status === 400) toast.error("Fill all details");
      else if (response.status === 200) {
        const { message, firstname } = response.data;
        // toast.success(`${message}. Welcome, ${firstname}!`);
        localStorage.setItem("firstname", response.data.firstname);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem('toastDisplayed', 'false');
        // localStorage.setItem("taskid", response.data.uniqueObjid);
        // setTimeout(() => {
        //   navigate("/home");
        // }, 1000);
        navigate("/home", { state: { message, firstname } }); // Passing message and firstname as state
      } else if (response.status === 401) toast.error("Invalid Credentials");
      else if (response.status === 404) {
        toast.error("User Not Found");
      }
      if (response.status === 500) toast.error("Internal Server Error");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
    
        <div>
          <div class="bg-[#ffa781]">
    <div class="flex justify-center h-screen">
      
        <div class="hidden bg-cover lg:block lg:w-2/3 bg-[url('/Images/bg.webp')]">
           
            <div class="flex items-center bg-opacity-10 h-full px-20 ml-6 ">
                
                <div className=" bg-[#ffa781] opacity-80 h-60 w-full py-4 px-7 rounded-xl">

                    <div>
                    <h2 class="md:text-5xl underline  decoration-double  font-bold text-[#5b0e2d] leading-tight sm:text-3xl" >Infiniti Script</h2>

                    <p className="max-w-2xl text-xl  mt-4 text-black font-bold prose">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Welcome to a new era of communication! Our innovative NLP-powered application is here to transform the way you interact with text and speech.Discover efficiency, security, and inclusivity in one seamless experience. Join us on this exciting journey today!",
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Entrance to our application is on the right 👉🏻',
                            3000,
                            ''
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                        />
                        {/* "Welcome to a new era of communication! Our innovative NLP-powered application is here to transform the way you interact with text and speech.
                        Discover efficiency, security, and inclusivity in one seamless experience. Join us on this exciting journey today!" */}
                    </p> 
                 </div>
                </div>
            </div>
        </div>

        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div class="flex-1">
                <div class="text-center">
                    <div class="flex justify-center">
                        <img class=" w-24 h-24" src='/Images/forget.webp' alt=""/>
                    </div>

                    <p class="mt-3 text-black  font-semibold text-lg">Sign in to access your account</p>
                </div>

                <div class="mt-8">
                    <form>
                        <div>
                            <label for="email" class="block mb-2 text-sm text-black ">Email Address</label>
                            <input type="email" value={email} placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#5b0e2d]  focus:ring-[#5b0e2d] focus:outline-none focus:ring focus:ring-opacity-40" onChange={(event)=>setEmail(event.target.value)} />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-black ">Password</label>
                                <Link to={'/forgetpassword'} class="text-sm text-black focus:text-[#5b0e2d] hover:text-[#5b0e2d] hover:underline">Forgot password?</Link>
                            </div>

                            <input type="password" value={password} placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#5b0e2d]  focus:ring-[#5b0e2d] focus:outline-none focus:ring focus:ring-opacity-40" onChange={(event)=>setPassword(event.target.value)} />
                        </div>

                        <div class="mt-6">
                        {
                            loading ? (<button type="submit" class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#5b0e2d] rounded-lg hover:bg-orange-900 focus:outline-none focus:bg-[#5b0e2d]  focus:ring-opacity-50" onClick={handleSubmit}>
                                      <BeatLoader loading={loading} className="text-cyan-900 text-3xl" />
                        </button>):
                          <button type="submit" class="w-full px-4 py-2 text-white  duration-300 bg-[#5b0e2d] rounded-lg hover:bg-orange-900 focus:bg-[#5b0e2d] " onClick={handleSubmit}>
                          Sign in
                      </button>
                        }
                            
                        </div>

                    </form>

                    <p class="mt-6 text-base text-center text-[#5b0e2d]">Don&#x27;t have an account yet? <Link to={'/register'} class="text-[#5b0e2d] focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
                </div>
            </div>
        </div>
    </div>
</div>
         
        </div>
    </div>
  );
};

export default Login;

