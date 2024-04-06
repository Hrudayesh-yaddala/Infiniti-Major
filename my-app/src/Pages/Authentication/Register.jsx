import React from "react";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import '../index.css'; // Import your CSS file
import { APICall } from "../../API/APICall";




const Register = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirmopen, setConfirmopen] = useState(false);
  const [confirmpassword, setConfirmPassword] = useState("");
  let [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: " ",
    password: ""
  })

  const load = () => {
    return (
      <div className={`flex justify-center items-center h-screen ${loading ? 'block' : 'hidden'}`}>
        <div className="bg-black p-5 rounded-lg">
          <BeatLoader loading={loading} className=" text-slate-200 text-3xl" />
          <p className="mt-4 text-gray-200">Loading...</p>
        </div>
      </div>
    )
  }
  const toggle = () => {
    setOpen(!open)
  }
  const confirmtoggle = () => {
    setConfirmopen(!confirmopen)
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handlePhoneChange = (phoneNumber) => {
    setData({ ...data, phone: phoneNumber });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target || { name: "phone", value: e }; // Use e as the value directly
  //   setData({ ...data, [name]: value });
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data.firstname);
    console.log(data.lastname);
    console.log(data.email);
    console.log(data.phone);
    console.log(data.password);
    console.log(confirmpassword);



    if (!data.firstname || !data.lastname || !data.email || !data.phone || !data.password || !confirmpassword) {
      toast.error("Fill all details Properly");
      return;
    }

    setLoading(true);

    if (data.password !== confirmpassword) {
      toast.error("Both passwords should be the same");
      setLoading(false);
    } else {
      console.log(data);

      // Extract the phoneNumber from the phone object
      const phoneNumber = data.phone.phoneNumber;

      try {
        const response = await axios.post(
        APICall+'/register',
          // { ...data, phone: phoneNumber },
          data,
          {
            headers: {
              'Content-type': 'application/json',
            },
          }
        );

        console.log(response);
        toast.success(response.data.message);

        if (response.status === 200) {
          toast.success("Redirecting to login");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.message);
      } finally {
        setLoading(false);
      }
    }
  };


  // return (
  //   <div>
  //     {loading ? load() : (
  //       <div>
  //         <Nav />
  //         <div className="flex bg-slate-100" >
  //           {/* <div className="lg:w-1/2">
  //       <img src={LoginImage} className="h-screen" alt="Side Banner" />
  //     </div> */}
  //           <div className="lg:w-1/2 items-center p-24 ">
  //             <div className="bg-slate-300 p-20 rounded-lg">
  //               <div className=" ">
  //                 <img src={RegisterImage} className="" alt="" />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="lg:w-1/2 mt-8 ml-8">
  //             <div>
  //               <div className=" w-8/12  px-9 py-6 shadow-lg shadow-gray-700 bg-slate-300">
  //                 <div className=" flex flex-col items-center text-right">
  //                   <h1 className="font-bold text-3xl text-gray-800">SignUp</h1>
  //                   <p className="text-lg text-secondary text-gray-500 font-semibold mt-4">Please SignUp to your account and start</p>
  //                 </div>
  //                 <form>
  //                   <div className="flex-col mt-7 space-y-3 ml-6">
  //                     <div class="flex space-x-2">

  //                       <div className=" flex-1 ">
  //                         <label className=" text-gray-500 font-semibold">First Name</label>
  //                         <input type="text" className="border p-2 rounded w-40" name="firstname" value={data.firstname} id="firstname" onChange={handleChange} />
  //                       </div>


  //                       <div className="text-left flex-1">
  //                         <label className=" text-gray-500 font-semibold">Last Name</label>
  //                         <input type="text" className="border p-2 rounded w-44" name="lastname" id="lastname" value={data.lastname} onChange={handleChange} />
  //                       </div>

  //                     </div>

  //                     <div className="text-left flex-1">
  //                       <label className=" text-gray-500 font-semibold" >Email</label>
  //                       <div className="lg:flex">
  //                         <input type="email" className="lg:w-96 border p-2 rounded" name="email" id="email" value={data.email} onChange={handleChange} />
  //                       </div>
  //                       {/* <span className="text-danger"></span> */}
  //                     </div>

  //                     <div className="phone-input-container">
  //                       <label className="text-left font-semibold text-gray-500">Phone</label>
  //                       <PhoneInput
  //                         value={data.phone}
  //                         id="phone"
  //                         name="phone"
  //                         countryCode="us"
  //                         onChange={handlePhoneChange}
  //                       />
  //                     </div>

  //                     <div className="lg:flex lg:flex-col lg:mb-2 relative">
  //                       <label className="text-left text-gray-500 font-semibold">Password</label>
  //                       <div className="lg:flex">
  //                         <input type={open ? "text" : "password"} className="lg:w-96 border p-2 rounded" name="password" id="password" value={data.password} onChange={handleChange} />
  //                         <div className="text-2xl absolute bottom-2 right-16">
  //                           {open ? (<FaEyeSlash onClick={toggle} className="text-gray-400" />) : (<FaEye onClick={toggle} className="text-gray-400" />)}
  //                         </div>
  //                       </div>

  //                     </div>

  //                     <div className="lg:flex lg:flex-col lg:mb-2 relative">
  //                       <label className="text-left text-gray-500 font-semibold" >Confirm Password</label>
  //                       <div className="lg:flex">
  //                         <input type={confirmopen ? "text" : "password"} className="lg:w-96 border p-2 rounded" name="confirmpassword" id="confirmpassword" onChange={(e) => setConfirmPassword(e.target.value)} />
  //                         <div className="text-2xl absolute bottom-2 right-16">
  //                           {confirmopen ? (<FaEyeSlash onClick={confirmtoggle} className="text-gray-400" />) : (<FaEye onClick={confirmtoggle} className="text-gray-400" />)}
  //                         </div>
  //                       </div>

  //                     </div>

  //                     <div className="lg:flex lg:flex-col">
  //                       <div className="lg:mb-2 mt-4">
  //                         <button type="submit" className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded w-96" onClick={handleSubmit}>SignUp</button>
  //                       </div>
  //                       <div className=" items-center">
  //                         <div className="lg:mb-0 flex">
  //                           <span className="mr-2 text-gray-500 font-semibold" >Do you have an Account?</span>
  //                           <a className="font-semibold text-rose-700" href="/"><span href="/" >Login Now</span> </a>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </form>
  //               </div>

  //             </div>

  //           </div>
  //         </div>
  //       </div>)}
  //   </div>

  // );

  return(
    <section class="bg-white ">
    <div class="flex justify-center min-h-screen">
        <div class="hidden bg-cover lg:block lg:w-2/5  bg-[url('/Images/regi.webp')]">
        </div>

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
                <h1 class="text-3xl font-bold tracking-wider text-gray-800 capitalize">
                    Get your free account now.
                </h1>

                <p class="mt-4 text-gray-800 font-extralight ">
                    Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                </p>
                <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handleSubmit}>
                    <div>
                        <label class="block mb-2 text-sm text-gray-900 ">First Name</label>
                        <input type="text" placeholder="John" id="firstname" value={data.firstname} name="firstname" onChange={handleChange}  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg     focus:border-[#5b0e2d]   focus:ring-[#5b0e2d]  focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-900">Last name</label>
                        <input type="text" placeholder="Snow" id="lastname" value={data.lastname} name="lastname" onChange={handleChange}  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg     focus:border-[#5b0e2d]   focus:ring-[#5b0e2d]  focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-900">Phone number</label>
                        <input type="text" placeholder="XXX-XX-XXXX-XXX" id="phone" value={data.phone} name="phone" onChange={handleChange} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg     focus:border-[#5b0e2d]   focus:ring-[#5b0e2d]  focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-900">Email address</label>
                        <input type="email" placeholder="johnsnow@example.com" id="email" value={data.email} name="email" onChange={handleChange} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg     focus:border-[#5b0e2d]   focus:ring-[#5b0e2d]  focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-900">Password</label>
                        <input type="password" placeholder="Enter your password" id="password" value={data.password} name="password" onChange={handleChange} class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg     focus:border-[#5b0e2d]   focus:ring-[#5b0e2d]  focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-900">Confirm password</label>
                        <input type="password" placeholder="Enter your password" onChange={(e)=>setConfirmPassword(e.target.value)}  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg     focus:border-[#5b0e2d]   focus:ring-[#5b0e2d]  focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <button class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#5b0e2d]  rounded-lg hover:bg-orange-900 focus:outline-none focus:ring focus:ring-[#5b0e2d]-300 focus:ring-opacity-50">
                        
                        { loading ? load(): (
                          <div>
                             <span>Sign Up </span>

                              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd" />
                              </svg>
                          </div>

                       
                        )}
                       
                    </button>
                    
                </form>
                <div className=" mt-3">
                  <Link to={'/login'} className=" hover:underline cursor-pointer ">Already have an account?</Link>
                </div>
            </div>
        </div>
    </div>
</section>
  )

}
export default Register;



