import React, { useState } from "react"
import NewTask from "./NewTask"


const Atask = () => {
  const [taskList, settaskList] = useState([])
  const [task, setTask] = useState("")

  const handleDelete = (id) => {
    settaskList([...taskList].filter((task) => task.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (task !== "") {
      const newtask = {
        id: new Date().getTime(),
        text: task,
        completed: false,
      }
      settaskList([...taskList, newtask])
    }

    setTask("")
  }

  const list = taskList.map((task) => {
    return (
      <NewTask
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
        tasklist={taskList}
        settaskList={settaskList}
        key={task.id}
        id={task.id}
      >
        {task.text}
      </NewTask>
    )
  })

  

  return (
    <div className="">
      <div className="flex justify-center my-2">
        <form onSubmit={handleSubmit}>
          <input
            className={`bg-secondary rounded-lg mx-3 px-6 py-3 placeholder:text-green-400 font-bold text-green-400`}
            type="text"
            name="new-task"
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
