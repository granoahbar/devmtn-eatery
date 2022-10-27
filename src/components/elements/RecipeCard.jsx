import React from 'react'
import styles from "./RecipeCard.module.css"
import { Navigate, useNavigate } from 'react-router-dom'

export default function RecipeCard({recipe}) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    console.log(recipe)
  return (   
    <div className={styles.RecipeCard}>
        <img className={styles.RecipePhoto} src={recipe.image_url} alt="" 
        />
        <h2>
            {recipe.recipe_name}
        </h2>
        <button className={styles.RecipeButton} onClick={handleClick}>
            See More
        </button>
    </div>
  )
}



