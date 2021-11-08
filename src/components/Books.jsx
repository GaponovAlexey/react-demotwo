import React, { useContext, useState } from 'react'
import { TestContext } from '../context/Context'
import { Book } from './Book'

export const Books = ({count2, count1, increment1, increment2}) => {
  const { books, removeTodo } = useContext(TestContext)

  return (
    <div>
      {books.map((b) => (
        <Book key={b.id} {...b} removeTodo={removeTodo} count2={count2} count1={count1} />
      ))}
      <div>
        <button onClick={increment2} >+</button>
        <button onClick={increment1} >-</button>
      </div>
    </div>
  )
}

