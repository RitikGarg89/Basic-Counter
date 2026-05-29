import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Count is {count}</h1>
        </div>
        <button
          type="button"
          className="Increment"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>
        <button
          type="button"
          className="Decrement"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrement
        </button>
        <button
          type="button"
          className="Reset"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </section>
    </>
  )
}

export default App
