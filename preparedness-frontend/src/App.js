import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [input, setInput] = useState("")
  const [showModal, setShowModal] = useState(false)

  const handleButtonClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleReset = () => {
    setInput("")
  }

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <Label className="label" for="name">
          Enter your name
        </Label>
        <div className="input">
          <Input
            className="input-field"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="buttons">
          <Button className="button" onClick={handleButtonClick}>
            Click Me
          </Button>
          <Button className="button" onClick={handleReset}>
            Reset
          </Button>
        </div>
        <ModalComponent
          isOpen={showModal}
          toggle={handleCloseModal}
          input={input}
        />
      </div>
    </div>
  )
}

export default App
