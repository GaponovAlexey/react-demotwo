import React, { useRef, useEffect, useState } from 'react'

export const Ref = () => {
  //const inputEL = useRef(null)
  const numRef = useRef(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(numRef.current)
  }, [])

  const handelclicl = () => {
    numRef.current += 1
    setCount((prev) => prev + 1)
  }
  const counters = () => {}
  return (
    <div>
      {/*<input plachelder='name' ref={ inputEL } />*/}
      <button onClick={handelclicl}>{numRef.current}</button>
      <button onClick={handelclicl}>{count}</button>
    </div>
  )
}
