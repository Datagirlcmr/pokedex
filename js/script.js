let pokemonRepository = (function () {
  let pokemonList = [{
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"],
  },
  {
    name: "Charizard",
    height: 1.7,
    types: ["fire", "flying"],
  },
  {
    name: "Squirtle",
    height: 1,
    types: ["water"],
  },
];

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "height" in pokemon &&
    "types" in pokemon
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log("pokemon is not correct");
  }
}

  let getAll = function () {
    return pokemonList
  };

  let addListItem = function (pokemon) {
    let list = document.querySelector("ul");
    let listItems = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    listItems.appendChild(button);
    list.appendChild(listItems);
    button.addEventListener("click", ()=>{console.log(pokemon)});
  };

  // function showDetails (pokemon) {
  //   console.log(pokemon);
  // };

  let filter = function (query) {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return {
    add: add,
    getAll: getAll,
    filter: filter,
    addListItem: addListItem,
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
