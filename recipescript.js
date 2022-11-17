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
      name: "Veggie Yaki Udon",
      ingredients:
        "udon noodle, mangetout, pak choi, red onion, spring onion, baby corn, garlic, soy sauce, oil",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/yaki-udon-19d4efb.jpg?quality=90&webp=true&resize=440,400",
    },
    {
      name: "Prawn & Harissa Spaghetti",
      ingredients:
        "spaghetti, broccoli, king prawn, cherry tomatoes, harissa paste, olive oil",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/prawn-harissa-spaghetti-d29786f.jpg?quality=90&webp=true&resize=440,400",
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
