/* eslint-disable no-unused-vars */
import React from "react";
// import Home from "./Home";
import Home from "../Pages/HomePage/Home";
// import Register from "./Register";
// import Login from "./Login";
import Register from '../Pages/Authentication/Register';
import Login from '../Pages/Authentication/Login';
import Summarize from "./Summarization"
// import Audioconv from "./Audioconv";
// import AudioTransform from "./AudioTransform";

// import Audioconv from "../Pages/Audio-Transcribe/Audioconv";
import HandConversion from "../Pages/OCR/HandToEdit";
import Audioconv from "../Pages/Audio-Transcribe/AudioHome";
import AudioTransform from "../Pages/Audio-Transcribe/AudioTransform";
import Audiotranscribe from "../Pages/Audio-Transcribe/Audiotranscribe";
import Pricing from "../Pages/Audio-Transcribe/Pricing";
import LanguageTranslate from "../Pages/LanguageTranslation/LanguageTranslate";
import TexttoSpeech from "..//Pages/Text-speech/TexttoSpeech";
import Paraphraser from "../Pages/Paraphraser/paraphraser";
import EdittoHandwritten from "../Pages/HandwrittenConversion/EdittoHandwritten";
import { NotFound } from "./NotFound";
import { ForgetPassword } from "./ForgetPassword";
import { ResetPassword } from "./ResetPassword";
// import SingleEntry from "./SingleEntry";
import {Route,Routes, useParams} from 'react-router-dom';
import ProtectedLayout from "./ProtectedLayout";


import Mathmat from "../Pages/Mathematical-Exp/Mathmat";
// import  { Toaster } from 'react-hot-toast';
function App(){
    const {isUser_id,accessToken}=useParams();
    return(
        <div className="flex flex-col h-screen">
            
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/forgetpassword" element={<ForgetPassword/>}/>
                <Route path="/resetpassword/:isUser_id/:accessToken" element={<ResetPassword />}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/" element={<ProtectedLayout/>}>
                    <Route path="home" element={<Home/>} />
                        <Route path="summarization" element={<Summarize/>} /> 
                        <Route path="audio-transcribe"  element={<Audioconv/>}/> 
                        <Route path="audio-transform"  element={<AudioTransform/>}/> 
                        <Route path="audio-main"  element={<Audiotranscribe/>}/> 
                        <Route path="hand-to-edit"  element={<HandConversion/>}/> 
                        <Route path="language-translate"  element={<LanguageTranslate/>}/> 
                        <Route path="text-to-speech"  element={<TexttoSpeech/>}/> 
                        <Route path="text-paraphraser"  element={<Paraphraser/>}/> 
                        <Route path="maths-expression"  element={<Mathmat/>}/> 
                        <Route path="edit-to-handwritten"  element={<EdittoHandwritten/>}/> 








                        <Route path="plan-selection"  element={<Pricing/>}/> 






                </Route>
            </Routes>
        </div>
    );
}
export default App;



