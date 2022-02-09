import React, { useState } from "react"

function NewPlantForm({ addNewPlant }) {
  const [nameInput, setNameInput] = useState("")
  const [imageInput, setImageInput] = useState("")
  const [priceInput, setPriceInput] = useState("")
  const newPlant = {
    name: nameInput,
    image: imageInput,
    price: priceInput,
  }

  function handleSubmit(e) {
    e.preventDefault()
    addNewPlant(newPlant)

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={(e) => setImageInput(e.target.value)}
          value={imageInput}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={(e) => setPriceInput(e.target.value)}
          value={priceInput}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
