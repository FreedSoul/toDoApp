import React, { Children, useState } from "react"
import { MdOutlineDeleteForever } from "react-icons/md"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex h-screen">
      <div className="flex flex-col">
        <input type="checkbox" />
        <h2>
          {/* {Children} */}
          hola <MdOutlineDeleteForever />
        </h2>
      </div>
      <div className="m-auto">
        <div className="text-6xl text-red-500">{count}</div>
        <button
          className="px-6 py-2 rounded bg-blue-700 hover:bg-green-600 text-white"
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count+
        </button>
      </div>
    </div>
  )
}
export default Counter
