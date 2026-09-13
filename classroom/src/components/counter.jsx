const Counter = ({ count, onIncrement }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>+1</button>
    </div>
  )
}

export default Counter