import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plantsArray }) {
  const createPlantCard = plantsArray.map((plant) => (
    <PlantCard
      key={plant.id}
      id={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
    />
  ))
  return <ul className="cards">{createPlantCard}</ul>
}

export default PlantList
