import { describe, expect, it } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
// import "@testing-library/jest-dom"
import Atask from "./Atask"

describe("un test", () => {
  it("deberia mostrar el boton e input para insertar tarea", () => {
    render(<Atask />)
    expect(screen.getByRole("button", { name: "add" })).toBeInTheDocument()
    expect(screen.getByRole("textbox", { name: "" })).toBeInTheDocument()
  })

  it("no deberia insertar tarea nueva si el input esta vacio", () => {
    render(<Atask />)
    const addButton = screen.getByRole("button", { name: "add" })
    const newtaskInput = screen.getByRole("textbox", { name: "" })
    expect(addButton).toBeInTheDocument()
    expect(newtaskInput).toBeInTheDocument()
    fireEvent.change(newtaskInput, { target: { value: "" } })
    fireEvent.click(addButton)

    expect(screen.queryByRole("heading", { name: "" })).not.toBeInTheDocument()
  })
})
