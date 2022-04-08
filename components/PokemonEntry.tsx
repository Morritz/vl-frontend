import Image from "next/image";

interface PokemonEntryProps {
  name: string;
  type: string;
  sprite: string;
}

export const PokemonEntry = ({ name, type, sprite }: PokemonEntryProps) => {
  return (
    <div className="p-4">
      <div className="flex items-center bg-amber-100 rounded">
        <Image src={sprite} width={96} height={96} />
        <div className="flex flex-col">
          <p className="italic text-3xl">{name}</p>
          <p>Type: {type}</p>
        </div>
      </div>
    </div>
  );
};
