import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Counter from "./components/Counter"
import Atask from "./components/Atask"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="bg-slate-800">
        <div className="flex justify-center w-500 bg-gray-900">
          <h1 className="font-bold text-4xl text-green-900">list of Tasks</h1>
        </div>
        <div className="flex justify-center bg-slate-100">
          <div className="w-1/2 bg-slate-500">
            <div className="flex justify-center my-2">
              <input
                className=" bg-slate-400 rounded-lg mx-3 px-1 py-3 placeholder:text-green-700 font-bold"
                placeholder="add a task..."
              />
              <button
                className="px-6 py-2 rounded bg-blue-700 hover:bg-green-600 text-white"
                type="button"
                onClick={() => setCount((count) => count + 1)}
              >
                add
              </button>
            </div>
            <Atask />
            {/* <ToComplete/> */}
          </div>
          <div className="w-1/2 bg-slate-700">
            <h1 className="font-bold text-3xl text-white-900">
              Tasks History
            </h1>
            <Counter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
