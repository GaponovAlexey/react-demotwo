import React, { useEffect, useRef } from 'react'

export const usePrevius = () => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [])
  return (
    <div>
    </div>
  )
}
