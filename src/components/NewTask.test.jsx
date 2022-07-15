import { describe, expect, it } from "vitest"
import NewTask from "./NewTask"
import Atask from "./ATask"
import { render, screen, fireEvent } from "@testing-library/react"

describe("testeando el grupo de tareas agregadas", () => {
  it("deberia mostrar una nueva tarea despues de introducir texto y presionar el boton [add]", () => {
    render(<Atask />)
    const inputElement = screen.getByRole("textbox", { name: "" })
    const buttonElement = screen.getByRole("button", { name: "add" })
    fireEvent.change(inputElement, { target: { value: "hacer de comer" } })
    expect(inputElement.value).toBe("hacer de comer")
    fireEvent.click(buttonElement)
    const addedElement = screen.getByText(/hacer de comer/i)
    expect(addedElement).toBeInTheDocument()
  })

  it("deberia mostrar el boton delete en cada nueva tarea", () => {
    render(<Atask />)
    const inputElement = screen.getByRole("textbox", { name: "" })
    const buttonAdd = screen.getByRole("button", { name: "add" })
    fireEvent.change(inputElement, { target: { value: "limpiar el pc" } })
    expect(inputElement.value).toBe("limpiar el pc")
    fireEvent.click(buttonAdd)
    const addedElement = screen.getByText(/limpiar el pc/i)
    expect(addedElement).toBeInTheDocument()

    const deleteButton = screen.getByRole("button", { name: /delete/i })
    expect(deleteButton).toBeInTheDocument()
  })

  it("deberia mostrar el boton edit en cada nueva tarea", () => {
    render(<Atask />)
    const inputElement = screen.getByRole("textbox", { name: "" })
    const buttonAdd = screen.getByRole("button", { name: "add" })
    fireEvent.change(inputElement, { target: { value: "limpiar la casa" } })
    expect(inputElement.value).toBe("limpiar la casa")
    fireEvent.click(buttonAdd)
    const addedElement = screen.getByText(/limpiar la casa/i)
    expect(addedElement).toBeInTheDocument()

    const editButton = screen.getByRole("button", { name: /edit/i })
    expect(editButton).toBeInTheDocument()
  })

  it("al presionar el boton edit, deberia mostrar un nuevo input, con el boton guardar y cancelar", () => {
    render(<Atask />)
    const inputElement = screen.getByRole("textbox", { name: "" })
    const buttonAdd = screen.getByRole("button", { name: "add" })
    fireEvent.change(inputElement, { target: { value: "limpiar la casa" } })
    expect(inputElement.value).toBe("limpiar la casa")
    fireEvent.click(buttonAdd)
    const addedElement = screen.getByText(/limpiar la casa/i)
    expect(addedElement).toBeInTheDocument()

    const editButton = screen.getByRole("button", { name: "edit" })
    expect(editButton).toBeInTheDocument()

    fireEvent.click(editButton)
    const newInput = screen.getByRole("textbox", { name: "edittask" })
    const checkButton = screen.getByRole("button", { name: "check" })
    const cancelButton = screen.getByRole("button", { name: "cancel" })

    expect(newInput).toBeInTheDocument()
    expect(checkButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
  })
  it("al presionar el boton guardar[check], deberia mostrar cambiar el valor de la tarea por el que se puso en input", () => {
    render(<Atask />)
    const inputElement = screen.getByRole("textbox", { name: "" })
    const buttonAdd = screen.getByRole("button", { name: "add" })
    fireEvent.change(inputElement, { target: { value: "limpiar la casa" } })
    expect(inputElement.value).toBe("limpiar la casa")
    fireEvent.click(buttonAdd)
    const addedElement = screen.getByText(/limpiar la casa/i)
    expect(addedElement).toBeInTheDocument()

    const editButton = screen.getByRole("button", { name: "edit" })
    expect(editButton).toBeInTheDocument()

    fireEvent.click(editButton)
    const newInput = screen.getByRole("textbox", { name: "edittask" })
    const checkButton = screen.getByRole("button", { name: "check" })

    expect(newInput).toBeInTheDocument()
    expect(checkButton).toBeInTheDocument()

    fireEvent.change(newInput, { target: { value: "limpiar la cocina" } })
    fireEvent.click(checkButton)

    expect(screen.getByRole("heading", { name: "limpiar la cocina" }))
  })
  it("al presionar el boton cancelar, deberia mostrar la tarea sin cambios", () => {
    render(<Atask />)
    const inputElement = screen.getByRole("textbox", { name: "" })
    const buttonAdd = screen.getByRole("button", { name: "add" })
    fireEvent.change(inputElement, { target: { value: "limpiar la casa" } })
    expect(inputElement.value).toBe("limpiar la casa")
    fireEvent.click(buttonAdd)
    const addedElement = screen.getByText(/limpiar la casa/i)
    expect(addedElement).toBeInTheDocument()

    const editButton = screen.getByRole("button", { name: "edit" })
    expect(editButton).toBeInTheDocument()

    fireEvent.click(editButton)
    const newInput = screen.getByRole("textbox", { name: "edittask" })
    const cancelButton = screen.getByRole("button", { name: "cancel" })

    expect(newInput).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()

    fireEvent.change(newInput, { target: { value: "limpiar la cocina" } })
    fireEvent.click(cancelButton)

    expect(screen.getByRole("heading", { name: "limpiar la casa" }))
  })
})
