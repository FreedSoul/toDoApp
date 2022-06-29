import React, { Children, useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex h-screen">
      <div className="flex flex-col">
        <input type="checkbox" />
        <h2>{/* {Children} */}</h2>
      </div>
      <div className="m-auto">
        <div className="text-6xl text-red-500">{count}</div>
        <button
          className="px-6 py-2 rounded text-white btn btn-primary"
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