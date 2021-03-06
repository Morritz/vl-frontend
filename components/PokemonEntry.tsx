import { motion } from "framer-motion";
import Image from "next/image";

export interface PokemonEntryProps {
  name: string;
  type: string;
  sprite: string;
  onClick?: () => void;
}

export const PokemonEntry = ({
  name,
  type,
  sprite,
  onClick,
}: PokemonEntryProps) => {
  return (
    <motion.div
      onClick={onClick}
      className="p-2 basis-full md:basis-1/2 lg:basis-1/3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-row items-center bg-yellow-50 rounded-xl p-2 gap-8 drop-shadow">
        <Image
          src={
            sprite
              ? sprite
              : "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          }
          width={96}
          height={96}
        />
        <div className="flex flex-col">
          <p className="italic text-3xl">{name}</p>
          <p>Type: {type}</p>
        </div>
      </div>
    </motion.div>
  );
};
