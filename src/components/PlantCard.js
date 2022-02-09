import React, { useState } from "react"

function PlantCard({ name, image, price }) {
  const [inStock, setInStock] = useState(true)

  const changeStock = () => {
    setInStock((prevState) => !prevState)
  }
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={changeStock} className="primary">
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  )
}

export default PlantCard
