import Pokedex from 'pokedex-promise-v2';
const options = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}
const P = new Pokedex(options);
export default class Pokemon {
    constructor() {
        this.pokemon;
    }
    async getPokemon(pokeId) {
        try{
        const pokemon = await P.getPokemonByName(pokeId)
        .then(data => {
            console.log(data);
            return data;
        })
        }
        catch (error) {
            throw error;
        }
    }
}