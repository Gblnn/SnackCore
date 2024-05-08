import { BrowserRouter, Route, Routes } from "react-router-dom"
import ZeroE from "./pages/0e"
import LandingPage from "./pages/landing-page"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/0e/*" element={<ZeroE/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
    
    
  )
}

export default App
