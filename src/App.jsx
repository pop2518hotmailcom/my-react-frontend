import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function test() {
    return(<h3>Hello World</h3>)
  }

  return (
    <>
      {test()}
    </>
  )
}

export default App
