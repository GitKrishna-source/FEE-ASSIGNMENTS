import { useEffect, useState } from 'react'

import './App.css'

import Counter from './components/counter'
import Display from './components/display'

const App = () => {
  const [count, setCount] = useState(0)
useEffect(()=>{
  console.log("useEFFECT RUNS");
  
},[]) 

  return (
    <div>
      <Counter count={count} onIncrement={() => setCount((currentCount) => currentCount + 1)} />
      <Display data={count} />
    </div>
  )
}

export default App