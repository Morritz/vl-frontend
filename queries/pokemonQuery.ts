import { PokemonEntryProps } from "../components/PokemonEntry";
import { IPokemon } from "../interfaces/Pokemon";
import { IPokemonDetails } from "../interfaces/PokemonDetails";
interface IPokemonQueryResult {
  name: string;
  url: string;
}

interface IPokemonQuery {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonQueryResult[];
}

export const queryPokemons = async (limit: number = 20, offset: number = 0) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = (await res.json()) as IPokemonQuery;

    const pokemons: IPokemon[] = await Promise.all(
      data.results.map(async (result) => {
        const res = await fetch(result.url);
        const data = (await res.json()) as IPokemonDetails;
        return {
          basicDetails: {
            name: data.name,
            sprite: data.sprites.front_default,
            type: data.types[0].type.name,
          },
          extendedDetails: {
            height: data.height,
            weight: data.weight,
          },
        };
      })
    );
    return pokemons;
  } catch (e) {
    console.error(e);
    return [];
  }
};
