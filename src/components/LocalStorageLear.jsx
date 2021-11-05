import React from 'react'

export const LocalStorageLear = () => {
  const state = [
    { id: 1, name: 'Alexey' },
    { id: 2, name: 'Viktoria' },
  ]
  localStorage.setItem('state', JSON.stringify(state))
  const row = localStorage.getItem('state')
  const person = JSON.parse(row)
  return <div>start{person.map((e) => e.name)} </div>
}
