import { ChefHat, User } from "lucide-react";
import { Link } from "react-router-dom";

interface Props{
    className?:string
}

export default function Navbar(props:Props){
    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", height:"4rem", background:"rgb(250 250 250)", boxShadow:"1px 1px 20px rgba(0 0 0/ 50%)", position:"fixed", bottom:0, width:"100%"}} className={props.className}>
            <Link to="/0e/home" >
            <ChefHat className={location.pathname=="/0e/home"?"nav-active":"nav-inactive"}/>
            </Link>
            
            <Link to="/0e/profile" >
            <User className={location.pathname=="/0e/profile"?"nav-active":"nav-inactive"}/>
            </Link>
            
        </div>
    )
}