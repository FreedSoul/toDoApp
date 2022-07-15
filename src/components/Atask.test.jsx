import { describe, expect, it } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Atask from "./Atask"

describe("un test", () => {
  it("deberia mostrar el boton e input para insertar tarea", () => {
    render(<Atask />)
    expect(screen.getByRole("button", { name: "add" })).toBeInTheDocument()
    expect(screen.getByRole("textbox", { name: "" })).toBeInTheDocument()
  })
  
})
