import React from 'react'
import { useLocation, Navigate,Outlet } from 'react-router-dom'
import Header from './Header'
import AplHeader from './AplHeader'
// import Footer from './Footer'
const ProtectedLayout = () => {
  const token=localStorage.getItem("token");
  const location=useLocation();

  const mainHeadRoutes=['/home','/audio-transcribe','/plan-selection'];

  const displayHeader=mainHeadRoutes.includes(location.pathname);

  if(!token){
    return <Navigate to={"/"} />
  }
  return (
    <div className='flex flex-col h-screen '>
      {/* <Header /> */}
      {displayHeader ? <Header/> : <AplHeader/>}
      <div className='flex'>
        <div className='flex-1 pb-10 bg-black h-screen'>
          <Outlet />
        </div>
        
      </div>
   
    </div>
  )
}

export default ProtectedLayout;

