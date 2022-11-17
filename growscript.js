function getAllVegetables() {
  return [
    {
      name: "How to grow potatoes",
      instructions:
        "Potato plants need ‘earthing up’ as they grow, to protect early shoots from frost damage and ensure the developing potatoes aren’t exposed to light, which turns them green and poisonous. It’s a simple process – once the stems are about 23cm (9in) tall, draw soil up around them, creating a ridge about 15cm (6in) high. As the stems grow, repeat the process several times. The final height of the ridge should be 20–30cm (8in–1ft). Keep the plants well watered in dry weather – particularly once the tubers start to form. Maincrop potatoes benefit from a nitrogen-rich fertiliser around the time of the second earthing up.",
      image:
        "https://th.bing.com/th/id/OIP.niYvK3-p7zMbhGmIV_zLiwHaFj?w=237&amp;h=180&amp;c=7&amp;r=0&amp;o=5&amp;dpr=2&amp;pid=1.7",
      link: "https://www.rhs.org.uk/vegetables/potatoes/grow-your-own",
    },
    {
      name: "How to grow carrots",
      instructions:
        "Carrots are drought resistant so seldom need watering. However, in long dry spells they will benefit from a soaking. Fast-growing weeds can crowd out carrots, so hand weed regularly between rows. Be careful when weeding or thinning that you don’t crush the foliage, as the smell attracts carrot fly.",
      image:
        "https://th.bing.com/th/id/OIP.arpvVVBDY9CDTL-FL9Y6lgHaE8?w=252&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
      link: "https://www.rhs.org.uk/vegetables/carrots/grow-your-own",
    },
  ];
}

const body = document.getElementById("grow");
const searchElement = document.getElementById("grow-search");
const allVegetables = getAllVegetables();

function loadVegetablesList(vegetables) {
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

  const linkToRHS = document.createElement("a");
  linkToRHS.href = vegetable.link;
  linkToRHS.innerHTML = "Taken from RHS website, click here to see more";
  eachVegetableCard.appendChild(linkToRHS);
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
