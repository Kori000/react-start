import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';


export default function Detail () {
  const [search, setSearch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const kx = search.get('kx')
  return (
    <ul>
      <button onClick={() => { setSearch('id=1&title=5&kx=999') }} >更新搜索栏参数</button>
      <li>{id}</li>
      <li>{title}</li>
      <li>{kx}</li>
    </ul>
  )
}
