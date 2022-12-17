import React from 'react'
import './Loading.css'

function Loading() {
  return (
    <div className='loading-container'>
      <h1 className="loading-text">
        Wait for a moment please
      </h1>
      <span className="loading-dot-1" />
      <span className="loading-dot-2" />
      <span className="loading-dot-3" />
    </div>
  )
}

export default Loading