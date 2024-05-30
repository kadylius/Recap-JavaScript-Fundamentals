fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => {
    // data is the JSON object returned by the API
    const pokemonname = data.name;
    const spriteURL = data.sprites.front_default;
    const spriteBackIMGURL = data.sprites.back_default;
    console.log(pokemonname);
  }

  async function fetchPokemonData(pokemonName) { try { const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); const data = await response.json(); const pokemonInfo = { name: data.name, spriteURL: data.sprites.front_default, spriteBackIMGURL: data.sprites.back_default, }; console.log(pokemonInfo); // Log the pokemonInfo to the console return pokemonInfo; } catch (error) { console.error("Error fetching the Pokémon data:", error); } } // Example usage: fetchPokemonData("pikachu");