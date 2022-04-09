import { useCallback } from "react";
import create from "zustand";
import { combine } from "zustand/middleware";
import { PokemonEntryProps } from "../components/PokemonEntry";

export const usePokemonStore = (pokemons: PokemonEntryProps[]) =>
  useCallback(
    create(
      combine({ pokemons }, (set) => ({
        addPokemons: (pokemons: PokemonEntryProps[]) =>
          set((state) => ({ pokemons: [...state.pokemons, ...pokemons] })),
        setPokemons: (pokemons: PokemonEntryProps[]) => set({ pokemons }),
      }))
    ),
    []
  );
