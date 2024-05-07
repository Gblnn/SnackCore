import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"


export default function LandingPage(){
    return(
        <div style={{height:"100svh", width:"100%", background:"linear-gradient(90deg, purple, mediumslateblue)", display:"flex", justifyContent:"center", alignItems:"center", color:"white", flexFlow:"column"}}>
            <h3>Welcome to</h3>
            <div style={{display:"flex", alignItems:"center", justifyContent:'center', border:""}}>
                <img src="vending.png"/>
                <h1 style={{fontSize:"3rem"}}>SnackCore</h1>
            </div>
            <p style={{fontSize:"0.8rem"}}>Bringing your favorite snacks to your doorstep🎊</p>

            <br/>
            <br/>
            <Link to="/home">
            <button>Get Started <ChevronRight width="1rem"/></button>
            </Link>
            
        </div>
    )
}