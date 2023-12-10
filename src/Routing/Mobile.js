import React from 'react'
import { useParams } from 'react-router-dom'

const Mobile = () => {
const {mobile}=useParams()

  return (
    <div>

        <h1>YOUR SEARCH IS  ...  {mobile} </h1>
      <div className="card" style={{width: "Name18rem;"}}>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">APPLE</li>
    <li className="list-group-item">REDMI</li>
    <li className="list-group-item">ONEPLUS</li>
  </ul>
  <div className="card-footer">
    Card footer
  </div>
</div>
    </div>
  )
}

export default Mobile
