import React, { useState, useEffect } from 'react'

export const Clicker = () => {
  const [count, setCount] = useState(0)

  const incremet = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.log('helo clicker 1', count)
    return () => console.log('good buy 2', count)
  }, [count])

  return (
    <div>
      <button onClick={incremet}>+</button>
      <h1 style={{ display: 'inline-block', margin: '0 0.5rem' }}>{count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  )
}
