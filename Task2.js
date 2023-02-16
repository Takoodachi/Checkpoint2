const search_input = document.getElementById('search-bar');
const names = document.querySelector(".name");
const id = document.querySelector(".id");
const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const bio = document.querySelector(".bio");


const pokemonImage = document.querySelector(".pokemon-img");

const fetchApi = async (pkmnName) => {
    // Joining Pokémon names that has more than one word
    pkmnNameApi = pkmnName.split(' ').join('-');

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pkmnNameApi);
    
    if (response.status === 200) {
        const pkmnData = await response.json();
        return pkmnData;
    } 

    return false;
}

search_input.addEventListener('change', async (event) => {
    const pkmnData  = await fetchApi(event.target.value);

    // Validation when Pokémon does not exist
    if (!pkmnData) {
        alert('Pokémon does not exist.');
        return;
    }

    // For debugging - Will be removed later on
    console.log(pkmnData);

    // Sets pokemon image
    pokemonImage.src = pkmnData.sprites.other.home.front_default;

    names.innerHTML = pkmnData.name
    height.innerHTML = pkmnData.height
    weight.innerHTML = pkmnData.weight
    id.innerHTML = pkmnData.id
    
});