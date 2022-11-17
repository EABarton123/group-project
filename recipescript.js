function getAllRecipes() {
  return [
    {
      name: "Leek and Potato Soup",
      ingredients:
        "water (for water saute), leeks, potatoes, dried thyme, bay leaf, vegetable stock",
      image:
        "https://healthylivingmarket.com/wp-content/uploads/2017/04/potatoleek.jpg",
    },
    {
      name: "Carrot Omelette",
      ingredients: "grated carrots, rapeseed oil, eggs, salt",
      image:
        "https://www.pregnancyeats.com/wp-content/uploads/2022/01/10-Carrot-Omelette-on-Plate-for-Breakfast_A-Medium.jpg",
    },
    {
      name: "Brussels sprout, hazelnut & leek pasta",
      ingredients:
        "rapeseed oil, 3 leeks, brussels sprouts, 2 garlic cloves, pasta, lemon zest, parsley, chopped hazelnuts",
      image:
        "https://assets.bonappetit.com/photos/57accbedf1c801a1038bc788/1:1/w_2626,h_2626,c_limit/rigatoni-with-brussels-sprouts-parmesan-lemon-and-leek.jpg",
    },
    {
      name: "Pumpkin & parsnip cassoulet",
      ingredients:
        "olive oil, 2 onions, pumpkin, parsnip, garlic cloves, mixed beans, chopped tomatoes, vegetable stock, thyme, fresh breadcrumb",
      image:
        "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprodmigration%2Fweb%2Fbin%2F6eff021b-c69f-334f-bce5-c3345e0ac84a.jpg?crop=1500%2C1000%2C0%2C0",
    },
  ];
}
const container = document.querySelector(".container");
const recipeList = document.getElementById("recipe-list");
const recipeSearch = document.getElementById("recipe-search");
const allRecipes = getAllRecipes();
function setup() {
  displayRecipes(allRecipes);
  selectRecipes(allRecipes);
}
//To display all recipes
function displayRecipes(recipes) {
  container.innerHTML = "";
  for (let recipe of recipes) {
    const article = document.createElement("article");
    const title = document.createElement("h2");
    title.textContent = `${recipe.name}`;
    article.appendChild(title);
    const image = document.createElement("img");
    image.src = recipe.image;
    article.appendChild(image);
    const ingredients = document.createElement("p");
    ingredients.textContent = `Ingredients: ${recipe.ingredients}`;
    article.appendChild(ingredients);
    container.appendChild(article);
  }
}
// To select recipe from option list
function selectRecipes(recipes) {
  recipeList.innerHTML = "";
  for (let recipe of recipes) {
    const option = document.createElement("option");
    const dropdownOption = `${recipe.name}`;
    option.value = dropdownOption;
    option.innerText = dropdownOption;
    recipeList.appendChild(option);
  }
}
//To populate selected recipe
recipeList.addEventListener("change", (e) => {
  const selectedRecipe = e.target.value;
  const selectedRp = allRecipes.filter((recipe) => {
    return recipe.name === selectedRecipe;
  });
  displayRecipes(selectedRp);
});
//To search specific recipe
recipeSearch.addEventListener("input", (e) => {
  const matchingValue = e.target.value.toUpperCase();
  const matchingRecipes = allRecipes.filter((recipe) => {
    return recipe.name.toUpperCase().includes(matchingValue);
  });
  displayRecipes(matchingRecipes);
});
window.onload = setup();
