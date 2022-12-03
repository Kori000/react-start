import React from 'react'

export default function Demo () {

  const [count, setState] = React.useState(0)

  function add () {
    // setState(count + 1)  // 第一种写法
    setState(count => count + 1) // 第二种写法

  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add} >+1</button>
    </div>
  )
}
