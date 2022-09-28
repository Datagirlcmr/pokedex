let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

  let loadList = function() {
    return fetch(apiUrl).then(function(response){
      response.json().then(function(json){
        json.results.forEach(character => {
          let pokemon = {
            name: character.name,
            detailsUrl: character.url
          }
          add (pokemon)
        });
      })
    }).catch(function(error){
      console.log(error)
    })
   }

  let loadDetails = function() {  }

  return {
    add: add,
    getAll: getAll,
    filter: filter,
    addListItem: addListItem,
    loadList: loadList
  };
})();

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
})


