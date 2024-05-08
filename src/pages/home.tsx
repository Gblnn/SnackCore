import Categories from "@/components/categories";
import SearchBar from "@/components/searchbar";
import TitleBar from "@/components/titlebar";
import { useState } from "react";


export default function Home() {
    const [language, setLanguage] = useState(false)

    return(
        <div className="bg" style={{background:"url('')"}}>
        <TitleBar onLanguage={()=>{setLanguage(!language)}} title={!language?"SnackCore":"سناككور"} buttonText={language?"ENG":"عربي"}/>
        <div style={{height:"5rem"}}></div>
        <SearchBar placeholderText={!language?"Search your favorite snacks...":"...يبحث"}/>
        <div style={{margin:"1.75rem"}}>
            <Categories/>
        </div>
        <br/>
        <br/>
        </div>
    )
}