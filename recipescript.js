function getAllRecipes() {
  return [
    {
      name: "leek and potato soup",
      ingredients:
        "water (for water saute), leeks, potatoes, dried thyme, bay leaf, vegetable stock",
      image:
        "https://healthylivingmarket.com/wp-content/uploads/2017/04/potatoleek.jpg",
    },
    {
      name: "carrot omelette",
      ingredients: "grated carrots, rapeseed oil, eggs, salt",
      image:
        "https://www.pregnancyeats.com/wp-content/uploads/2022/01/10-Carrot-Omelette-on-Plate-for-Breakfast_A-Medium.jpg",
    },
  ];
}

const body = document.getElementById("recipes");
const searchElement = document.getElementById("recipe-search");
const allRecipes = getAllRecipes();

function loadRecipeList(recipes) {
  const body = document.getElementById("recipes");
  recipes.forEach((recipe) => {
    body.appendChild(createRecipeList(recipe));
  });
}

loadRecipeList(allRecipes);

function createRecipeList(recipe) {
  const eachRecipeCard = document.createElement("section");

  const recipeNameHeader = document.createElement("h2");
  recipeNameHeader.innerText = recipe.name; //name is ready

  const recipeIngredients = document.createElement("p");
  recipeIngredients.innerHTML = recipe.ingredients; //summary is ready

  // Now, we will append them one by one
  eachRecipeCard.appendChild(recipeNameHeader);
  eachRecipeCard.appendChild(recipeIngredients);

  const imgTag = document.createElement("img");
  imgTag.src = recipe.image;
  eachRecipeCard.appendChild(imgTag);
  return eachRecipeCard;
}

searchElement.addEventListener("input", function () {
  const searchInput = searchElement.value.toLowerCase();
  const filterResults = allRecipes.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(searchInput) ||
      recipe.ingredients.toLowerCase().includes(searchInput)
    );
  });
  body.innerHTML = "";
  loadRecipeList(filterResults);
});
