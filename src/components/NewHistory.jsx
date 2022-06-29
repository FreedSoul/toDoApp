import React, { Children, useState } from "react"
import { MdOutlineDeleteForever } from "react-icons/md"
import { BsArrowRightSquare } from "react-icons/bs"

const NewHistory = () => {
  <div className="m-auto flex max-w-lg max-h-lg justify-around rounded bg-green-300 text-white py-2 my-2">
    <input type="checkbox" className="mx-2 my-2" />
    <h2> soy una megaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatask {/* {Children} */}</h2>
    <button
      className="px-3 py-2 rounded bg-secondary hover:bg-green-400 text-white"
      type="button"
      onClick={() => setCount((count) => count + 1)}
    >
      <BsArrowRightSquare />
    </button>
  </div>
}

export default NewHistory
