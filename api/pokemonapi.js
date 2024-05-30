async function fetchPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    const data = await response.json();
    const pokemonInfo = {
        name: data.name,
        imageURL: data.sprites.front_default
    }
    return pokemonInfo;
}

async function DisplayData() {
    const pokemonInfo = await fetchPokemonData();
    console.log(pokemonInfo.name);
}
DisplayData();