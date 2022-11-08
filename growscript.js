function getAllVegetables() {
  return [
    {
      name: "How to grow potatoes",
      instructions: "",
      image: "",
      link: "",
    },
    {
      name: "How to grow carrots",
      instructions: "",
      image: "",
      link: "",
    },
  ];
}

const body = document.getElementById("grow");
const searchElement = document.getElementById("search");
const allVegetables = getAllVegetables();

function loadVegetablesList(vegetable) {
  const body = document.getElementById("grow");
  vegetables.forEach((vegetable) => {
    body.appendChild(createVegetableList(vegetable));
  });
}

loadVegetablesList(allVegetables);

function createVegetableList(vegetable) {
  const eachVegetableCard = document.createElement("section");

  const vegetableNameHeader = document.createElement("h2");
  vegetableNameHeader.innerText = vegetable.name; //name is ready

  const vegetableInstructions = document.createElement("p");
  vegetableInstructions.innerHTML = vegetable.instructions; //summary is ready

  // Now, we will append them one by one
  eachVegetableCard.appendChild(vegetableNameHeader);
  eachVegetableCard.appendChild(vegetableInstructions);

  const imgTag = document.createElement("img");
  imgTag.src = vegetable.image;
  eachVegetableCard.appendChild(imgTag);
  return eachVegetableCard;
}

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
