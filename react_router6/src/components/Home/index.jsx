import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';


export default function Home () {

  return (
    <>
      <ul className="nav nav-tabs">
        <li>
          <NavLink className={({ isActive }) => {
            console.log(isActive)
            return isActive ? 'list-group-item active' : 'list-group-item'
          }} to="news" >News</NavLink>
        </li>
        <li>
          <NavLink className="list-group-item" to="message" >Message</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  )
}
