import React, { useCallback, useEffect, useState } from 'react'
import MemoChildCompo from './MemoHooks/MemoChildCompo'

const App = () => {
    const [random,setRandom]=useState(Math.random())
    const [countar,setCountar]=useState(2)

    useEffect(()=>{
          console.log("call when random state is updated")
    },[random])


useEffect(()=>{
  setInterval(()=>{
      setRandom(Math.random().toFixed(2))
  },2000)
},[])


const handle=useCallback(()=>{
  setCountar(countar+1)
},[countar])

  return (
    <div>
        <h1>MY RANDOM NO IS :- {random} </h1>

        <MemoChildCompo  value={countar}  handlechange={handle} />
      
    </div>
  )
}

export default App
