import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import LandingPage from "./pages/landing-page"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
