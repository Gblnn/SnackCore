import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"


export default function LandingPage(){
    return(
        <>
        <div style={{height:"100svh", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", color:"white", flexFlow:"column", background:"url('https://i.pinimg.com/originals/7d/3d/8d/7d3d8df493e29dacfc6ea16ece4bf3de.png')"}}>
            <h3>Welcome to</h3>
            <div style={{display:"flex", alignItems:"center", justifyContent:'center', border:""}}>
                <img src="vending.png"/>
                <h1 style={{fontSize:"3rem"}}>SnackCore</h1>
            </div>
            <p style={{fontSize:"1rem"}}>Bringing your favorite snacks to you.</p>

            <br/>
            <br/>
            
            
            
            <Link to="/0e/home" style={{textDecoration:"none", width:"fit-content", position:"absolute", bottom:0, margin:"6rem"}}>
            <button style={{background:"white", color:"black"}}>Get Started <ChevronRight width="1rem"/></button>
        </Link>    
        </div>
        
        </>
        
    )
}