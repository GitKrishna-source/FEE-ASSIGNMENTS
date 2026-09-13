import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="card">
        
        <h1 className="title">Counter App</h1>
        
        <h2 className="count">{count}</h2>

        <div className="buttons">
          
          <button 
            className="decrement"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>

          <button 
            className="reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button 
            className="increment"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>

        </div>

      </div>
    </div>
  )
}

export default App