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

const container = document.querySelector(".container");
const receipeList = document.getElementById("receipe-list");
const receipeSearch = document.getElementById("receipe-search");
const allReceipes = getAllRecipes();

function setup() {
  displayReceipes(allReceipes);
  selectReceipes(allReceipes);
}

//To see all receipes
function displayReceipes(receipes){
  
  container.innerHTML = "";

  for(let receipe of receipes){
    const article = document.createElement("article");

    const title = document.createElement("h2");
    title.textContent = `${receipe.name}`;
    article.appendChild(title);

    const image = document.createElement("img");
    image.src = receipe.image;
    article.appendChild(image);

    const ingredients = document.createElement("p");
    ingredients.textContent = `Ingredients: ${receipe.ingredients}`;
    article.appendChild(ingredients);

    container.appendChild(article);
 }
}


// To select receipes
function selectReceipes(receipes){
  receipeList.innerHTML= "";

   for (let receipe of receipes) {
     const option = document.createElement("option");
     const dropdownOption = `${receipe.name}`;
     option.value = dropdownOption;
     option.innerText = dropdownOption;

     receipeList.appendChild(option)
   }
};    

window.onload = setup();