import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "@/components/navbar";
import Profile from "./profile";


export default function ZeroE(){
    return(
        <>
        <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="profile" element={<Profile/>}/>
        </Routes>
        <Navbar/>
        </>
    )
}