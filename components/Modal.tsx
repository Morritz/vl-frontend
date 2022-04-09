import { IPokemon } from "../interfaces/Pokemon";
import { PokemonEntry } from "./PokemonEntry";

interface IModal {
  pokemon: IPokemon;
  onClose?: () => void;
}

export const Modal = ({ pokemon, onClose }: IModal) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-full bg-gray-50">
      <div className="flex justify-end w-full p-4">
        <button
          className={
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          }
          onClick={onClose}
        >
          {"Close"}
        </button>
      </div>
      <PokemonEntry {...pokemon.basicDetails} />
      <div className="p-4 flex flex-row gap-4 border">
        <div className="uppercase font-bold">
          <p>Height</p>
          <p>Weight</p>
        </div>
        <div>
          <p>{pokemon.extendedDetails.height}</p>
          <p>{pokemon.extendedDetails.weight}</p>
        </div>
      </div>
    </div>
  );
};
