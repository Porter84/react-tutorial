import React from 'react'
import './Card.css'

export const Card = ({name, age}) => {
  return (
    <div className="card">
      <div>
        <span>Name:</span><span>{name}</span>
      </div>
      <div>
        <span>Age:</span><span>{age}</span>
      </div>
    </div>
  )
}
