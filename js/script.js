let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    pokemonList.push(pokemon);
    // if (
    //   typeof pokemon === "object" &&
    //   "name" in pokemon &&
    //   "height" in pokemon &&
    //   "types" in pokemon
    // ) {
    //   pokemonList.push(pokemon);
    // } else {
    //   console.log("pokemon is not correct");
    // }
  }

  let getAll = function () {
    return pokemonList;
  };

  let addListItem = function (pokemon) {
    let list = document.querySelector("ul");
    let listItems = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    listItems.appendChild(button);
    list.appendChild(listItems);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  };

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  let filter = function (query) {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  let loadList = function () {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json().then(function (json) {
          json.results.forEach((character) => {
            let pokemon = {
              name: character.name,
              detailsUrl: character.url,
            };
            add(pokemon);
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let loadDetails = function (character) {
    let url = character.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json().then(function (details) {
          character.imageUrl = details.sprites.front_default;
          character.height = details.height;
          character.types = details.types;
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    add: add,
    getAll: getAll,
    filter: filter,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
