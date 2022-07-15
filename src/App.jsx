import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { FcTodoList } from "react-icons/fc"
import Atask from "./components/Atask"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="bg-slate-800 ">
        <div className="flex justify-center w-500 bg-gray-900">
          <h1 className="inline-flex font-bold text-4xl my-3 text-green-400">
            To Do List 
          <FcTodoList className="mx-3"/>
          </h1>
        </div>
        <div className="flex min-h-fit justify-center bg-gray-900">
          <div className="overflow-x-auto w-2/3 px-8 h-screen bg-slate-500 rounded-lg">
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
