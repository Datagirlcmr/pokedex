let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if (
      typeof pokemon === "object"
      // "name" in pokemon &&
      // "height" in pokemon &&
      // "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
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
    button.addEventListener("click", function (event) {
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
    showLoadingMessage();
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
    showLoadingMessage();
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

  let showLoadingMessage = function () {
    let msg = "Please Wait While Pokemon Details Load";
    return msg;
  };

  let hideLoadingMessage = function () {
    !showLoadingMessage();
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

// pokemonRepository.loadList().then(function () {
//   pokemonRepository.getAll().forEach(function (pokemon) {
//     pokemonRepository.addListItem(pokemon);
//   });
// });

(function () {
  let form = document.querySelector("#register-form");
  let emailInput = document.querySelector("#email");
  let passwordInput = document.querySelector("#password");

  function validateEmail() {
    let value = emailInput.value;
    let hasSign = value.indexOf("@") > -1;
    let hasDot = value.indexOf(".") > -1;

    return value && hasSign && hasDot;
  }

  function validatePassword() {
    let value = passwordInput.value
    let validPassword = value.length >= 8
    return value && validPassword;
  }

  function validateForm() {
    return validateEmail() && validatePassword();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert("Success!");
    }
  });

  // THE RETURN STATEMENT HERE
})();
