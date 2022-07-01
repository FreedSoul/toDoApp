import React, { Children, useState, useEffect } from "react"
import { MdOutlineDeleteForever } from "react-icons/md"
import { BsArrowRightSquare } from "react-icons/bs"
import NewTask from "./NewTask"

const Atask = (props) => {
  const [tasklist, settaskList] = useState([])
  const [task, setTask] = useState("")
  // const taskList = ['taskita','megatask','task','mm']

  const handleDelete = (id) => {
    settaskList([...tasklist].filter((task) => task.id !== id))
  }

  const list = tasklist.map((task) => {
    return (
      <NewTask
        handleDelete={handleDelete}
        tasklist={tasklist}
        key={task.id}
        id={task.id}
      >
        {task.text}
      </NewTask>
    )
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.value != "") {
      const newtask = {
        id: new Date().getTime(),
        text: task,
        completed: false,
      }
      settaskList([...tasklist, newtask])
      setTask("")
    }
  }

  return (
    <div>
      <div className="flex justify-center my-2">
        <form onSubmit={handleSubmit}>
          <input
            className="bg-secondary rounded-lg mx-3 px-1 py-3 placeholder:text-green-400 font-bold text-green-400"
            type="text"
            name="text"
            value={task}
            placeholder="add a task..."
            onChange={(event) => setTask(event.target.value)}
          />
          <button className="px-6 py-2 rounded bg-secondary hover:bg-green-400 text-white">
            add
          </button>
        </form>
      </div>
      {/* --------------------------componente lista--------------------------------------------------*/}
      <div className="flex-col">{list}</div>
    </div>
  )
}
export default Atask
