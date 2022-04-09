import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { PokemonEntry, PokemonEntryProps } from "../components/PokemonEntry";
import { Spinner } from "../components/Spinner";
import { queryPokemons } from "../queries/pokemonQuery";
import { usePokemonStore } from "../store/pokemonStore";
import clsx from "clsx";
import { Toasts } from "../components/Toasts";

interface HomeProps {
  pokemons: PokemonEntryProps[];
}
const Home: NextPage<HomeProps> = ({ pokemons }) => {
  const state = usePokemonStore(pokemons)();

  const [isLoadMoreButtonDisabled, setLoadMoreButtonDisabled] = useState(false);

  const loadMorePokemons = async () => {
    setLoadMoreButtonDisabled(true);
    const newPokemons = await queryPokemons(20, state.pokemons.length);
    state.addPokemons(newPokemons);
    setLoadMoreButtonDisabled(false);
  };

  return (
    <>
      <Head>
        <title>PokeApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 min-h-screen">
        {state.pokemons.length > 0 ? (
          <>
            <div className="flex flex-row flex-wrap">
              {state.pokemons.map((pokemon) => {
                return <PokemonEntry key={pokemon.name} {...pokemon} />;
              })}
            </div>
            <div className="flex p-4 justify-center flex-row">
              <button
                disabled={isLoadMoreButtonDisabled}
                className={clsx(
                  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center",
                  isLoadMoreButtonDisabled && "cursor-not-allowed"
                )}
                onClick={loadMorePokemons}
              >
                {"Load more..."}
                <Spinner visibility={isLoadMoreButtonDisabled} />
              </button>
            </div>
            <Toasts />
          </>
        ) : (
          <p className="text-center text-2xl">
            Unfortunately, we could not provide you with pokemons.
            <br />
            Try again later.
            <br />
            😔
          </p>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  return { props: { pokemons: await queryPokemons() } };
}

export default Home;
