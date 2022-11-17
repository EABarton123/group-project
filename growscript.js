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
    {
      name: "How to grow brussels sprouts",
      instructions:
        "From mid-May to early June, when the young plants are 10-15cm (4-6in) tall and have seven true leaves, transplant them to their final growing position: Choose a sunny site, sheltered from strong winds: Improve the soil by adding up to two bucketfuls of well-rotted manure per square metre/yard, and a high potassium general fertiliser, such as Vitax Q4, at a rate of three handfuls per square metre/yard. Water the plants well before moving them, and again afterwards: Space them 60cm (2ft) apart, with 75cm (2½ft) between rows: Water the plants regularly until they have settled in. Then water in dry weather, repeating every 10–14 days. In July, apply a top-dressing of nitrogen-rich fertiliser, such as dried poultry manure pellets (150g/5oz per square metre/yard).In September, mound soil around the base of the stems, to provide extra support.",
      image:
        "https://www.agrifarming.in/wp-content/uploads/2015/10/Brussles-Sprout-Cultivation.jpg",
      link: "https://www.rhs.org.uk/vegetables/brussels-sprouts/grow-your-own",
    },
    {
      name: "How to grow parsnips",
      instructions:
        "When seedlings are about 2.5cm (1in) high, thin out to leave one every 15cm (6in). Keep the soil weed free, hand weeding rather than hoeing close to the plants, to avoid damaging the top of the root. Keep the soil evenly moist to prevent roots from splitting.",
      image:
        "https://www.deliaonline.com/sites/default/files/quick_media/ingredient-vegetarian-parsnips-reversed.jpg",
      link: "https://www.rhs.org.uk/vegetables/parsnips/grow-your-own",
    },
  ];
}

const container = document.querySelector(".container");
const vegetableList = document.getElementById("grow-list");
const vegetableSearch = document.getElementById("grow-search");
const allVegetables = getAllVegetables();
function setup() {
  displayInstructions(allVegetables);
  selectInstructions(allVegetables);
}
//To display all recipes
function displayInstructions(vegetables) {
  container.innerHTML = "";
  for (let vegetable of vegetables) {
    const article = document.createElement("article");
    const title = document.createElement("h2");
    title.textContent = `${vegetable.name}`;
    article.appendChild(title);
    const image = document.createElement("img");
    image.src = vegetable.image;
    article.appendChild(image);
    const instructions = document.createElement("p");
    instructions.textContent = `How to grow: ${vegetable.instructions}`;
    article.appendChild(instructions);
    container.appendChild(article);
  }
}
// To select recipe from option list
function selectInstructions(vegetables) {
  vegetableList.innerHTML = "";
  for (let vegetable of vegetables) {
    const option = document.createElement("option");
    const dropdownOption = `${vegetable.name}`;
    option.value = dropdownOption;
    option.innerText = dropdownOption;
    vegetableList.appendChild(option);
  }
}
//To populate selected recipe
vegetableList.addEventListener("change", (e) => {
  const selectedInstructions = e.target.value;
  const selectedInstruction = allVegetables.filter((vegetable) => {
    return vegetable.name === selectedInstructions;
  });
  displayInstructions(selectedInstruction);
});
//To search specific recipe
vegetableSearch.addEventListener("input", (e) => {
  const matchingValue = e.target.value.toUpperCase();
  const matchingInstructions = allVegetables.filter((vegetable) => {
    return vegetable.name.toUpperCase().includes(matchingValue);
  });
  displayInstructions(matchingInstructions);
});
window.onload = setup();
