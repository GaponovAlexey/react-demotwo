import React, { useEffect, useReducer, useRef, useState } from 'react'

const setDefaultValue = () => {
  const refStatus = localStorage.getItem('count')
  return refStatus ? +refStatus : ''
}

const countReducer = (state, { type }) => {
  if (type === 'START') {
    return {
      ...state,
      isCounting: true,
    }
  }
  if (type === 'STOP') {
    return {
      ...state,
      isCounting: false,
    }
  }
  if (type === 'RESET') {
    return {
      count: 0,
      isCounting: false,
    }
  }
  if (type === 'TICK') {
    return {
      ...state,
      count: state.count + 1,
    }
  }
  return state
}

export const Timer = () => {
  const [{ count, isCounting }, dispatch] = useReducer(countReducer, {
    count: setDefaultValue(),
    isCounting: false,
  })

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  useEffect(() => {
    let timerId = null
    if (isCounting) {
      timerId = setInterval(() => {
        dispatch({ type: 'TICK' })
      }, 50)
    }

    return () => {
      timerId = clearInterval(timerId)
      timerId = null
    }
  }, [isCounting])

  return (
    <div>
      <h1>my timer</h1>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={() => dispatch({ type: 'START' })}>Start</button>
      ) : (
        <button onClick={() => dispatch({ type: 'STOP' })}>stop</button>
      )}
      <button onClick={() => dispatch({ type: 'RESET' })}>rest</button>
    </div>
  )
}
