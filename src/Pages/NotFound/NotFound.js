import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate();
  return (
    <div className='notFound'>
       <h1>Sorry.....Page Not Found</h1>
       <button onClick={()=>{
        navigate("/")
       }}>Go Back To Home</button>
    </div>
  )
}

export default NotFound