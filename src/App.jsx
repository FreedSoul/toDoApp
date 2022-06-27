import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from "./components/Counter"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="bg-slate-500 bg-auto ">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>

        <div className="flex justify-center w-600 bg-gray-400">
          <h1 className="font-bold text-2xl text-green-900 ">
            React and Tailwind with Vitejs!
          </h1>
        </div>
        <Counter />
      </div>
    </div>
  )
}

export default App

