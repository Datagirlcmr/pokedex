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

pokemonList.forEach((pokemon) => {
  document.write(`${pokemon.name} (Height: ${pokemon.height}) <br>`);
});

// let pokemonRepository = (function () {
//     let pokemonList = []; // empty array

//     let add = function (pokemon) {
//       pokemonList.push(pokemon);
//     };

//     let getAll = function () {
//       return pokemonList;
//     };

//     return {
//       add: add,
//       getAll: getAll,
//     };
//   })();

//   console.log(pokemonRepository.getAll()); // []
//   pokemonRepository.add({ name: "Pikachu" });
//   console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]
