import { useState } from 'react'

const Counter = ({ startingValue }) => {
  const [count, setCount] = useState(startingValue)
  const add = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>add</button>
    </>
  )
}

export default Counter
