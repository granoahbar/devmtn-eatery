import React, { useState, useEffect } from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from '../elements/RecipeCard'
import { BiSearchAlt2 } from 'react-icons/bi'
import styles from "../elements/RecipeCard.module.css"

const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])
  const [searchInput, setSearchInput]= useState("")

  const getRecipes = () => {
    axios
        .get("https://recipes.devmountain.com/recipes")
        .then((res) => {
            setRecipes(res.data)
            console.log(res.data)
        })
}

useEffect(() => {
    getRecipes()
},[])
 console.log(searchInput)

const recipeDisplay = recipes.filter(recipe => {
  let title = recipe.recipe_name.toLowerCase()
  let searchTerm = searchInput.toLowerCase()

  return (
    title.includes(searchTerm)
  )
}).map(recipe => {
  return <RecipeCard recipe={recipe}/>
})

  return (
    <div>
      <AdBanner />
      <span className={styles.search_bar}>
        <BiSearchAlt2 size="1.5em" color="#DA7635" />
        <input placeholder="Search for a Recipe"  type="text" onChange={(e) => {setSearchInput(e.target.value)}}/>
      </span>
      <span className={styles.RecipeDisplay}>
      {recipeDisplay}
      </span>
    </div>
  )
}

export default HomeScreen