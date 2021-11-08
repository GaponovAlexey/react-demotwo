import { createContext, useState } from 'react'

export const TestContext = createContext()

export const Context = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'js' },
    // { id: 2, title: 'node js' },
    // { id: 3, title: 'Go' },
  ])

  const removeTodo = (id) => {
    setBooks(books.filter((b) => b.id !== id))
  }

  const value = {
    books,
    removeTodo,
  }
  return <TestContext.Provider value={value}>{children}</TestContext.Provider>
}
