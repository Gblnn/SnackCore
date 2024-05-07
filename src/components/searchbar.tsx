import { SearchIcon } from "lucide-react";


export default function SearchBar(){
    return(
        <div style={{background:"rgb(250 250 250)", height:"3rem", display:"flex", margin:"1.5rem", borderRadius:"1rem", boxShadow:"1px 1px 10px rgba(0 0 0/ 25%)", alignItems:"center", gap:"1rem"}}>
        
            <SearchIcon style={{border:"", marginLeft:"1rem"}} color="purple"/>
            <input placeholder="Search your favorite snacks..."/>
            
        </div>
    )
}