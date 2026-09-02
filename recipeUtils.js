const Recipe = require('./models/Recipe')

async function createRecipe(newRecipe) {
    try {
        const createdRecipe = await Recipe.create(newRecipe)
        console.log(createdRecipe);
    }
    catch(error) {
        console.log("Failed to create recipe.", error);
    }
}


async function getAllRecipes() {
    try {
    const allRecipes = await Recipe.find()
    console.log(allRecipes);
    allRecipes.forEach((recipe) => {
        console.log(`${recipe.name} is an ${recipe.difficulty} and takes ${recipe.prepTime} minutes to prepare`);
    })
    }
    catch (error) {
        console.log('Was not able to find the recipes', error);
    }
}

async function getRecipeById(id) {
    try {
        const foundRecipe = await Recipe.findById(id)
        console.log(foundRecipe);
    }
    catch(error) {
        console.log("No recipe with this ID exists.");
    }
}



async function updateRecipe(recipeId, newRecipeData) {
    try {
    const recipeUpdated = await Recipe.findByIdAndUpdate(recipeId, newRecipeData, {new:true})
    console.log(recipeUpdated);
    console.log('Recipe has been updated successfuly');
    }
    catch (error) {
        console.log('Error: Recipe did not update');
    }
}


async function deleteRecipe(recipeId) {
    try {
    const recipeDeleted = await Recipe.findByIdAndDelete(recipeId)
    console.log("Recipe successfully deleted.")
    }
    catch(error) {
        console.log('Error: Was not able to delete the Recipe');
    }
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}