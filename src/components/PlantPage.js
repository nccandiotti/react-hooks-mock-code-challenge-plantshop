import React, { useState, useEffect } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plantsArray, setPlantsArray] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlantsArray)
  }, [])

  function addNewPlant(newPlantObj) {
    setPlantsArray([...plantsArray, newPlantObj])
  }

  const filteredPlantList = plantsArray.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  function handleSearchQuery(e) {
    setSearchQuery(e.target.value)
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search searchQuery={searchQuery} handleSearchQuery={handleSearchQuery} />
      <PlantList plantsArray={filteredPlantList} />
    </main>
  )
}

export default PlantPage
