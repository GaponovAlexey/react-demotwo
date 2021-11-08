import { DealCounter } from './components/Book'
import { MemCalBek } from './components/MemCalBek'
import { Context } from './context/Context'

function App() {
  return (
    <Context>
      <div>
        <DealCounter />
      </div>
    </Context>
  )
}

export default App
