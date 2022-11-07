const body = document.getElementById("body");
const searchElement = document.getElementById("search");
const allRecipes = getAllRecipes();

function loadRecipeList(recipes) {
  recipes.forEach((recipe) => {
    body.appendChild(createRecipeList(recipe));
  });
}

loadRecipeList(getAllRecipes);

function createRecipeList(recipe) {
  const eachRecipeCard = document.createElement("li");

  const recipeNameHeader = document.createElement("h2");
  recipeNameHeader.innerText = recipe.name; //name is ready

  const recipeIngredients = document.createElement("p");
  recipeIngredients.innerHTML = recipe.ingredients; //summary is ready

  // Now, we will append them one by one
  eachRecipeCard.appendChild(recipeNameHeader);
  eachRecipeCard.appendChild(recipeIngredients);

  const imgTag = document.createElement("img");
  imgTag.src = episode.image;
  eachRecipeCard.appendChild(imgTag);
}

searchElement.addEventListener("input", function () {
  const searchInput = searchElement.value.toLowerCase();
  const filterResults = allRecipes.filter((episode) => {
    return (
      recipe.name.toLowerCase().includes(searchInput) ||
      recipe.ingredients.toLowerCase().includes(searchInput)
    );
  });
  body.innerHTML = "";
  loadEpisodeList(filterResults);
});
