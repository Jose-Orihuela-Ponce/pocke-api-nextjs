import React from 'react';
import PockeCard from './PockeCard';
import { useDispatch, useSelector } from 'react-redux';
import { SsetLoading, setPokemons } from '@/actions';
import Loading from './Loading';

export let pokemonsALFin = [];
export default function PockeList() {
  // const favorite = useSelector((state) => state.favorite);
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(SsetLoading(true));

    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
        );
        const { results } = await response.json();
        const responses = await Promise.all(
          results.map((poke) => fetch(poke.url))
        );
        const pokemonData = await Promise.all(
          responses.map((res) => res.json())
        );
        const updatedPokemonData = pokemonData.map((obj) => ({
          ...obj,
          favorite: false
        }));
        pokemonsALFin = [...updatedPokemonData];
        dispatch(setPokemons(updatedPokemonData));
        setTimeout(() => {
          dispatch(SsetLoading(false));
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
        dispatch(SsetLoading(false));
      }
    };

    fetchPokemonData();
  }, []);

  const handleClick = (index) => {
    const updatedPkemons = [...pokemons];
    updatedPkemons[index].favorite = updatedPkemons[index].favorite
      ? false
      : true;
    dispatch(setPokemons(updatedPkemons));
    console.log(`You clicked the element of index ${index}`);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-3 gap-4 mt-6 md:grid-cols-2">
          {pokemons?.map((item, i) => (
            <PockeCard
              key={i}
              name={item.name}
              image={item.sprites?.front_default}
              abilities={item.abilities[1]?.ability.name}
              onClick={() => handleClick(i)}
              favorite={item.favorite}
            />
          ))}
        </div>
      )}
    </>
  );
}
