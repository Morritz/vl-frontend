import create from "zustand";
import { combine } from "zustand/middleware";
import { PokemonEntryProps } from "../components/PokemonEntry";

export const useStore = create(
  combine({ pokemons: [] as PokemonEntryProps[] }, (set) => ({
    addPokemons: (pokemons: PokemonEntryProps[]) =>
      set((state) => ({ pokemons: [...state.pokemons, ...pokemons] })),
    setPokemons: (pokemons: PokemonEntryProps[]) => set({ pokemons: pokemons }),
  }))
);
