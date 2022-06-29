import React, { Children, useState } from "react"
import { MdOutlineDeleteForever } from "react-icons/md"
import { BsArrowRightSquare } from "react-icons/bs"
import NewTask from "./NewTask"

const Atask = () => {
  const [task , setTask] = useState('')
  const taskList = ['taskita','megatask','task']
  const list = taskList.map((task) => {
    return (
    <NewTask key={task}>{task}</NewTask>
    )})
  return (
    <div className=" ">
      <div className="flex justify-center my-2">
        <input
          className=" bg-secondary rounded-lg mx-3 px-1 py-3 placeholder:text-green-400 font-bold text-green-400"
          placeholder="add a task..."
        />
        <button
          className="px-6 py-2 rounded bg-secondary hover:bg-green-400 text-white"
          type="button"
          onClick={() =>{}}
        >
          add
        </button>
      </div>
      {/* <div className="flex"></div> ------componente lista--------------------------------------------------*/} 
      <div className="flex-col">
        {list}
      </div>
    </div>
  )
}
export default Atask