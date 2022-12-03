import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';


export default function Message () {

  const [list, setList] = React.useState(
    [
      { id: 1, title: '消息 1', value: '昨天' },
      { id: 2, title: '消息 2', value: '今天' },
      { id: 3, title: '消息 3', value: '明天' },
    ]
  )



  return (
    <>
      <ul>
        {
          list.map(i => {
            return (
              <li key={i.id}>
                <NavLink to={`detail?id=${i.id}&title=${i.title}&kx=${i.value}`} >
                  {i.title}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
      <Outlet />
    </>
  )
}
