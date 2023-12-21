// import React, { useState } from "react";
// import axios from 'axios';
// import BeatLoader from "react-spinners/BeatLoader";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from 'react-hot-toast';
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Nav from "./Nav";
// import LoginImage from "../Images/infiniti-side.webp";

// const Login = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [open, setOpen] = useState(false);


//   const load = () => {
//     return (
//       <div
//         className={`flex justify-center items-center h-screen ${loading ? "block" : "hidden"
//           }`}
//       >
//         <div className="bg-white p-5 rounded-lg">
//           <BeatLoader loading={loading} className="text-cyan-900 text-3xl" />
//           <p className="mt-4 text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   };

//   const toggle = () => {
//     setOpen(!open);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Fill all details");
//       return;
//     }
//     setLoading(true);
//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("password", password);

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/user/login",
//         // "https://major-backend-infiniti.onrender.com/api/user/login",
//         formData,
//         {
//           headers: {
//             "Content-type": "application/json",
//           },
//         }
//       );

//       if (response.status === 400) toast.error("Fill all details");
//       else if (response.status === 200) {
//         const { message, firstname } = response.data;
//         toast.success(`${message}. Welcome, ${firstname}!`);
//         localStorage.setItem("firstname", response.data.firstname);
//         localStorage.setItem("token", response.data.accessToken);
//         localStorage.setItem("taskid", response.data.uniqueObjid);
//         setTimeout(() => {
//           navigate("/home");
//         }, 1000);
//       } else if (response.status === 401) toast.error("Invalid Credentials");
//       else if (response.status === 404) {
//         toast.error("User Not Found");
//       }
//       if (response.status === 500) toast.error("Internal Server Error");
//     } catch (err) {
//       console.log(err);
//       toast.error(err.response.data.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div>
//       {loading ? (
//         load()
//       ) : (
//         <div>
//           <Nav />
//           <div className="lg:flex bg-slate-100">
     
//             <div className="hidden lg:block lg:w-1/2 p-16">
//               <div className="bg-slate-300 rounded-lg lg:p-20 h-full flex justify-center items-center">
//                 <img src={LoginImage} alt="" className="max-w-full rounded-lg" />
//               </div>
//             </div>
//             <div className="w-full lg:w-1/2 mt-10">
//               <form className="p-6 lg:p-10 h-96 md:h-56">
//                 <div className="lg:m-auto w-full lg:w-7/12  p-10 shadow-lg shadow-gray-700 bg-slate-300 rounded-lg">
                
//                   <div className="text-left">
//                     <h1 className="font-bold text-3xl text-gray-800">Login</h1>
//                     <p className="text-lg text-gray-500 font-semibold mt-6">
//                       Please Sign-In to your account and start
//                     </p>
//                   </div>
//                   <div className="login-form mt-6">
//                     <div className="mb-4">
//                       <label className="text-left text-gray-500 font-semibold">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         value={email}
//                         className="w-full border p-2 rounded"
//                         onChange={(event) => setEmail(event.target.value)}
//                       />

//                       {/* <input type="email" value={email} className="lg:w-full border p-2 rounded" onChange={(event) => setemail(event.target.value)} /> */}
//                     </div>
//                     <div className="mb-4 relative">
//                       <label className="text-left text-gray-500 font-semibold">
//                         Password
//                       </label>
//                        <input
//                         type={open ? "text" : "password"}
//                         value={password}
//                         className="w-full border p-2 rounded"
//                         onChange={(event) => setPassword(event.target.value)}
//                       />
//                       <div className="text-2xl absolute bottom-2 right-3">
//                         {open ? (
//                           <FaEyeSlash
//                             onClick={toggle}
//                             className="text-gray-400"
//                           />
//                         ) : (
//                           <FaEye onClick={toggle} className="text-gray-400" />
//                         )}
//                       </div>
//                     </div>
//                     <p className="mb-3 flex justify-end text-rose-700 font-semibold">
//                       <Link to={"/forgetpassword"}>Forgot Password?</Link>
//                     </p>
//                     <div className="mb-2">
//                       <button
//                         type="submit"
//                         className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded w-full"
//                         onClick={handleSubmit}
//                       >
//                         Login
//                       </button>
//                     </div>
//                     <div className="text-center">
//                       <span className="text-gray-500 font-semibold">
//                         Don't have an Account?
//                       </span>{" "}
//                       <Link
//                         className="font-semibold text-rose-700"
//                         to={"/register"}
//                       >
//                         SignUp
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Nav from "./Nav";
import LoginImage from "../Images/infiniti-side.webp";
import ForgetImage from "../Images/forget.webp";


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
      "https://major-backend-infiniti.onrender.com/api/user/login",
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
        toast.success(`${message}. Welcome, ${firstname}!`);
        localStorage.setItem("firstname", response.data.firstname);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("taskid", response.data.uniqueObjid);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
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
      {loading ? (
        load()
      ) : (
        <div>
          <div class="bg-[#ffa781]">
    <div class="flex justify-center h-screen">
      
        <div class="hidden bg-cover lg:block lg:w-2/3 bg-[url('/bg.webp')]">
           
            <div class="flex items-center h-full px-20 bg-[#ffa781] bg-opacity-10 ml-6">
                <div>
                    <h2 class="text-4xl font-bold text-white sm:text-3xl">Infiniti Script</h2>

                    <p class="max-w-xl mt-3 text-black font-bold">
                    "Welcome to a new era of communication! Our innovative NLP-powered application is here to transform the way you interact with text and speech.
                     Discover efficiency, security, and inclusivity in one seamless experience. Join us on this exciting journey today!"
                    </p>
                </div>
            </div>
        </div>

        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div class="flex-1">
                <div class="text-center">
                    <div class="flex justify-center">
                        <img class=" w-24 h-24" src={ForgetImage} alt=""/>
                    </div>

                    <p class="mt-3 text-black dark:text-gray-300 font-semibold text-lg">Sign in to access your account</p>
                </div>

                <div class="mt-8">
                    <form>
                        <div>
                            <label for="email" class="block mb-2 text-sm text-black dark:text-gray-200">Email Address</label>
                            <input type="email" value={email} placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#5b0e2d] dark:focus:border-[#5b0e2d] focus:ring-[#5b0e2d] focus:outline-none focus:ring focus:ring-opacity-40" onChange={(event)=>setEmail(event.target.value)} />
                        </div>

                        <div class="mt-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-black dark:text-gray-200">Password</label>
                                <Link to={'/forgetpassword'} class="text-sm text-black focus:text-[#5b0e2d] hover:text-[#5b0e2d] hover:underline">Forgot password?</Link>
                            </div>

                            <input type="password" value={password} placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-[#5b0e2d] dark:focus:border-[#5b0e2d] focus:ring-[#5b0e2d] focus:outline-none focus:ring focus:ring-opacity-40" onChange={(event)=>setPassword(event.target.value)} />
                        </div>

                        <div class="mt-6">
                            <button type="submit" class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#5b0e2d] rounded-lg hover:bg-orange-900 focus:outline-none focus:bg-[#5b0e2d] focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={handleSubmit}>
                                Sign in
                            </button>
                        </div>

                    </form>

                    <p class="mt-6 text-base text-center text-[#5b0e2d]">Don&#x27;t have an account yet? <Link to={'/register'} class="text-[#5b0e2d] focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
                </div>
            </div>
        </div>
    </div>
</div>
         
        </div>
      )}
    </div>
  );
};

export default Login;

