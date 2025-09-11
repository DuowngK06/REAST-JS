import React from 'react'
import { useParams } from 'react-router-dom'
export default function Stunden() {
  const name = useParams();
    
  return (
    <div>
    <p>name:{name.name}</p>
    </div>
  )
}
