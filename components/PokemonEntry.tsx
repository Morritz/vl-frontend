import Image from "next/image";

export interface PokemonEntryProps {
  name: string;
  type: string;
  sprite: string;
}

export const PokemonEntry = ({ name, type, sprite }: PokemonEntryProps) => {
  return (
    <div className="p-2 w-[320px]">
      <div className="flex flex-row items-center bg-yellow-50 rounded-xl p-2 gap-8 drop-shadow">
        <Image src={sprite} width={96} height={96} />
        <div className="flex flex-col">
          <p className="italic text-3xl">{name}</p>
          <p>Type: {type}</p>
        </div>
      </div>
    </div>
  );
};
