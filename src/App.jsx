import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpensiveComponent from './components/ExpensiveComponent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ExpensiveComponent />
        <button onClick={() => setCount((count) => count + 1)}>Re-render Parent </button>
        <p>Parent re-render count: {count}</p>
        </div>
    </>
  )
}

export default App
