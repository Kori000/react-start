import React from 'react'
import { useParams } from 'react-router-dom';


export default function Detail () {
  const { id, title, value } = useParams()

  console.log()
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{value}</li>
    </ul>
  )
}
