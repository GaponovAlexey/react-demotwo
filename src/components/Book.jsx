import React, { useCallback, useState } from 'react'
import { Books } from './Books'

export const Book = React.memo(({ id, title, removeTodo, count2, count1 }) => {
  console.log('render', title)
  return (
    <div onClick={() => removeTodo(id)}>
      {title}
      <h3>
        {count2}
        {count1}
      </h3>
    </div>
  )
})

export const DealCounter = () => {
  const [count1, setCount1] = useState(0)
  const increment1 = useCallback(() => setCount1((c) => c + 1),[])

  const [count2, setCount2] = useState(0)
  const increment2 = useCallback(() => setCount2((c) => c + 1),[])

  return (
    <>
      <Books count1={count1} increment1={increment1} />
      <Books count2={count2} increment2={increment2} />
    </>
  )
}
