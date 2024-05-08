
interface Props{
    onLanguage:any
    title:string
    buttonText:string
}

export default function TitleBar(props:Props){

    
    return(
        <div id="base-layer" style={{background:"linear-gradient(90deg, brown, purple )", height:"5rem", display:"flex", alignItems:"center", boxShadow:"1px 1px 20px rgba(0 0 0/ 50%)", position:"fixed", width:"100%", top:0, zIndex:1, borderBottomLeftRadius:"", borderBottomRightRadius:"" }}>

            <div id="primary-layer" style={{border:"", margin:"1.5rem", width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>

                <div id="title-layer" style={{display:"flex", border:"", gap:"0.5rem", alignItems:"center"}}>
                    <img alt="cake" style={{width:"3rem"}} id="logo" src="/vending.png"/>
                    <h1 style={{userSelect:"none", color:"white"}}>{props.title}</h1>
                </div>

                {/* <div id="options-layer" style={{display:"flex", border:""}}>
                    <button onClick={props.onLanguage} style={{userSelect:"none"}}>{props.buttonText}</button>
                </div> */}
                
            </div>
        </div>
    )
}