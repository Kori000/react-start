import React from 'react'
import { useParams, useSearchParams, useLocation } from 'react-router-dom';


export default function Detail () {
  const { state: { id, title, kx } } = useLocation()

  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{kx}</li>
    </ul>
  )
}
