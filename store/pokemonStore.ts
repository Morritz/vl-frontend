import { useCallback } from "react";
import create from "zustand";
import { combine } from "zustand/middleware";
import { IPokemon } from "../interfaces/Pokemon";

export const usePokemonStore = (pokemons: IPokemon[]) =>
  useCallback(
    create(
      combine({ pokemons }, (set) => ({
        addPokemons: (pokemons: IPokemon[]) =>
          set((state) => ({ pokemons: [...state.pokemons, ...pokemons] })),
        setPokemons: (pokemons: IPokemon[]) => set({ pokemons }),
      }))
    ),
    []
  );
