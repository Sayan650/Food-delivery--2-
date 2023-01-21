import React from 'react'
import Meal from './Meal'

export default function MealList () {
    const nutrients = mealData.nutrients;
  return (
    <main>
        <section className="nutrients">
            <h1>Macros</h1>
            <ul>
                <li>Calories: {nutrients.calories.toFixed(0)}</li>
                <li>carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                <li>Proteins: {nutrients.proteins.toFixed(0)}</li>
                <li>Fat: {nutrients.fat.toFixed(0)}</li> 
            </ul>
        </section>
    </main>
  )
}
