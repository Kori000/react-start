import React from 'react'
import { root } from '../../index';



function Demo () {

  const [count, setState] = React.useState(0)

  React.useEffect(() => {
    let a = 1
    let timer = setInterval(() => {
      a += 1
      add()
      console.log(a)
    }, 1000)

    // retun 的内容就是 卸载前 生命周期钩子
    return () => {
      clearInterval(timer)
    }
  }, [])
  /* 
    第二个参数不写: 监听所有人
    写[]: 只调用一次
    写[count]: 表示监听 count
  */




  function add () {
    // setState(count + 1)  // 第一种写法
    setState(count => count + 1) // 第二种写法

  }

  function unMounted () {
    root.unmount()
  }

  const inpRef = React.useRef()


  function show () {
    alert(inpRef.current.value)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add} >+1</button>
      <button onClick={unMounted} >卸载</button>

      <input type="text" ref={inpRef} />
      <button onClick={show} >展示内容</button>

    </div>
  )
}

export default Demo
