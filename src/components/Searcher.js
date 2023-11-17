import { useDispatch, useSelector } from "react-redux";
import { setValue, setPokemons } from "@/actions";
import { pokemonsALFin } from "./PockeList";

export default function Searcher() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const searchedPokemons = (value) => {
    dispatch(setPokemons(pokemonsALFin));
    let newPokemons = pokemonsALFin.filter((el) => {
      return el.name.toLowerCase().includes(value.toLowerCase());
    });
    dispatch(setPokemons(newPokemons));
  };
  return (
    <>
      <input
        value={value}
        type="text"
        placeholder="pokemón"
        className="w-80 h-8 rounded-md text-black text-center"
        onChange={(e) => {
          dispatch(setValue(e.target.value));
          searchedPokemons(e.target.value);
        }}
      />
    </>
  );
}
