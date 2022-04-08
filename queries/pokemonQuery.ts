import { PokemonEntryProps } from "../components/PokemonEntry";
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

    const pokemons: PokemonEntryProps[] = await Promise.all(
      data.results.map(async (result) => {
        const res = await fetch(result.url);
        const data = (await res.json()) as IPokemonDetails;
        return {
          name: data.name,
          sprite: data.sprites.front_default,
          type: data.types[0].type.name,
        };
      })
    );
    return pokemons;
  } catch (e) {
    console.error(e);
    return [];
  }
};
