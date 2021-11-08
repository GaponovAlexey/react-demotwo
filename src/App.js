import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const prevCount = usePrevius(count)
  
  return (
    <div>
      <button>update</button>
      <h2>Current: {count}</h2>
      <h2>Previus: {prevCount}</h2>
    </div>
  )
}

export default App
