async function fetchPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    const data = await response.json();
    return data;
}
fetchPokemonData().then((data) => console.log(data));