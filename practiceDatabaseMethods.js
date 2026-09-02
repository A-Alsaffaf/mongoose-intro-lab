// importing packages and models
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const Recipe = require('./models/Recipe')

// variables & constants
 const newRecipe = {
  name: "Um Ali",
  instructions: "bake at 180C",
  prepTime: 120,
  difficulty: "Medium"
 }

 const id = '6a9847c7d0eef31d63e37b92'


// functions
async function connectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.DBCONNECTION_URI) // <----- PUT YOUR DATABASE CONNECTION STRING HERE
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}

connectToDB() // connect to database


async function createRecipe(newRecipe) {
    try {
        const createdRecipe = await Recipe.create(newRecipe)
        console.log(createdRecipe);
    }
    catch(error) {
        console.log("Failed to create recipe.");
    }
}

// createRecipe(newRecipe)

async function getAllRecipes() {
    const allRecipes = await Recipe.find()
    console.log(allRecipes);

    allRecipes.forEach((recipe) => {
        console.log(`${recipe.name} is an ${recipe.difficulty} and takes ${recipe.prepTime} minutes to prepare`);
    })
}

// getAllRecipes()

async function getRecipeById(id) {
    try {
        const foundRecipe = await Recipe.findById(id)
        console.log(foundRecipe);
    }
    catch(error) {
        console.log("No recipe with this ID exists.");
    }
}

// getRecipeById(id)


