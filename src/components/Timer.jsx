import React, { useEffect, useRef, useState } from 'react'

const send = () => {
  const useCount = localStorage.getItem('count')
  return useCount ? +useCount : 0
}

export const Timer = () => {
  const [count, setCount] = useState(send())
  const [isCount, setIsCount] = useState(false)

  const timerIdRef = useRef(null)

  const handleStart = () => {
    setIsCount(true)
  }
  const handleStop = () => {
    setIsCount(false)
  }
  const handlerReset = () => {
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
      }, 2)
    }
    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current)
      timerIdRef.current = null
    }
  }, [isCount])

  return (
    <div style={{ backgroundColor: '#000' }}>
      <h1>React timer</h1>
      <h3>{count}</h3>
      {!isCount ? (
        <button onClick={handleStart}>start</button>
      ) : (
        <button onClick={handleStop}>stop</button>
      )}
      <button onClick={handlerReset}>Reset</button>
    </div>
  )
}
