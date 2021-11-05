import React, { useEffect, useRef, useState } from 'react'

const send = () => {
  const useCount = localStorage.getItem('count')
  return useCount ? +useCount : 0
}

export const MyTimer = () => {
  const [count, setCount] = useState(send())
  const [isCount, setIsCount] = useState(false)

  const timerIdRef = useRef(null)

  const handelStatrt = () => {
    setIsCount(true)
  }
  const handleStop = () => {
    setIsCount(false)
  }
  const handleReset = () => {
    setCount(0)
    setIsCount(false)
  }

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  useEffect(() => {
    if (isCount) {
      timerIdRef.current = setInterval(() => {
        setCount((e) => e + 1)
      }, 10)
    }
    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current)
      timerIdRef.current = null
    }
  }, [isCount])

  return (
    <div>
      <h1>my Timer</h1>
      <h3>{count}</h3>
      {!isCount ? (
        <button onClick={handelStatrt}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
