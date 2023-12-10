import React from 'react'

const LogicalCompo = (props) => {
    let res=props.val
  return (
    <div>
      <h1>IN MY SHOWROOM</h1>
      {
        res.length>2  &&  <h2>I HAVE  {res[2]}  CAR </h2>
      }
    </div>
  )
}

export default LogicalCompo
