import React, { useState } from "react"
import { MdOutlineDeleteForever } from "react-icons/md"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="text-6xl text-red-600">{count}</div>
        
        <button
          className="px-6 py-2 rounded hover:bg-green-600 text-white btn btn-primary"
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          back to task list 
          <MdOutlineDeleteForever />
          {/* count+ */}
        </button>
      </div>
    </div>
  )
}
export default Counter
