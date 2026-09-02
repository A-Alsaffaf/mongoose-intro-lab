// importing packages and models
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const Recipe = require('./models/Recipe')
const connectToDB = require('./db')
const {createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe} = require('./recipeUtils')


// variables & constants
const newRecipe = {
name: "Um Ali",
instructions: "bake at 180C",
prepTime: 120,
difficulty: "Medium"
}

const {name, instructions} = newRecipe

let id = '6a985787d529eeab8958bdf2'

const newRecipeData = {
name: "Charcoal Cake",
instructions: "bake at 280C",
prepTime: 10,
difficulty: "Easy"
}

// run the exported functions 

connectToDB() // connect to database

createRecipe(newRecipe)

getAllRecipes()

getRecipeById(id)

updateRecipe(id, newRecipeData)

deleteRecipe(id)
