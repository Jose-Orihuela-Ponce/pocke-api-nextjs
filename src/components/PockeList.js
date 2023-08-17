import React from "react";
import PockeCard from "./PockeCard";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "@/actions";

export default function PockeList() {
  const pokemons = useSelector((sttate) => sttate.pokemons);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((res) => res.json())
      .then(({ results }) => dispatch(setPokemons(results)));
  });

  return (
    <div className="grid grid-cols-4 gap-4">
      {pokemons.map((item, i) => (
        <PockeCard key={i} name={item.name} />
      ))}
    </div>
  );
}
