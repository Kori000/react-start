import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';


export default function Home () {

  const [sum, setSum] = React.useState(0)

  function changeSumToTwo () {
    setSum(state => state = 2)
  }



  return (
    <>

      {
        sum === 2 ?
          <Navigate to="/about" ></Navigate> :
          <h1>当前的 Sum 值为 {sum}</h1>
      }
      <button onClick={changeSumToTwo} >把 Sum 变成 2</button>
    </>
  )
}
