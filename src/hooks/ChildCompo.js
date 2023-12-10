import React, { useEffect } from 'react'

const ChildCompo = () => {

    useEffect(()=>{
        console.log("WELCOME TO MY COMPONENT")

        return ()=>{
            console.log("BY BY I'M OUT")
        }

    })
    
  return (
    <div>
      <h1>CHILD COMPO</h1>
    </div>
  )
}

export default ChildCompo
