import React, { useState } from "react"
import { MdOutlineDeleteForever } from "react-icons/md"
import { BiEdit } from "react-icons/bi"
import { FcCancel, FcCheckmark } from "react-icons/fc"

const NewTask = (props) => {
  // const [renderedTask, setrenderedTask] = useState(0)
  // const classCheckTrue = 
  const [checked, setchecked] = useState(false)
  const [edit, setedit] = useState(false)
  const [updatetask, setupdatetask] = useState("")

  const handleUpdate = (id) => {
    const aux = [...props.tasklist].filter((task) => (task.id === id))
    aux[0].text = updatetask
    console.log(aux[0])
    props.settaskList([...props.tasklist])
    setupdatetask("")
  }

  return (
    <>
      <div
        className={
          "m-auto flex max-w-lg max-h-lg justify-between rounded text-white py-2 my-2 " +
          (checked ? "bg-slate-800" : "bg-yellow-500")
        }
      >
        {!edit ? (
          <>
            <input
              type="checkbox"
              className="mx-2 my-2"
              onChange={() => {
                setchecked(!checked)
              }}
            />
            <h2 className={checked ? "line-through" : "none"}>
              {props.children}
            </h2>
            <div className="">
              <button
                className="px-3 py-2 rounded bg-green-50 hover:bg-green-400 text-red-700"
                type="button"
                aria-label="delete"
                onClick={() => {
                  props.handleDelete(props.id)
                }}
              >
                <MdOutlineDeleteForever />
              </button>
              <button
                className="mx-1 px-3 py-2 rounded bg-slate-900 hover:bg-green-400 text-lime-500"
                type="button"
                aria-label="edit"
                onClick={() => {
                  setedit(!edit)
                  // props.handleUpdate(props.id)
                }}
              >
                <BiEdit />
              </button>
            </div>
          </>
        ) : (
          <div className="flex ">
            {/* <form onSubmit={} className="flex justify-between"> */}
            <input
              className={`bg-secondary rounded-lg mx-3 px-6 py-3 placeholder:text-green-400 font-bold text-green-400`}
              aria-label="edittask"
              value={updatetask}
              onChange={(event) => setupdatetask(event.target.value)}
            />
            <button
              className="mx-1 px-3 py-2 rounded bg-green-50 hover:bg-green-400 text-lime-500"
              type="button"
              aria-label="check"
              onClick={() => {
                handleUpdate(props.id)
                setedit(!edit)
              }}
            >
              <FcCheckmark />
            </button>
            {/* </form> */}
            <button
              className="px-3 py-2 rounded bg-gray-900 hover:bg-green-400 text-lime-500"
              type="button"
              aria-label="cancel"
              onClick={() => {
                setedit(!edit)
                // props.handleUpdate(props.id)
              }}
            >
              <FcCancel />
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default NewTask