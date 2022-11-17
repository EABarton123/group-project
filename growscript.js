function getAllVegetables() {
  return [
    {
      name: "How to grow potatoes",
      instructions: "instructions in here",
      image:
        "https://th.bing.com/th/id/OIP.niYvK3-p7zMbhGmIV_zLiwHaFj?w=237&amp;h=180&amp;c=7&amp;r=0&amp;o=5&amp;dpr=2&amp;pid=1.7",
      link: "",
    },
    {
      name: "How to grow carrots",
      instructions: "instructions in here",
      image:
        "https://th.bing.com/th/id/OIP.arpvVVBDY9CDTL-FL9Y6lgHaE8?w=252&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
      link: "",
    },
  ];
}
​
const body = document.getElementById("grow");
const searchElement = document.getElementById("search");
const allVegetables = getAllVegetables();
​
function loadVegetablesList(vegetables) {
  const body = document.getElementById("grow");
  vegetables.forEach((vegetable) => {
    body.appendChild(createVegetableList(vegetable));
  });
}
​
loadVegetablesList(allVegetables);
​
function createVegetableList(vegetable) {
  const eachVegetableCard = document.createElement("section");
​
  const vegetableNameHeader = document.createElement("h2");
  vegetableNameHeader.innerText = vegetable.name; //name is ready
​
  const vegetableInstructions = document.createElement("p");
  vegetableInstructions.innerHTML = vegetable.instructions; //summary is ready
​
  // Now, we will append them one by one
  eachVegetableCard.appendChild(vegetableNameHeader);
  eachVegetableCard.appendChild(vegetableInstructions);
​
  const imgTag = document.createElement("img");
  imgTag.src = vegetable.image;
  eachVegetableCard.appendChild(imgTag);
  return eachVegetableCard;
}
​
searchElement.addEventListener("input", function () {
  const searchInput = searchElement.value.toLowerCase();
  const filterResults = allVegetables.filter((vegetable) => {
    return (
      vegetable.name.toLowerCase().includes(searchInput) ||
      vegetable.instructions.toLowerCase().includes(searchInput)
    );
  });
  body.innerHTML = "";
  loadVegetablesList(filterResults);
});