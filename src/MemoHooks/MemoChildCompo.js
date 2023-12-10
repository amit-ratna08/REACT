import React, { memo } from 'react'

const MemoChildCompo = (props) => {
  console.log("MEMO CHILD COMPO")
  return (
    <div>
      <h1> MY COUNTAR IS {props.value} </h1>
      <button onClick={props.handlechange}>increment</button>
    </div>
  )
}

export default memo(MemoChildCompo)
