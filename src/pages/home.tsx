import Categories from "@/components/categories";
import SearchBar from "@/components/searchbar";
import TitleBar from "@/components/titlebar";


export default function Home() {
    return(
        <>
        <TitleBar/>
        <SearchBar/>
        <div style={{margin:"1.5rem"}}>
            <Categories/>
        </div>
        <br/>
        
        </>
    )
}