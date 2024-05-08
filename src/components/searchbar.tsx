import { SearchIcon } from "lucide-react";

interface Props{
    placeholderText:string
}

export default function SearchBar(props:Props){
    return(
        <div style={{background:"rgba(250 250 250/ 75%)",backdropFilter:"blur(16px)", height:"3rem", display:"flex", margin:"1.5rem", borderRadius:"1rem", boxShadow:"1px 1px 10px rgba(0 0 0/ 25%)", alignItems:"center", gap:"1rem"}}>
        
            <SearchIcon style={{border:"", marginLeft:"1rem"}} color="purple"/>
            <input placeholder={props.placeholderText}/>
            
        </div>
    )
}