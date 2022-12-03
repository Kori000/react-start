import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';


export default function Message () {

  const [list, setList] = React.useState(
    [
      { id: 1, title: '消息 1', vlaue: '昨天' },
      { id: 2, title: '消息 2', vlaue: '今天' },
      { id: 3, title: '消息 3', vlaue: '明天' },
    ]
  )



  return (
    <>
      <ul>
        {
          list.map(i => {
            return (
              <li key={i.id}>
                <NavLink to={`detail/${i.id}/${i.title}/${i.vlaue}/`} >
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
