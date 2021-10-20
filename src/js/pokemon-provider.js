const getPokemon = async (id) => {

  let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const response = await fetch(pokeUrl);

  return await response.json();

}
