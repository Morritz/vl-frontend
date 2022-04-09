import { PokemonEntryProps } from "../components/PokemonEntry";
import { IPokemonDetails } from "./PokemonDetails";

interface IPokemonExtended {
  height: IPokemonDetails["height"];
  weight: IPokemonDetails["weight"];
}

export interface IPokemon {
  basicDetails: PokemonEntryProps;
  extendedDetails: IPokemonExtended;
}
