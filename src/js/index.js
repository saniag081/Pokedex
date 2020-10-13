(function () {
	const search = document.querySelector('#search');

	async function getPokemon(id) {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
		const data = await response.json();
		return data;
	}

	async function init() {
		const firstPokemon = await getPokemon(150);
		updatePokemon(firstPokemon);
	}

	function updatePokemon(pokemon) {
		window.pokemonName.textContent = pokemon.name;
		window.pokemonImage.setAttribute('src', pokemon.sprites.front_default)
	}

	search.addEventListener('change', async () => {
		const pokemon = await getPokemon(search.value);
		updatePokemon(pokemon)
		// console.log(search.value);
	})
	init()
})();
