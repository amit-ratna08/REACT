import React, { useState } from "react";

const FunCompo=()=>{
const [countar,setCountar]=useState(1)

    return(
        <>
        <h1>HELLO FUNCTIONAL COMPONENT  {countar}   </h1>
        <button onClick={()=>setCountar(countar+1)}>increment</button>
            
        </>
    )
}
export default FunCompo
