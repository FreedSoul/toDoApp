import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Counter from "./components/Counter"
import Atask from "./components/Atask"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="bg-slate-800 ">
        <div className="flex justify-center w-500 bg-gray-900">
          <h1 className="font-bold text-4xl my-3 text-green-400">
            list of Tasks
          </h1>
        </div>
        <div className="flex min-h-fit justify-center bg-orange-600">
          <div className="w-1/2 h-screen bg-slate-500">
            <Atask />
          </div>
        </div>
        {/* <div className="w-1/2 bg-slate-700">
            <h1 className="font-bold text-3xl text-white-900">
              Tasks History
            </h1>
            <Counter />
          </div> */}
      </div>
    </div>
  )
}

export default App
