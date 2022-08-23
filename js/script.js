let pokemonList = [];
pokemonList[0] = {
    name: 'Bulbusaur',
    height: 0.7,
    types: ['grass', 'poison']
}
pokemonList[1] = {
    name: 'Charmander',
    height: 1.3,
    types: ['grass', 'poison']
}
pokemonList[2] = {
    name: 'Ivysaur',
    height: 0.3,
    types: ['grass', 'poison']
}
let i = 0
while (i < pokemonList.length) {

    if (pokemonList[i].height > 1) {
        document.write(`${pokemonList[i].name} (Height: ${pokemonList[i].height}) Wow that's big <br>`)
    }
    else {
        document.write(`${pokemonList[i].name} (Height: ${pokemonList[i].height}) <br>`)
    }
    i++
}


