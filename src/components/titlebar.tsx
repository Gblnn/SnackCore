import { useState } from "react"


export default function TitleBar(){
    const [language, setLanguage] = useState(false)
    return(
        <div id="base-layer" style={{background:"linear-gradient(90deg, purple, mediumslateblue)", height:"5rem", display:"flex", alignItems:"center", boxShadow:"1px 1px 20px rgba(0 0 0/ 20%)"}}>

            <div id="primary-layer" style={{border:"", margin:"1.5rem", width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>

                <div id="title-layer" style={{display:"flex", border:"", gap:"0.5rem", alignItems:"center"}}>
                    <img alt="cake" style={{width:"3rem"}} id="logo" src="vending.png"/>
                    <h1 style={{userSelect:"none", color:"white"}}>SnackCore</h1>
                </div>

                <div id="options-layer" style={{display:"flex", border:""}}>
                    <button onClick={()=>{setLanguage(!language)}} style={{userSelect:"none"}}>{language?"ENG":"عربي"}</button>
                </div>
                
            </div>
        </div>
    )
}