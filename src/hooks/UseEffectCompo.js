import React, {  useState } from 'react'
import ChildCompo from './ChildCompo'

const UseEffectCompo=()=>{
    // const [count,setCount]=useState(1)
    // const [countar,setCountar]=useState(10)
    const [toggal,setToggal]=useState(true)


    // useEffect(()=>{
    //     console.log("call only mounting phase")
    // },[])  // mounting

    // useEffect(()=>{
    //     console.log("call when count state updat")
    // },[count,countar])  // updating


    return(
        <>
        {/* <h1>MY COUNT VALUE IS :- {count} </h1>
        <button onClick={()=>setCount(count+1)}>increment</button>


        <h1>MY COUNTAR VALUE IS :- {countar} </h1>
        <button onClick={()=>setCountar(countar+2)}>increment by 2</button> */}


{
    toggal ? <ChildCompo /> :" "
}

<button onClick={()=>setToggal(!toggal)}>SHOW | HIDE</button>


        </>
    )
}
export default UseEffectCompo