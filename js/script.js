let pokemonRepository = (function () {
  let pokemonList = [];
  pokemonList[0] = {
    name: "Bulbusaur",
    height: 0.7,
    types: ["grass", "poison"],
  };
  pokemonList[1] = {
    name: "Charmander",
    height: 1.3,
    types: ["grass", "poison"],
  };
  pokemonList[2] = {
    name: "Ivysaur",
    height: 0.3,
    types: ["grass", "poison"],
  };

  let add = function (pokemon) {
    if (typeof pokemon !== "object") {
      alert("Pokemon added should be in the form of an object");
    } else if (!("name" in pokemon) || !("height" in pokemon)) {
      alert(
        "Pokemon characters must be added with their name and height details"
      );
    } else {
      pokemonList.push(pokemon);
    }
  };

  let getAll = function () {
    pokemonList.forEach((pokemon) => {
      addListItem(pokemon);
    });
  };

  let addListItem = function (pokemon) {
    let list = document.querySelector("ul");
    let listItems = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    listItems.appendChild(button);
    list.appendChild(listItems);
  };

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

pokemonRepository.add({ name: "Pikachu", height: 0.6 });
pokemonRepository.getAll();
console.log(pokemonRepository.filter("char"));
