import React, { children, useState } from "react"
import { MdOutlineDeleteForever } from "react-icons/md"
import { BsArrowRightSquare } from "react-icons/bs"

const NewTask = (props) => {
  // const [renderedTask, setrenderedTask] = useState(0)
  // const classCheckTrue = 
  return (
  <div className="m-auto flex max-w-lg max-h-lg justify-around rounded bg-yellow-500 text-white py-2 my-2">
    <input type="checkbox" className="mx-2 my-2" onChange={()=>{}}/>
    <h2>{props.children}</h2>
    <button
      className="px-3 py-2 rounded bg-secondary hover:bg-green-400 text-white"
      type="button"
      onClick={() => {props.handleDelete(props.id)}}
    >
      <MdOutlineDeleteForever />
    </button>
  </div>
  )
}

export default NewTask